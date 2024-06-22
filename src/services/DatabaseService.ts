export type Location = { latitude: number, longitude: number };
export type Locations = Location[];

export class DatabaseService {
  private static locations: Locations = [];

  public static async storeLocation(latitude: number, longitude: number): Promise<void> {
    this.locations.push({latitude, longitude});
    console.log('Location stored successfully:', {latitude, longitude});
  }

  public static async getLocations(): Promise<Locations> {
    return this.locations;
  }
}