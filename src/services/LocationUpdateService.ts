import {DatabaseService, Location} from './DatabaseService';
import {TelegramBotService} from './TelegramBotService';
import {useSettingsStore} from "@/stores/settingsStore";
import {LocationService} from './LocationService';

const sendingTimeOutMs = 15 * 60 * 1000;

export class LocationUpdateService {
  private lastSentLocation: Location | null = null;
  private timeoutId: number = 0;
  private telegramBot: TelegramBotService;
  private locationService: LocationService;

  constructor() {
    const settingsStore = useSettingsStore();
    this.telegramBot = new TelegramBotService(settingsStore.botToken, settingsStore.chatId);
    this.locationService = new LocationService();
  }

  public async updateGeolocation() {
    // Get current location
    const {latitude, longitude} = await this.locationService.getCurrentPosition();
    let currentLocation = {latitude, longitude};

    if (this.lastSentLocation !== null) {

      const distance = this.locationService.distance(currentLocation, this.lastSentLocation);

      console.log('distance', distance)
      if (distance < 0.009) {
        currentLocation = this.lastSentLocation;
      }
    }


    // use the time interval
    await DatabaseService.storeLocation(currentLocation);

    // Send location to Telegram only if it changes
    if (this.isLocationChanged(currentLocation)) {
      await this.telegramBot.sendLocation(currentLocation.latitude, currentLocation.longitude);
      this.lastSentLocation = currentLocation;

      this.initTimeout(currentLocation);
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