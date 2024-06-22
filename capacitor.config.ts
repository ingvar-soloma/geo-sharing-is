import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.geoSharing.runner',
  appName: 'GeoSharing.is',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
  },
};

export default config;
