import axios from 'axios';
import {Geolocation, Position} from '@capacitor/geolocation';
import {environment} from '@/environment';
import {toastController} from '@ionic/vue';
import {AddressComponents} from "@/types";
import {Location} from "@/stores/dataBaseStore";

export class LocationService {
  private GeoOptions = {
    enableHighAccuracy: true, // Use high accuracy mode
    timeout: 5000, // Wait for 5 seconds for location updates
    maximumAge: 50000, // Accept a cached position that is up to 50 seconds old
  };

  async getCurrentPosition(): Promise<Position['coords']> {
    try {
      const coordinates = await Geolocation.getCurrentPosition(this.GeoOptions);
      return coordinates.coords;
    } catch (error) {
      const toast = await toastController.create({
        message: 'Error getting current position',
        duration: 3000,
        color: 'danger',
        buttons: [{text: 'Close', role: 'cancel',}]
      });
      await toast.present();

      if (!await Geolocation.checkPermissions()) {
        await Geolocation.requestPermissions()
      }

      console.error('Error getting current position:', error);
      throw error;
    }
  }

  async getAddressFromCoordinates(latitude: number, longitude: number): Promise<AddressComponents> {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          latlng: `${latitude},${longitude}`,
          key: environment.googleApiToken,
        },
      });

      if (response.data.results && response.data.results.length > 0) {
        const address = response.data.results[0].formatted_address;
        const city = this.extractCity(response.data.results[0].address_components);
        return {city, address};
      } else {
        throw new Error('No address found for the provided coordinates');
      }
    } catch (error) {
      const toast = await toastController.create({
        message: 'Error fetching address',
        duration: 2000,
        color: 'danger',
        buttons: [{text: 'Close', role: 'cancel',}]
      });
      await toast.present();

      console.error('Error fetching address:', error);
      throw error;
    }
  }

  private extractCity(addressComponents: any[]): string {
    const cityComponent = addressComponents.find(component => component.types.includes('locality'));
    return cityComponent ? cityComponent.long_name : '';
  }

  public distance(cord1: Location, cord2: Location, unit = '') {
    const radLat1 = Math.PI * cord1.latitude / 180;
    const radLat2 = Math.PI * cord2.latitude / 180;
    const theta = cord1.longitude - cord2.longitude;
    const radTheta = Math.PI * theta / 180;
    let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    if (unit == "K") {
      dist = dist * 1.609344
    }
    if (unit == "N") {
      dist = dist * 0.8684
    }
    return dist
  }
}