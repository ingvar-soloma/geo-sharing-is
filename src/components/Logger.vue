<script lang="ts" setup>
import {IonCol, IonItem, IonLabel, IonList, IonRow, IonSearchbar, IonSelect, IonSelectOption} from '@ionic/vue';
import {useLogStore} from "@/stores/logStore";
import {computed, ref} from "vue";
import {chevronCollapseOutline, chevronExpandOutline} from "ionicons/icons";

const logStore = useLogStore();

const filter = ref(logStore.filter);
const search = ref(logStore.search);
const tagFilter = ref(logStore.tagFilter);
const isMinimized = ref(true);

const tags = computed(() => {
    const allTags = logStore.logs.map(log => log.tag);
    return Array.from(new Set(allTags));
});

const logs = computed(() => {
    let filteredLogs = logStore.logs;

    if (logStore.filter !== 'all') {
        filteredLogs = filteredLogs.filter(log => log.level === logStore.filter);
    }

    if (logStore.search) {
        filteredLogs = filteredLogs.filter(log => log.message.includes(logStore.search));
    }

    if (logStore.tagFilter) {
        filteredLogs = filteredLogs.filter(log => log.tag === logStore.tagFilter);
    }

    return filteredLogs;
});

const highlightSearchTerm = (text: string) => {
    if (!logStore.search) {
        return text;
    }

    const parts = text.split(new RegExp(`(${logStore.search})`, 'gi'));
    return parts.map(part => part.toLowerCase() === logStore.search.toLowerCase() ? `<span style="background-color: yellow; color: #0d0d0d">${part}</span>` : part).join('');
};

const updateFilter = (newFilter) => {
    logStore.setFilter(newFilter);
};
const updateSearch = (newSearch) => {
    logStore.setSearch(newSearch);
};
const updateTagFilter = (newTagFilter) => {
    logStore.setTagFilter(newTagFilter);
};

</script>

<template>
    <div>
        <ion-title>Log</ion-title>
        <ion-row>
            <ion-col size="1">
                <ion-button @click="isMinimized = !isMinimized">
                    <ion-icon slot="icon-only" :icon="isMinimized ? chevronExpandOutline : chevronCollapseOutline"/>
                </ion-button>
            </ion-col>
            <ion-col size="1">
                <ion-select v-model="filter" @ionChange="e => updateFilter(e.detail.value)">
                    <ion-select-option value="all">All</ion-select-option>
                    <ion-select-option value="log">Log</ion-select-option>
                    <ion-select-option value="info">Info</ion-select-option>
                    <ion-select-option value="warning">Warning</ion-select-option>
                    <ion-select-option value="error">Error</ion-select-option>
                </ion-select>
            </ion-col>
            <ion-col size="1">
                <ion-select v-model="tagFilter" @ionChange="e => updateTagFilter(e.detail.value)">
                    <ion-select-option value="">All</ion-select-option>
                    <ion-select-option v-for="tag in tags" :value="tag">{{ tag }}</ion-select-option>
                </ion-select>
            </ion-col>
            <ion-col>
                <ion-searchbar v-model="search" placeholder="Search logs"
                               @ionChange="e => updateSearch(e.detail.value)"></ion-searchbar>
            </ion-col>
        </ion-row>

        <ion-list>
            <ion-item v-for="(entry, index) in logs" :key="index" :class="entry.level">
                <ion-label>
                    <h2 v-html="highlightSearchTerm(entry.message)"></h2>
                    <div class="level-container">
                        <h3>{{ entry.level }}</h3>
                    </div>
                    <p>{{ entry.tag }}</p>
                    <div @click="isMinimized = !isMinimized">
                        <div v-show="!isMinimized">
                            <!--                            <ion-icon :icon="chevronCollapseOutline" />-->
                            <pre>{{ JSON.stringify(entry.object, null, 2) }}</pre>
                        </div>
                        <div v-show="isMinimized">
                            <!--                            <ion-icon :icon="chevronExpandOutline" />-->
                            <span>{{ entry.object }}</span>
                        </div>
                    </div>
                    <p>{{ new Date(entry.timestamp).toLocaleString() }}</p>
                </ion-label>
            </ion-item>
        </ion-list>
    </div>
</template>

<style scoped>
.log-list {
    list-style-type: none;
    padding: 0;
}

.log-entry {
    margin-bottom: 1em;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.log-timestamp,
.log-level,
.log-tag,
.log-message {
    display: block;
}

.log-object {
    white-space: pre-wrap;
    font-family: monospace;
}

.log {
    color: #f0f0f0;
}

.info {
    color: #d0f0d0;
}

.warning {
    color: #f0f0c0;
}

.error {
    color: #f0c0c0;
}

.level-container {
    position: absolute;
    top: 0;
    right: 0;
}

.highlighted {
    background-color: yellow;
}
</style>