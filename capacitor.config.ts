import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.geoSharing.runner',
  appName: 'GeoSharing.is',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    BackgroundRunner: {
      label: "com.geoSharing.runner.task22",
      src: "background.js",
      event: "syncTest",
      repeat: true,
      interval: 2,
      autoStart: true,
    },
  },
};

export default config;
