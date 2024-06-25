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
                        <ion-label>{{
                                $t('foregroundController.lastUpdatedTimeWithValue', {lastUpdateTime})
                            }}
                        </ion-label>
                    </ion-col>
                </ion-row>
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
                        <ion-button :disabled="isRunning" color="success" @click="start">
                            {{ $t('start') }}
                        </ion-button>
                    </ion-col>
                    <ion-col>
                        <ion-button :disabled="isStopped" color="danger" @click="stop">
                            {{ $t('stop') }}
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

<script lang="ts" setup>
import {useForegroundServiceStore} from '@/stores/foregroundServiceStore';
import {ForegroundServiceManager} from '@/services/ForegroundServiceManager';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow} from "@ionic/vue";
import {computed, onMounted} from "vue";

const manager = new ForegroundServiceManager();


const foregroundServiceStore = useForegroundServiceStore();

const status = computed(() => foregroundServiceStore.status);
const permission = computed(() => foregroundServiceStore.permission);
const lastUpdateTime = computed(() => foregroundServiceStore.lastUpdateTime);
const isRunning = computed(() => foregroundServiceStore.isRunning);
const isStopped = computed(() => foregroundServiceStore.isStopped);
const isPermissionGranted = computed(() => foregroundServiceStore.isPermissionGranted);

const start = async () => {
    await manager.startForegroundService();
};

const stop = async () => {
    await manager.stopForegroundService();
};

const requestPerms = async () => {
    foregroundServiceStore.setPermissionStatus(await manager.requestPermissions());
};

onMounted(async () => {
    foregroundServiceStore.setPermissionStatus(await manager.getPermissionStatus());
});
</script>