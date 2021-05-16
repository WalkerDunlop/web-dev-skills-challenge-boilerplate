<template>
    <div>
        <p class="font-bold">Example component</p>
        <div class="p-2">
            <div id="map" class="w-96 h-96" />
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export default {
    setup() {
        let map = null

        onMounted(() => {
            // https://docs.mapbox.com/mapbox-gl-js/example/add-a-marker/
            mapboxgl.accessToken = 'SET_YOUR_ACCESS_TOKEN';
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
            })
        })

        return {};
    }
}
</script>
