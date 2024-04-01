import { createI18n } from 'vue-i18n';
import { App } from 'vue';

// Import your language files
import en from './locales/en.json';
import ua from './locales/ua.json';

// Define type for messages object
type Messages = Record<string, string>;

const messages: Messages = {
  en,
  ua
};

// Create a new instance of vue-i18n
const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages
});

// Export the i18n instance
export default i18n;

// Create a function to install the i18n instance globally
export function setupI18n(app: App) {
  app.use(i18n);
}
