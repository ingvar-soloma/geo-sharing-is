<template>
    <!-- Button to open modal -->
    <ion-icon :icon="helpCircle" @click="openModal"></ion-icon> <!-- "?" icon -->

    <!-- Modal content -->
    <ion-modal :is-open="isModalOpen">
        <ion-card>
            <ion-card-header>
                <ion-toolbar>
                    <ion-title>{{ $t('telegramBotToken') }}</ion-title>
                    <ion-buttons slot="end">
                        <ion-button @click="closeModal">
                            <ion-icon :icon="close"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-card-header>
            <ion-card-content>
                <!-- Instructions -->
                <p>{{ $t('telegramBotInstruction.toGetATelegramBotToken') }}</p>
                <ol>
                    <li>{{ $t('telegramBotInstruction.openTelegramAndSearch') }}
                        <a href="https://t.me/BotFather">BotFather</a>
                    </li>
                    <li>{{ $t('telegramBotInstruction.sendComandNewBot') }}</li>
                    <li>{{ $t('telegramBotInstruction.getTheApiToken') }}</li>
                </ol>
                <p>{{ $t('telegramBotInstruction.useGeneratedToken') }}</p>
            </ion-card-content>
        </ion-card>
    </ion-modal>
</template>

<script setup>
import { ref } from 'vue';
import {
    IonButtons,
    IonButton,
    IonModal,
    IonCardHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonIcon,
} from '@ionic/vue';
import { helpCircle, close } from "ionicons/icons";

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

