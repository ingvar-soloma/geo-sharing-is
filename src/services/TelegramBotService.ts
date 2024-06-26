import axios from 'axios';
import {ChatItem, TelegramChat, TelegramFile} from '@/types';

export class TelegramBotService {
  private static readonly TELEGRAM_API_BASE_URL = 'https://api.telegram.org/bot%s/%s';
  private static readonly TELEGRAM_API_URL_FILE = `https://api.telegram.org/file/bot%s/%s`;

  constructor(private botToken: string, private chatId: number = 0) {
    if (!botToken) {
      throw new Error('Bot token is required.');
    }
  }

  private readonly METHODS = {
    getUpdates: 'getUpdates',
    getChat: 'getChat',
    getFile: 'getFile',
    sendMessage: 'sendMessage',
    sendLocation: 'sendLocation',
  };

  async getUpdates(offset: number = 0) {
    try {
      const urlString = this.formatUrl(this.METHODS.getUpdates);
      return await axios.get(urlString, {
        params: {
          offset: offset,
        },
      });
    } catch (error) {
      console.error('Error getting updates:', (error as Error).message);
      throw new Error('Error getting updates');
    }
  }

  async getChat(chatId: number | string): Promise<TelegramChat> {
    try {
      const urlString = this.formatUrl(this.METHODS.getChat);
      const response = await axios.get(urlString, {
        params: {
          chat_id: chatId,
        },
      });
      const chat = response.data.result;
      if (!chat) {
        throw new Error('Chat not found');
      }
      const id = chat.id;
      const name = chat.title || chat.username || '';
      return {id, name};
    } catch (error) {
      console.error('Error getting chat information:', (error as Error).message);
      throw new Error('Error getting chat information');
    }
  }

  async getChatList(): Promise<ChatItem[]> {
    try {
      const response = await this.getUpdates();
      const updates = response.data.result || [];

      // Extract chat information from updates
      const chatList: ChatItem[] = [];
      for (const update of updates) {
        const chat = update.message?.chat;
        if (chat) {
          const id = chat.id;
          const name = chat.title || chat.username || '';
          chatList.push({ id, name });
        }
      }
      return chatList;
    } catch (error) {
      console.error('Error getting chat list:', (error as Error).message);
      throw new Error('Error getting chat list');
    }
  }

  async getFile(fileId: string): Promise<TelegramFile> {
    try {
      const urlString = this.formatUrl(this.METHODS.getFile);
      const response = await axios.get(urlString, {
        params: {
          file_id: fileId,
        },
      });
      const file = response.data.result;
      if (!file) {
        throw new Error('File not found');
      }
      const fileId2 = file.file_id;
      const filePath = file.file_path;
      return {fileId: fileId2, filePath};
    } catch (error) {
      console.error('Error getting file information:', (error as Error).message);
      throw new Error('Error getting file information');
    }
  }

  async downloadFile(filePath: string, fileName: string): Promise<void> {
    try {
      const fileUrl = this.formatFileUrl(filePath);
      const response = await axios.get(fileUrl, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error('Error downloading file:', (error as Error).message);
      throw new Error('Error downloading file');
    }
  }

  async sendMessage(message: string): Promise<void> {
    try {
      const urlString = this.formatUrl(this.METHODS.sendMessage);
      const response = await axios.get(urlString, {
        params: {
          text: message,
          parse_mode: 'html',
        },
      });
      console.log('Message sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending message:', (error as Error).message);
      throw new Error('Error sending message');
    }
  }

  // Todo: edit location instead resend it
  async sendLocation(latitude: number, longitude: number): Promise<void> {
    try {
      const urlString = this.formatUrl(this.METHODS.sendLocation);
      const response = await axios.get(urlString, {
        params: {
          latitude: latitude,
          longitude: longitude,
          live_period: 3600,
          horizontal_accuracy: 100,
          protect_content: true,
          disable_notification: true,
          // heading: 90,
          // title: 'test',
          // address: 'testadr'
        },
      });
      console.log('Location sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending location:', (error as Error).message);
      throw new Error('Error sending location');
    }
  }

  private formatUrl(method: string): string {
    let url: string = TelegramBotService.TELEGRAM_API_BASE_URL.replace('%s', this.botToken).replace('%s', method);

    if (method === this.METHODS.sendLocation || method === this.METHODS.sendMessage) {
      url += `?chat_id=${this.chatId.toString()}`;
    }

    return url;
  }

  private formatFileUrl(filePath: string): string {
    return TelegramBotService.TELEGRAM_API_URL_FILE.replace('%s', this.botToken).replace('%s', filePath);
  }
}
