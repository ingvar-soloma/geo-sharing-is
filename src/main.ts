import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import {IonicVue} from '@ionic/vue';
import {createPinia} from "pinia";
import i18n from "./i18n"
import {
  isBatteryOptimizationEnabled,
  openBatteryOptimizationSettings,
  requestIgnoreBatteryOptimization
} from './services/batteryOptimizationService';
import {LocationUpdateService} from './services/LocationUpdateService';
import {ForegroundServiceManager} from "@/services/ForegroundServiceManager";
import {useSettingsStore} from "@/stores/settingsStore";

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/main.css';
import {Capacitor} from "@capacitor/core";
import {LocationService} from "@/services/LocationService";

// 🚀 This is the main entry point of the application
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(i18n)
  .use(createPinia());

const LocationUpdateIntervalMS = 1000 * 60;

app.provide('isNativePlatform', Capacitor.isNativePlatform());

router.isReady().then(async () => {
  const locationService = new LocationService();
  await locationService.updateLocation()
  console.log('location is ready')
  app.mount('#app');

  const settingsStore = useSettingsStore();
  await settingsStore.loadSettings();

  if (await isBatteryOptimizationEnabled()) {
    await requestIgnoreBatteryOptimization();
    await openBatteryOptimizationSettings();
  }

  const foregroundServiceManager = new ForegroundServiceManager();
  await foregroundServiceManager.startForegroundService();

  const locationUpdateService = new LocationUpdateService(settingsStore);

  setInterval(() => {
    locationUpdateService.updateGeolocation();
  }, LocationUpdateIntervalMS)

});