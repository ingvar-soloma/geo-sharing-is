import axios from 'axios';
import {toastController} from "@ionic/vue";

export class TelegramBotService {
  private static readonly TELEGRAM_API_URL = 'https://api.telegram.org/bot%s/%s?chat_id=%s';

  constructor(private botToken: string, private chatId: number) {

    // Check if botToken is provided
    if (!botToken) {
      throw new Error('Bot token is required.');
    }

    // Check if chatId is provided and is a valid number
    if (!chatId || isNaN(chatId)) {
      throw new Error('Chat ID is required and must be a valid number.');
    }
  }

  async sendMessage(message: string): Promise<void> {
    try {
      const urlString = TelegramBotService.formatUrl(this.botToken, 'sendMessage', this.chatId);
      const response = await axios.get(urlString, {
        params: {
          text: message,
          parse_mode: 'html'
        }
      });
      console.log('Message sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending message:', (error as Error).message);
      throw 'Error sending message';
    }
  }

  // Todo: edit location instead resend it
  async sendLocation(latitude: number, longitude: number): Promise<void> {
    try {
      const urlString = TelegramBotService.formatUrl(this.botToken, 'sendLocation', this.chatId);
      const response = await axios.get(urlString, {
        params: {
          latitude: latitude,
          longitude: longitude,
          live_period: 3600,
          horizontal_accuracy: 100,
          protect_content: true,
          // heading: 90,
          // title: 'test',
          // address: 'testadr'
        }
      });
      console.log('Location sent successfully:', response.data);
    } catch (error) {

      console.error('Error sending location:', (error as Error).message);
      throw 'Error sending location';
    }
  }

  private static formatUrl(botToken: string, method: string, chatId: number): string {
    return TelegramBotService.TELEGRAM_API_URL.replace('%s', botToken).replace('%s', method).replace('%s', chatId.toString());
  }
}
