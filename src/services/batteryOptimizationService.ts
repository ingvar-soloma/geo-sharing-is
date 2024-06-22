import {Capacitor} from "@capacitor/core";
import {BatteryOptimization} from '@capawesome-team/capacitor-android-battery-optimization';

export const isBatteryOptimizationEnabled = async () => {
  if (Capacitor.getPlatform() !== 'android') {
    return false;
  }
  const {enabled} = await BatteryOptimization.isBatteryOptimizationEnabled();
  return enabled;
};

export const openBatteryOptimizationSettings = async () => {
  if (Capacitor.getPlatform() !== 'android') {
    return;
  }
  await BatteryOptimization.openBatteryOptimizationSettings();
};

export const requestIgnoreBatteryOptimization = async () => {
  if (Capacitor.getPlatform() !== 'android') {
    return;
  }
  await BatteryOptimization.requestIgnoreBatteryOptimization();
};