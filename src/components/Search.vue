<template>
  <main>
    <transition name="move">
      <pm-notification v-show="showNotification">
        <p slot="notificationBody">No se encontraron resultados. La conexión al API está en desarrollo.</p>
      </pm-notification>
    </transition>
    <transition name="move">
      <pm-loader v-show="isLoading"></pm-loader>
    </transition>
    <section class="section" v-show="!isLoading">
      <nav class="navbar has-shadow container">
        <div class="container">
          <input
            type="text"
            class="input is-large"
            placeholder="Buscar canciones"
            v-model="searchQuery"
          />
          <button class="button is-info is-large" @click="search">Buscar</button>
          <button class="button is-danger is-large">&times;</button>
          <p class="small">{{ searchMessage }}</p>
        </div>
      </nav>
      <div>
        <span>{{ count }}</span>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
      </div>
      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="track in tracks" :key="track.id">
            <pm-track 
              v-blur="track.preview"
              :class="{ 'is-active': track.id === selectedTrack }"
              :trackProp="track" 
              @trackSelected="setSelectedTrack"
            ></pm-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import trackService from '@/services/track'; // No es necesario la extension

import PmLoader from "@/components/shared/Loader";
import PmNotification from "@/components/shared/Notification";

import PmTrack from '@/components/Track'

export default {
  name: "app",
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ""
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados ${this.tracks.length}`;
    },
    count() {
      return this.$store.state.count;
    }
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
    isLoading() {
      if (this.isLoading) {
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      }
    }
  },
  methods: {
    ... mapMutations(['increment', 'decrement']),
    search() {
      /* if (!this.searchQuery) { return }
      this.isLoading = true;
      trackService.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        this.isLoading = false;
      }); */
      if (!this.searchQuery) { return }
      this.isLoading = true;
      this.tracks = trackService.getByName(this.searchQuery);
      this.showNotification = this.tracks.length === 0;
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    },
    /*increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    } */
  },
  created() {
    //trackService.search(this.searchQuery).then(res => console.log(res));
    this.tracks = trackService.get();
  }
};
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #48c78e solid;
  }
</style>
