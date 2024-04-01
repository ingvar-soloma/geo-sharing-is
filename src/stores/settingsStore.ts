import { defineStore } from 'pinia';

export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => ({
    language: 'ua',
    botToken: '',
    chatId: ''
  }),
  actions: {
    setLanguage(language: string) {
      this.language = language;
    },
    setBotToken(botToken: string) {
      this.botToken = botToken;
    },
    setChatId(chatId: string) {
      this.chatId = chatId;
    }
  }
});
