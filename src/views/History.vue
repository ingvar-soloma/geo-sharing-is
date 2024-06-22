<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ $t('locationHistory') }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $t('locationHistory') }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-button @click="fetchLocations">{{ $t('update') }}</ion-button>

            <ion-list>
                <ion-item v-for="(location, index) in locations" :key="index">
                    <ion-label>
                        <h2>{{ $t('latitudeWithValue', {latitude: location.latitude}) }}</h2>
                        <h3>{{ $t('longitudeWithValue', {longitude: location.longitude}) }}</h3>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import {onMounted, ref} from 'vue';
import {DatabaseService, Location} from '@/services/DatabaseService';

const locations = ref<Location[]>([]);

const fetchLocations = async () => {
    locations.value = await DatabaseService.getLocations();
};

onMounted(fetchLocations);
</script>