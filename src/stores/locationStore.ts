import { defineStore } from 'pinia';

export const useLocationStore = defineStore({
  id: 'location',
  state: () => ({
    city: '',
    address: '',
    lastUpdateTime: '',
    latitude: 0.0,
    longitude: 0.0,
    lastUpdateCoordinateTime: '',
  }),
  actions: {
    updateLocation(city: string, address: string) {
      this.city = city;
      this.address = address;
      this.lastUpdateTime = new Date().toLocaleString();
    },
    updateCoordinates(latitude: number, longitude: number) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.lastUpdateCoordinateTime = new Date().toLocaleString();

    }
  },
});
