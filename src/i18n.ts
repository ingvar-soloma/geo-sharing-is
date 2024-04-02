import { createI18n } from 'vue-i18n';
import { App } from 'vue';

// Import your language files
import en from './locales/en.json';
import ua from './locales/ua.json';

// Define type for messages object

const messages = {
  en,
  ua
};

// Create a new instance of vue-i18n
export default createI18n({
  locale: 'ua',
  fallbackLocale: 'en',
  messages
});
