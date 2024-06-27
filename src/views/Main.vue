<template>
    <!-- 🌍 Main Page -->
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <!-- 🏷️ Page Title -->
                <ion-title>{{ $t('main') }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <!-- 🏷️ Large Page Title -->
                    <ion-title size="large">{{ $t('main') }}</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-card>
                <ion-card-header>
                    <!-- 🏷️ Card Title -->
                    <ion-card-title>{{ $t('locationLabel') }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <!-- 🏷️ City Label -->
                                <ion-label>{{ $t('cityLabel') }}</ion-label>
                                <!-- 📌 City Text -->
                                <ion-text>{{ locationStore.city }}</ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <!-- 🏷️ Address Label -->
                                <ion-label>{{ $t('addressLabel') }}</ion-label>
                                <!-- 📌 Address Text with Link -->
                                <ion-text>
                                    <!-- If the address is available -->
                                    <template v-if="locationStore.address">
                                        <!-- Create a link to open the address in maps -->
                                        <a :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(locationStore.address)"
                                           target="_blank">
                                            {{ locationStore.address }}
                                        </a>
                                    </template>
                                    <!-- If the address is not available -->
                                    <template v-else>
                                        {{ $t('noAddressAvailable') }}
                                    </template>
                                </ion-text>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col>
                                <!-- 🕒 Last Update Time Label -->
                                <ion-label>{{ $t('lastUpdateTimeLabel') }}</ion-label>
                                <!-- 🕒 Last Update Time Text -->
                                <ion-text>{{ locationStore.lastUpdateTime }}</ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="auto">
                                <!-- 📍 Display Location Button -->
                                <ion-button fill="clear" @click="displayLocation()">
                                    <ion-icon :icon="locate"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="auto">
                                <!-- 🔄 Update Location Button -->
                                <ion-button fill="clear" @click="locationService.updateLocation()">
                                    <ion-icon :icon="refresh"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="auto">
                                <!-- ✉️ Send Location Button -->
                                <ion-button fill="clear" @click="sendLocation()">
                                    <ion-icon :icon="send"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="auto">
                                <!-- 🌐 Share Location Button -->
                                <ion-button fill="clear" @click="shareLocation()">
                                    <ion-icon :icon="shareSocial"></ion-icon>
                                </ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>

            <Logger/>

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    toastController
} from '@ionic/vue';
import {locate, refresh, send, shareSocial} from 'ionicons/icons';
import {useLocationStore} from '@/stores/locationStore';
import {useSettingsStore} from "@/stores/settingsStore";
import {TelegramBotService} from '@/services/TelegramBotService';
import {LocationService} from '@/services/LocationService';
import {Share} from '@capacitor/share';
import {onMounted} from "vue";
import {Position} from "@capacitor/geolocation/dist/esm/definitions";
import Logger from "@/components/Logger.vue";

const locationStore = useLocationStore();
const settingsStore = useSettingsStore();
const locationService = new LocationService();

onMounted(async () => {
    await locationService.updateLocation();
});

const displayLocation = async () => {
    try {
        // 🛰️ Get current position
        const coordinates: Position['coords'] = await locationService.getCurrentPosition();
        // 🌍 Update location in store
        locationStore.updateCoordinates(coordinates.latitude, coordinates.longitude);

        // 📌 Display toast with coordinates
        const toast = await toastController.create({
            message: `Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`,
            duration: 3000,
            color: 'primary',
            buttons: [
                {
                    text: 'Copy',
                    handler: () => {
                        // 📋 Copy coordinates to clipboard
                        navigator.clipboard.writeText(`${coordinates.latitude},${coordinates.longitude}`);
                    }
                }
            ]
        });
        await toast.present();
    } catch (error) {
        // ❌ Error handling
        console.error('Error displaying location:', error);
    }
};

const sendLocation = async () => {
    try {
        const coordinates = locationStore.getCoordinates;

        console.log(settingsStore)
        // 📡 Send location via Telegram
        const telegramBot = new TelegramBotService(settingsStore.botToken, settingsStore.chatId);
        await telegramBot.sendLocation(coordinates.latitude, coordinates.longitude);

        // ℹ️ Inform the user that the location has been sent
        const toast = await toastController.create({
            message: 'Location sent via Telegram',
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

        console.error(error);
    }

};

const shareLocation = async () => {
    try {
        const coordinates = {latitude: locationStore.latitude, longitude: locationStore.longitude};
        const address = locationStore.address;

        // Construct the message to share
        const message = `My current location:\nLatitude: ${coordinates.latitude}\nLongitude: ${coordinates.longitude}\nAddress: ${address}`;

        // Call the Share plugin to share the message
        await Share.share({
            title: 'My Location',
            text: message,
            dialogTitle: 'Share my location'
        });
    } catch (error) {
        const toast = await toastController.create({
            message: (error as Error).message,
            duration: 3000,
            color: 'danger',
            buttons: [{text: 'Close', role: 'cancel',}]
        });
        await toast.present();
        console.error('Error sharing location:', error);
    }
};
</script>
