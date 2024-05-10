import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'GeoSharing.is',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    // BackgroundRunner: {
    //   label: 'com.example.background.task1',
    //   src: 'background.js',
    //   event: 'myCustomEvent',
    //   repeat: true,
    //   interval: 1,
    //   autoStart: true,
    // },
    BackgroundRunner: {
      label: "com.example.background.task",
      src: "background.js",
      event: "testCapNotification",
      repeat: true,
      interval: 2,
      autoStart: true,
    },
    // PushNotifications: {
    //   presentationOptions: ["badge", "sound", "alert"],
    // },
  },
};

export default config;
