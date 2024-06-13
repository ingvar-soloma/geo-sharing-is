import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import {BackgroundRunner} from "@capacitor/background-runner";
import {IonicVue} from '@ionic/vue';
// import bgGeolocation from '@/services/backgroundGeolocationService'
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
import {createPinia} from "pinia";
import i18n from "./i18n"

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(i18n)
  .use(createPinia());

// import { Storage } from '@ionic/storage';

// const store = new Storage();
// await store.create();

router.isReady().then(async () => {
  app.mount('#app');

  try {
    await BackgroundRunner.requestPermissions({
      apis: ['geolocation', 'notifications']
    })
  } catch (error) {
    console.error('permissions')
    throw error
  }

  // const result = await BackgroundRunner.dispatchEvent({
  //   label: 'com.geoSharing.runner.task',
  //   event: 'syncTest',
  //   details: {},
  // })
  //
  // console.log('BackgroundRunner.dispatchEvent result:', result)
});