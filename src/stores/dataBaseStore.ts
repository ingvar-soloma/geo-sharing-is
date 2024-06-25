import {defineStore} from 'pinia';

export type Location = { latitude: number, longitude: number, timestamp: number };
export type Locations = Location[];

export const useDatabaseStore = defineStore({
  id: 'database',
  state: () => ({
    locations: [] as Locations,
  }),
  actions: {
    async storeLocation(cord: Location) {
      this.locations.push(cord);
      console.log('Location stored successfully:', cord);
    },
    async getLocations(): Promise<Locations> {
      return this.locations;
    },
    // dev testing function
    async addRandomLocation() {
      this.storeLocation({
        latitude: Math.random() * 100,
        longitude: Math.random() * 100,
        timestamp: new Date().getTime()
      })
    },
  },
});