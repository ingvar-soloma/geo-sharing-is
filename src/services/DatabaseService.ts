export type Location = { latitude: number, longitude: number };
export type Locations = Location[];

export class DatabaseService {
  private static locations: Locations = [];

  public static async storeLocation(cord: Location): Promise<void> {
    this.locations.push(cord);
    console.log('Location stored successfully:', cord);
  }

  public static async getLocations(): Promise<Locations> {
    return this.locations;
  }
}