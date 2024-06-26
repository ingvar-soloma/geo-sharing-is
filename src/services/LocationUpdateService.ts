import {Location, useDatabaseStore} from "@/stores/dataBaseStore";
import {TelegramBotService} from './TelegramBotService';
import {LocationService} from './LocationService';
import {useForegroundServiceStore} from "@/stores/foregroundServiceStore";

const sendingTimeOutMs = 15 * 60 * 1000;

export class LocationUpdateService {
  private lastSentLocation: Location | null = null;
  private timeoutId: number = 0;
  private telegramBot: TelegramBotService;
  private locationService: LocationService;
  private databaseStore: ReturnType<typeof useDatabaseStore>;
  private foregroundServiceStore: ReturnType<typeof useForegroundServiceStore>;

  constructor(settingsStore: any) { // todo: add type
    this.telegramBot = new TelegramBotService(settingsStore.botToken, settingsStore.chatId);
    this.databaseStore = useDatabaseStore();
    this.foregroundServiceStore = useForegroundServiceStore();
    this.locationService = new LocationService();
  }

  public async updateGeolocation(singleRun: boolean = false) {
    // Get current location
    const {latitude, longitude} = await this.locationService.getCurrentPosition();
    const {address} = await this.locationService.getAddressFromCoordinates(latitude, longitude);
    let currentLocation: Location = {
      latitude,
      longitude,
      address,
      timestamp_from: new Date().getTime()
    };

    if (this.lastSentLocation !== null) {

      const distance = this.locationService.distance(currentLocation, this.lastSentLocation);

      console.log('distance', distance)
      if (distance < 0.009) {
        currentLocation = {
          ...this.lastSentLocation,
          timestamp_from: currentLocation.timestamp_from
        };
      }
    }

    // use the time interval
    await this.databaseStore.storeLocation(currentLocation);
    this.foregroundServiceStore.updateLastUpdateTime(currentLocation.timestamp_to ?? currentLocation.timestamp_from);

    // Send location to Telegram only if it changes
    if (this.isLocationChanged(currentLocation)) {
      await this.telegramBot.sendLocation(currentLocation.latitude, currentLocation.longitude);
      this.lastSentLocation = currentLocation;

      singleRun || this.initTimeout(currentLocation);
    }
  }

  private async sendLocationIfNecessary(currentLocation: Location) {
    await this.telegramBot.sendLocation(currentLocation.latitude, currentLocation.longitude);
    this.initTimeout(currentLocation);
  }

  // Clear the previous timeout and set a new one
  private initTimeout(currentLocation: Location) {
    if (this.timeoutId !== 0) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.sendLocationIfNecessary(currentLocation), sendingTimeOutMs);
  }

  private isLocationChanged(cord: Location) {
    return this.lastSentLocation === null
      || this.lastSentLocation.latitude !== cord.latitude
      || this.lastSentLocation.longitude !== cord.longitude;
  }
}