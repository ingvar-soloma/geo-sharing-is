<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="main" href="/tabs/main">
                    <ion-icon aria-hidden="true" :icon="home"/>
                    <ion-label>{{ $t('main') }}</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="settings" href="/tabs/settings">
                    <ion-icon aria-hidden="true" :icon="cog"/>
                    <ion-label>{{ $t('settings') }}</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="history" href="/tabs/history">
                    <ion-icon aria-hidden="true" :icon="square"/>
                    <ion-label>{{ $t('history') }}</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script setup lang="ts">
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/vue';
import {cog, home, square} from 'ionicons/icons';
</script>
