<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ $t('main') }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $t('main') }}</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ $t('locationLabel') }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-label>{{ $t('cityLabel') }}</ion-label>
                                <ion-text>{{ city }}</ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-label>{{ $t('addressLabel') }}</ion-label>
                                <ion-text>{{ address }}</ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-label>{{ $t('lastUpdateTimeLabel') }}</ion-label>
                                <ion-text>{{ lastUpdateTime }}</ion-text>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="auto">
                                <ion-button fill="clear" @click="displayLocation()">
                                    <ion-icon :icon="locate"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="auto">
                                <ion-button fill="clear" @click="updateLocation()">
                                    <ion-icon :icon="refresh"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col size="auto">
                                <ion-button fill="clear" @click="sendLocation()">
                                    <ion-icon :icon="send"></ion-icon>
                                </ion-button>
                            </ion-col>
                        </ion-row>

                    </ion-grid>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n';
import {IonButton, IonCol, IonGrid, IonIcon, IonPage, IonRow} from '@ionic/vue';
import {ref} from 'vue';
import {locate, refresh, send} from 'ionicons/icons';

// Call useI18n at the top of the setup function
const {t} = useI18n();

const location = ref('');
const city = ref('12');
const address = ref('');
const lastUpdateTime = ref('');
const cogIcon = ref('cog');
const coordIcon = ref('coord');
const refreshIcon = ref('refresh');
const sendIcon = ref('send');
</script>