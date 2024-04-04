import axios from 'axios';
import {ChatItem, TelegramChat, TelegramFile} from "@/types";
import path from "path";
import * as fs from "fs";

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
  };

  async getUpdates(offset: number = 0) {
    try {
      const urlString = TelegramBotService.formatUrl(this.botToken, this.METHODS.getUpdates);
      return await axios.get(urlString, {
        params: {
          offset: offset
        }
      });
      // console.log('Updates received:', response.data);
    } catch (error) {
      console.error('Error getting updates:', (error as Error).message);
      throw 'Error getting updates';
    }
  }

  async getChat(chatId: number | string): Promise<TelegramChat> {
    try {
      const urlString = TelegramBotService.formatUrl(this.botToken, this.METHODS.getChat);
      const response = await axios.get(urlString, {
        params: {
          chat_id: chatId
        }
      });
      const chat = response.data.result;
      if (!chat) {
        throw new Error('Chat not found');
      }
      const id = chat.id;
      const name = chat.title || chat.username || '';
      // const image = chat.photo?.small_file_id ? this.getImageUrl(chat.photo.small_file_id) : null;
      const image = chat.photo?.small_file_id;
      return { id, name, image };
    } catch (error) {
      console.error('Error getting chat information:', (error as Error).message);
      throw 'Error getting chat information';
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
      throw 'Error getting chat list';
    }
  }

  async getFile(fileId: string): Promise<TelegramFile> {
    let file
    try {
      const urlString = TelegramBotService.formatUrl(this.botToken, this.METHODS.getFile);
      const response = await axios.get(urlString, {
        params: {
          file_id: fileId
        }
      });
      file = response.data.result;

    } catch (error) {
      console.error('Error getting file information:', (error as Error).message);
      throw 'Error getting file information';
    }

    if (!file) {
      throw new Error('File not found');
    }
    const fileId2 = file.file_id;
    const filePath = file.file_path;
    return { fileId: fileId2, filePath };
  }


  async downloadFile(filePath: string, destinationPath: string): Promise<void> {
    try {
      const fileUrl = TelegramBotService.formatFileUrl(this.botToken, filePath)
      const response = await axios.get(fileUrl, {
        responseType: 'stream'
      });

      const writer = fs.createWriteStream(path.resolve(destinationPath));
      response.data.pipe(writer);

      return new Promise<void>((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    } catch (error) {
      console.error('Error downloading file:', (error as Error).message);
      throw 'Error downloading file';
    }
  }

  private static formatUrl(botToken: string, method: string, chat_id: number|null = null): string {
    let url: string = TelegramBotService.TELEGRAM_API_BASE_URL.replace('%s', botToken).replace('%s', method);

    if (chat_id) url += `?chat_id=${chat_id.toString()}`

    return url;
  }

  private static formatFileUrl(botToken: string, path: string): string {
    return TelegramBotService.TELEGRAM_API_URL_FILE.replace('%s', botToken).replace('%s', path);
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
          disable_notification: true,
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
}
