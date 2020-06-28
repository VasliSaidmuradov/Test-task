<template>
  <b-container>
    <div class="map">
      <yandex-map :coords="coords" :zoom="13">
        <ymap-marker
          v-for="marker in markers"
          :key="marker.id"
          :marker-id="marker.id"
          :coords="marker.coords"
          :icon="marker.icon"
          :balloon-template="marker.message"
        />
      </yandex-map>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      coords: [43.24784275, 76.93525295],
      markers: [
        {
          id: 1,
          name: "mega-park",
          coords: [43.264191, 76.92942716],
          message: "«Mega Park Алматы»"
        },
        {
          id: 2,
          name: "nurly-tau",
          coords: [43.2291801, 76.9454614],
          icon: {
            layout: "default#image",
            imageHref: 'https://www.seaicons.com/wp-content/uploads/2015/06/map-marker-icon.png',
            imageSize: [35, 35],
            imageOffset: [-12, -35]
          },
          message: null
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 600px;
}
.ymap-container {
  height: 100%;
}
</style>