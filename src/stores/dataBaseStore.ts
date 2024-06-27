import {defineStore} from 'pinia';
import {Location, Locations} from "@/types";

export const useDatabaseStore = defineStore({
  id: 'database',
  state: () => ({
    locations: [] as Locations,
  }),
  actions: {
    isSameLatLong: function (lastLocation: Location, cord: Location) {
      return lastLocation.latitude === cord.latitude
        && lastLocation.longitude === cord.longitude;
    },
    // if the last location is the same as the current one, update the timestamp_to instead of adding a new location
    async storeLocation(cord: Location) {
      const lastLocation = this.locations[this.locations.length - 1];
      if (lastLocation && this.isSameLatLong(lastLocation, cord)) {
        lastLocation.timestamp_to = cord.timestamp_from;
        console.log('Location updated successfully:', lastLocation);
        return;
      }
      this.locations.push(cord);
      console.log('Location stored successfully:', cord);
    },
    async getLocations(): Promise<Locations> {
      return this.locations;
    },
    // dev testing function
    async addRandomLocation() {
      await this.storeLocation({
        latitude: Math.random() * 100,
        longitude: Math.random() * 100,
        address: 'Random address',
        timestamp_from: new Date().getTime()
      })
    },
  },
});