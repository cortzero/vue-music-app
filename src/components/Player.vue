<template>
  <div class="content" v-if="track && track.name">
    <p class="">
      <!-- <img :src="track.album.images[0].url" alt="Image not found :("> -->
      <img :src="track.album_img" alt="Image not found :(">
    </p>
    <p>
      <strong>
        {{ track.name }}
      </strong>
      <small>
        {{ track.duration_ms | ms-to-mm }}
      </small>
    </p>
    <p>
      <!-- <audio :src="track.preview_url" controls></audio> -->
      <audio :src="track.audio" controls></audio>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  /* data() {
    return {
      track: {}
    }
  }, */
  computed: {
    ... mapState(['track'])
  },
  created() { // Aquí el component Player escuchará el evento 'set-track' emitodo por Track. Es buena práctica escuchar eventos
    /**
     * El método $on('nombre-evento', function) escucha los eventos
     * El método $emit('nombre-evento', objeto-a-enviar-con-el-evento) los emite
     * Se ejecuta de manera asicrónica: cada vez que ocurra el evento 'set-track' se ejecuta este código
     */
    this.$bus.$on('set-track', (track) => { this.$store.state.track = track; })
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>