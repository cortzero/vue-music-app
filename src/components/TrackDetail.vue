<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 has-text-centered">
        <figure class="media-left">
          <p class="image button-bar">
            <img :src="trackProp.album_img" alt="Image not found :(">
          </p>
          <p>
            <button class="button is-primary is-large" @click="selectTrack">
              <span class="icon">|></span>
            </button>
          </p>
        </figure>
      </div>
      <div class="column is-8">
        <div class="panel">
          <div class="panel-heading">
            <h1 class="title">
              {{ trackProp.name }}
            </h1>
          </div>
          <div class="panel-block">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(v, k) in trackProp" :key="k">
                    <li>
                      <strong>
                        {{ k }}:&nbsp;
                      </strong>
                      <span v-if="k == 'duration_ms'">
                        {{ v | ms-to-mm }}
                      </span>
                      <span v-else>
                        {{ v }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <nav class="level">
                <div class="level-left">
                  <button class="level-item"></button>
                </div>
              </nav>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import trackService from '@/services/track'
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],
/*   data() {
    return {
      trackProp: {}
    }
  }, */
  computed: {
    ...mapState(['track'])
  },
  methods: {
    ...mapActions(['getTrackById'])
  },
  created() {
    const id = this.$route.params.id; // Params.id debe ser el mismo nombre con el que se declaró en routes
    this.trackProp = trackService.getById(id);
/*     if (!this.track || !this.track.id || this.track.id != id) {
      this.getTrackById({ id })
    } */
  }
}
</script>

<style lang="scss" scoped>
  .column {
    margin: 20px;
  }

  .button-bar {
    margin-top: 20px;
  }
</style>