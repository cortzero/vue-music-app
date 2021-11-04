<template>
  <div class="card" v-if="trackProp">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="trackProp.album_img" alt="Image not found :(">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="trackProp.album_img" alt="Image not found :(">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <strong>{{ trackProp.name }}</strong>
          </p>
          <p class="subtitle is-6">{{ trackProp.artist }}</p>
        </div>
      </div>
      <div class="content">
        <small>
          {{ trackProp.duration_ms | ms-to-mm }}
        </small>
        <nav class="level">
          <div class="level-left">
            <button class="level-item button is-primary" @click="selectTrack">
              <span class="icon is-small">I></span>
            </button>
            <button class="level-item button is-warning" @click="goToTrack(trackProp.id)">
              <span class="icon is-small">+</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ], // Se pueden usar varios mixins si se comparten varias funcionalidades. Incluso entre mixins
  props: {
    trackProp: { type: Object, required: true } // O también más simple => trackProp: Object
  },
  methods: {
    
    goToTrack(id) {
      if (!this.trackProp.preview) { return }
      this.$router.push({ name: 'track', params: { id: id } }); // params: { id } Simplificado
    }
  }
}
</script>