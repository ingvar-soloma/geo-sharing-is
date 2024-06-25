<template>
    <ion-card>
        <ion-card-header>
            <!-- 🏷️ Card Title -->
            <ion-card-title>{{ $t('foregroundController.title') }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-label>{{ $t('foregroundController.statusWithValue', {status}) }}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-label>{{ $t('foregroundController.permissionsWithValue', {permission}) }}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-button :disabled="isStarted" color="success" @click="start">{{ $t('start') }}</ion-button>
                    </ion-col>
                    <ion-col>
                        <ion-button :disabled="isStopped" color="danger" @click="stop">{{ $t('stop') }}</ion-button>
                    </ion-col>
                    <ion-col>
                        <ion-button :disabled="isStopped" color="warning" @click="restart">{{
                                $t('restart')
                            }}
                        </ion-button>
                    </ion-col>
                    <ion-col v-if="isPermissionGranted">
                        <ion-button @click="requestPerms">{{ $t('requestPermissions') }}</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import {ForegroundServiceManager} from '@/services/ForegroundServiceManager';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow} from "@ionic/vue";

const manager = new ForegroundServiceManager();

const started = 'started';
const stopped = 'stopped';
const failedToStart = 'failedToStart';
const failedToStop = 'failedToStop';
const granted = 'granted';

export default {
    name: 'ForegroundController',
    components: {IonRow, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonCard},
    data() {
        return {
            status: stopped,
            permission: granted,
        };
    },
    computed: {
        isPermissionGranted() {
            return this.permission === granted;
        },
        isStopped() {
            return this.status === stopped;
        },
        isStarted() {
            return this.status === started;
        },
    },
    methods: {
        async start() {
            const result = await manager.startForegroundService();
            this.status = result ? started : failedToStart;
        },
        async stop() {
            const result = await manager.stopForegroundService();
            this.status = result ? stopped : failedToStop;
        },
        async restart() {
            await this.stop();
            await this.start();
        },
        async requestPerms() {
            this.permission = await manager.requestPermissions();
        },
    },
    async mounted() {
        this.permission = await manager.getPermissionStatus();
    }
};
</script>