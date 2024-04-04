import {defineStore} from 'pinia';

export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => ({
    language: 'ua',
    botToken: '',
    chatId: 0,
  }),
  actions: {
    async loadSettings() {
      try {
        // const language = await Storage.get({ key: 'settings.language' });
        // const botToken = await Storage.get({ key: 'settings.botToken' });
        // const chatId = await Storage.get({ key: 'settings.chatId' });
        const language = localStorage.getItem('settings.language');
        const botToken = localStorage.getItem('settings.botToken');
        const chatId = localStorage.getItem('settings.chatId');

        if (botToken) this.botToken = botToken;
        if (language) this.language = language;
        if (chatId) this.chatId = parseInt(chatId, 10);
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    },
    async saveSettings(key: string, value: any) {
      console.log('saving')
      try {
        // await Storage.set({key: `settings.${key}`, value: value,});
        localStorage.setItem(`settings.${key}`, value.toString());
      } catch (error) {
        console.error('Error saving settings:', error);
      }
    },
    setLanguage(language: string) {
      this.language = language;
      this.saveSettings('language', language);
    },
    setBotToken(botToken: string) {
      this.botToken = botToken;
      this.saveSettings('botToken', botToken);
    },
    setChatId(chatId: string) {
      this.chatId = chatId;
      this.saveSettings('chatId', chatId.toString());
    },
  },
});
