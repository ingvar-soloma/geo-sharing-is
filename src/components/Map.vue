<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {LMap, LMarker, LTileLayer, LTooltip} from "@vue-leaflet/vue-leaflet";
import {LeafletMap, Locations} from "@/types";
import {useLocationStore} from "@/stores/locationStore";
import {IonButton, IonIcon} from "@ionic/vue";
import {LocationService} from "@/services/LocationService";
import {locateOutline} from "ionicons/icons";

const props = defineProps<{
    locations: Locations
}>();

const locationStore = useLocationStore();
const locationService = new LocationService();

const zoom = ref(5);
let map = ref<LeafletMap | null>(null);

const currentPosition = ref([locationStore.latitude, locationStore.longitude]);

const centerMap = () => {
    if (!map.value?.leafletObject) return;

    currentPosition.value = [locationStore.latitude, locationStore.longitude];
    map.value.leafletObject.setView(currentPosition.value, 5);
};


onMounted(() => {
    centerMap();
    console.log('mounted')
});

</script>

<template>
    <div class="map" style="height:600px">
        <l-map
            ref="map"
            v-model:zoom="zoom"
            :center="currentPosition"
            :min-zoom="2"
            :use-global-leaflet="false"
            inertia
            world-copy-jump
            zoom-animation
        >
            <l-tile-layer
                layer-type="base"
                name="OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></l-tile-layer>


            <l-marker
                v-for="location in props.locations"
                :lat-lng="[location.latitude, location.longitude]">
                <l-tooltip>
                    {{ location.address }}
                    {{ new Date(location.timestamp_from).toLocaleTimeString() }}
                    <span v-if="location.timestamp_to">
                        - {{ new Date(location.timestamp_to).toLocaleTimeString() }}
                    </span>
                </l-tooltip>
            </l-marker>

        </l-map>
        <ion-button class="map-button" shape="round" @click="centerMap">
            <ion-icon slot="icon-only" :icon="locateOutline" aria-hidden="true"/>
        </ion-button>
    </div>
</template>

<style scoped>
.map-button {
    position: absolute;
    right: 10px;
    bottom: 15px;
    z-index: 1000;
}

.map {
    position: relative;
}
</style>