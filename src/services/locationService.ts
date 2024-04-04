import axios from 'axios';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from '@/environment';
import { toastController } from '@ionic/vue';
import {Position} from "@capacitor/geolocation/dist/esm/definitions";
import {AddressComponents} from "@/types";

// 🛰️ Function to get the current position
export async function getCurrentPosition(): Promise<Position['coords']> {
  try {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates.coords;
  } catch (error) {
    // 🚨 Error toast
    const toast = await toastController.create({
      message: 'Error getting current position',
      duration: 3000,
      color: 'danger',
      buttons: [{text: 'Close', role: 'cancel',}]

    });
    await toast.present();

    // 🛑 Check permissions and request if not granted
    if (!await Geolocation.checkPermissions()) {
      await Geolocation.requestPermissions()
    }

    console.error('Error getting current position:', error);
    throw error;
  }
}

// 📍 Function to get address from coordinates
export async function getAddressFromCoordinates(latitude: number, longitude: number): Promise<AddressComponents> {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        latlng: `${latitude},${longitude}`,
        key: environment.googleApiToken,
      },
    });

    // ✅ Check if address data exists
    if (response.data.results && response.data.results.length > 0) {
      // 📌 Extract address and city
      const address = response.data.results[0].formatted_address;
      const city = extractCity(response.data.results[0].address_components);
      return { city, address };
    } else {
      throw new Error('No address found for the provided coordinates');
    }
  } catch (error) {
    // 🚨 Error toast
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

// 🌆 Function to extract city from address components
function extractCity(addressComponents: any[]): string {
  const cityComponent = addressComponents.find(component => component.types.includes('locality'));
  return cityComponent ? cityComponent.long_name : '';
}
