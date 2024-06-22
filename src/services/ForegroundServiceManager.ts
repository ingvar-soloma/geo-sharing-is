import {Capacitor} from "@capacitor/core";
import {ForegroundService, StartForegroundServiceOptions} from '@capawesome-team/capacitor-android-foreground-service';

export class ForegroundServiceManager {
  private readonly options: StartForegroundServiceOptions;

  constructor() {
    this.options = {
      body: "This is the body of the notification",
      id: 123,
      smallIcon: "ic_launcher",
      title: "This is the title of the notification"
    };
  }

  public async startForegroundService() {
    if (Capacitor.getPlatform() !== 'android') {
      return false;
    }

    if (!await this.isPermissionsGranted()) {
      await this.requestPermissions();
    }

    await ForegroundService.startForegroundService(this.options);
    return true;
  }

  public async requestPermissions() {
    return (await ForegroundService.requestPermissions()).display;
  }

  public async getPermissionStatus() {
    return (await ForegroundService.checkPermissions()).display;
  }

  public async stopForegroundService() {
    if (Capacitor.getPlatform() !== 'android') {
      return false;
    }

    await ForegroundService.stopForegroundService();
    return true;
  }

  private async isPermissionsGranted() {
    return await this.getPermissionStatus() === 'granted';
  }
}