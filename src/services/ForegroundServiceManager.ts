import {Capacitor} from "@capacitor/core";
import {ForegroundService, StartForegroundServiceOptions} from '@capawesome-team/capacitor-android-foreground-service';

export class ForegroundServiceManager {
  private options: StartForegroundServiceOptions;

  constructor() {
    this.options = {
      body: "This is the body of the notification",
      buttons: [
        {
          id: 1,
          title: "Stop sharing location"
        },
      ],
      id: 123,
      smallIcon: "ic_stat_icon_config_sample",
      title: "This is the title of the notification"
    };
  }

  public async startForegroundService() {
    if (Capacitor.getPlatform() !== 'android') {
      return false;
    }

    if (!await ForegroundService.checkPermissions()) {
      await ForegroundService.requestPermissions();
    }
  }
}