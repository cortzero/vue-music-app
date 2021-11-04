import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/track'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    track: {}
  },
  getters: {

  },
  mutations: {
    setTrack(state, track) {
      state.track = track
    }
  },
  actions: {
    getTrackById(context, payload) {
      /* return trackService.getTrackById(payload.id).then(res => {
        context.commit('setTrack', res)
        return res
      }); */
      return trackService.getTrackById(payload.id);
    }
  }
});

export default store;
