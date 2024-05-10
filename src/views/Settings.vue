<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ $t('settings') }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $t('settings') }}</ion-title>
                </ion-toolbar>
            </ion-header>

            <!-- Language selector -->
            <ion-item>
                <ion-label>{{ $t('language') }}</ion-label>
                <ion-select v-model="$i18n.locale" :aria-label="$t('language')"
                            @ionChange="settingsStore.setLanguage($event.detail.value)">
                    <ion-select-option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`"
                                       :value="locale">{{ $t(`locale-${locale}`) }}
                    </ion-select-option>
                </ion-select>
            </ion-item>

            <!-- Telegram connections -->
            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                        {{ $t('telegramConnections') }}
                        <TelegramBotInstructionModal/>
                    </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-label position="stacked">BotToken</ion-label>
                        <ion-input v-model="botToken" :type="showToken ? 'text' : 'password'"
                                   aria-label="BotToken" class="ion-no-padding"/>
                        <ion-button fill="clear" slot="end" aria-label="Show/hide" @click="toggleTokenVisibility">
                            <ion-icon slot="icon-only" :icon="showToken ? eye : eyeOff" aria-hidden="true"></ion-icon>
                        </ion-button>
                        <ion-button :disabled="settingsStore.isBotTokenStored(botToken)" fill="clear" slot="end"
                                    aria-label="Reset" @click="resetBotToken">
                            <ion-icon slot="end" :icon="reloadOutline"></ion-icon>
                        </ion-button>
                    </ion-item>
                    <ion-button :color="settingsStore.isBotTokenStored(botToken) ? 'success': ''"
                                @click="testConnection">{{ $t('telegramBotApi.checkConnectionAndGetChatList') }}
                    </ion-button>

                    <ion-card>
                        <ion-card-header>
                            <ion-card-title>{{ $t('telegramChatList') }}</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-list v-if="chatList.length > 0">
                                <ion-item v-for="chat in chatList" :key="chat.id">
                                    <ion-label>{{ chat.name }}</ion-label>
                                    <ion-label @click="updateChatId(chat.id)">{{ chat.id }}</ion-label>
                                </ion-item>
                            </ion-list>
                            <p v-else>{{ $t('noChatsFound') }}</p>
                        </ion-card-content>
                    </ion-card>

                    <ion-item>
                        <ion-label position="stacked">ChatId</ion-label>
                        <ion-input v-model="chatId" aria-label="BotToken"/>
                        <ion-button :disabled="settingsStore.isChatIdStored(chatId)" fill="clear" slot="end"
                                    aria-label="Reset" @click="resetChatId">
                            <ion-icon slot="end" :icon="reloadOutline"></ion-icon>
                        </ion-button>
                    </ion-item>
                    <ion-button :disabled="settingsStore.isChatIdStored(chatId)"
                                :color="settingsStore.isChatIdStored(chatId) ? 'success': ''" @click="tryToStoreChatId">
                        {{ $t('telegramBotApi.checkChatId') }}
                    </ion-button>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
    toastController,
} from '@ionic/vue';

import {eye, eyeOff, reloadOutline} from 'ionicons/icons';
import {useSettingsStore} from '@/stores/settingsStore';
import {onMounted, ref} from "vue";
import {useI18n} from 'vue-i18n'
import {TelegramBotService} from "@/services/TelegramBotService";
import {ChatItem} from "@/types";
import TelegramBotInstructionModal from "@/components/TelegramBotInstructionModal.vue";

const settingsStore = useSettingsStore();
const {locale} = useI18n()
const showToken = ref(false);
const chatList = ref<ChatItem[] | []>([]);
const botToken = ref('')
const chatId = ref(0)

onMounted(() => {
    settingsStore.loadSettings();
    let languageValue = settingsStore.language;
    if (languageValue) locale.value = languageValue
    botToken.value = settingsStore.botToken
    chatId.value = settingsStore.chatId
});

const testConnection = async () => {
    try {
        const telegramBot = new TelegramBotService(botToken.value);
        chatList.value = await telegramBot.getChatList();

        if (settingsStore.botToken != botToken.value) {
            settingsStore.setBotToken(botToken.value);

            const toast = await toastController.create({
                message: 'TelegramToken has been stored successfully',
                duration: 3000,
                color: 'success',
                buttons: [{text: 'Close', role: 'cancel',}]
            });
            await toast.present();
        }
    } catch (error) {
        const toast = await toastController.create({
            message: (error as Error).message,
            duration: 3000,
            color: 'danger',
            buttons: [{text: 'Close', role: 'cancel',}]
        });
        await toast.present();
        console.error('Error telegram connection:', error);
    }
};

const tryToStoreChatId = async () => {
    try {
        const telegramBot = new TelegramBotService(settingsStore.botToken, chatId.value);
        await telegramBot.sendMessage('Bot has been connected to device.')

        settingsStore.setChatId(chatId.value);

        const toast = await toastController.create({
            message: 'ChatId has been stored successfully',
            duration: 3000,
            color: 'success',
            buttons: [{text: 'Close', role: 'cancel',}]
        });
        await toast.present();
    } catch (error) {
        const toast = await toastController.create({
            message: (error as Error).message,
            duration: 3000,
            color: 'danger',
            buttons: [{text: 'Close', role: 'cancel',}]
        });
        await toast.present();
        console.error('Error telegram connection:', error);
    }

};

const toggleTokenVisibility = () => {
    showToken.value = !showToken.value;
};

const updateChatId = (id: number) => {
    chatId.value = id;
};

const resetChatId = () => {
    chatId.value = settingsStore.chatId;
};

const resetBotToken = () => {
    botToken.value = settingsStore.botToken
}
</script>
