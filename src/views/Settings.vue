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
                <ion-select v-model="$i18n.locale">
                    <ion-select-option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ $t(`locale-${locale}`) }}</ion-select-option>
                </ion-select>
            </ion-item>

            <!-- Telegram connections -->
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ $t('telegramConnections') }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-label position="stacked">BotToken</ion-label>
                        <ion-input v-model="settingsStore.botToken"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="stacked">ChatId</ion-label>
                        <ion-input v-model="settingsStore.chatId"></ion-input>
                    </ion-item>
                    <ion-button expand="block" @click="testConnection">{{ $t('testConnection') }}</ion-button>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton } from '@ionic/vue';
import { useSettingsStore } from '@/stores/settingsStore';


const settingsStore = useSettingsStore();


const testConnection = () => {
    console.log(settingsStore.chatId)
};
</script>
