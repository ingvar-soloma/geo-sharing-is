import {useForegroundServiceStore} from '@/stores/foregroundServiceStore';
import {Capacitor} from "@capacitor/core";
import {ForegroundService, StartForegroundServiceOptions} from '@capawesome-team/capacitor-android-foreground-service';

export class ForegroundServiceManager {
  private readonly options: StartForegroundServiceOptions;
  private foregroundServiceStore: ReturnType<typeof useForegroundServiceStore> = useForegroundServiceStore();

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
    console.log('Foreground service started');
    this.foregroundServiceStore.setStatus('running');
    return true;
  }

  public async requestPermissions() {
    const permissionStatus = (await ForegroundService.requestPermissions()).display;
    console.log('Permission status:', permissionStatus)
    this.foregroundServiceStore.setPermissionStatus(permissionStatus);
    return permissionStatus;
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