<script lang="ts" setup>
import {ref} from "vue";
import {LMap, LMarker, LTileLayer, LTooltip} from "@vue-leaflet/vue-leaflet";
// import {Locations} from "@/stores/dataBaseStore";


const props = defineProps<{
    locations/*: Locations*/
}>();

const zoom = ref(5);

</script>

<template>
    <div style="height:600px">
        <l-map ref="map" v-model:zoom="zoom" :center="[64.126976, -21.889024]" :use-global-leaflet="false">
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
    </div>
</template>