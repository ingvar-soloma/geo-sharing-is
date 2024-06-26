<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ $t('locationHistory.title') }}</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="addLocation">{{ $t('add') }}</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <Map :locations="locations"/>

            <ion-list>
                <ion-item v-for="(location, index) in locations" :key="index">
                    <ion-label>
                        <h2>{{ $t('locationHistory.latitudeWithValue', {latitude: location.latitude}) }}</h2>
                        <h3>{{ $t('locationHistory.longitudeWithValue', {longitude: location.longitude}) }}</h3>
                        <p>{{ new Date(location.timestamp).toLocaleString() }}</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/vue';
import {computed, inject, onMounted} from 'vue';
import {useDatabaseStore} from "@/stores/dataBaseStore";
import {LocationUpdateService} from "@/services/LocationUpdateService";
import {useSettingsStore} from "@/stores/settingsStore";
import 'leaflet/dist/leaflet.css';
import Map from "@/components/Map.vue";

const settingsStore = useSettingsStore();
settingsStore.loadSettings();
const manager = new LocationUpdateService(settingsStore);
const dataBaseStore = useDatabaseStore();

const locations = computed(() => dataBaseStore.locations);

const addLocation = async () => {
    await manager.updateGeolocation();
};

const isNativePlatform = inject("isNativePlatform");
if (typeof isNativePlatform !== 'boolean') {
    throw new Error("isNativePlatform is not provided");
}

onMounted(() => {
});
</script>