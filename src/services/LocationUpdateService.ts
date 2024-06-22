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

    // Store location in inner db
    await DatabaseService.storeLocation(latitude, longitude);

    // Send location to Telegram only if it changes
    if (this.isLocationChanged(latitude, longitude)) {
      await this.telegramBot.sendLocation(latitude, longitude);
      this.lastSentLocation = {latitude, longitude};

      this.initTimeout(latitude, longitude);
    }
  }

  private async sendLocationIfNecessary(latitude: number, longitude: number) {
    await this.telegramBot.sendLocation(latitude, longitude);
    this.initTimeout(latitude, longitude);
  }

  // Clear the previous timeout and set a new one
  private initTimeout(latitude: number, longitude: number) {
    if (this.timeoutId !== 0) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.sendLocationIfNecessary(latitude, longitude), sendingTimeOutMs);
  }

  private isLocationChanged(latitude: number, longitude: number) {
    return this.lastSentLocation === null || this.lastSentLocation.latitude !== latitude || this.lastSentLocation.longitude !== longitude;
  }
}