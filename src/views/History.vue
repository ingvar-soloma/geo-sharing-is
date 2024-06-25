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
import {onMounted, ref} from 'vue';
import {Locations, useDatabaseStore} from "@/stores/dataBaseStore";
import {LocationUpdateService} from "@/services/LocationUpdateService";

const locations = ref<Locations>([]);
const dataBaseStore = useDatabaseStore();
const manager = new LocationUpdateService();

const fetchLocations = async () => {
    locations.value = await dataBaseStore.getLocations();
};

const addLocation = async () => {
    await manager.updateGeolocation();
};

onMounted(fetchLocations);
</script>