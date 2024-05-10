import {TelegramBotService} from "@/services/TelegramBotService";
import {useSettingsStore} from "@/stores/settingsStore";
import {useLocationStore} from "@/stores/locationStore";

const settingsStore = useSettingsStore();
const locationStore = useLocationStore();


async function sendGeolocation() {
  try {
    const coordinates = locationStore.getCoordinates;

    // 📡 Send location via Telegram
    const telegramBot = new TelegramBotService(settingsStore.botToken, settingsStore.chatId);
    await telegramBot.sendLocation(coordinates.latitude, coordinates.longitude);
  } catch (error) {
    throw error
  }

}
