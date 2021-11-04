const trackMixin = {
  methods: {
    selectTrack() {
      if (!this.trackProp.preview) { return }
      /* this.$emit("trackSelected", this.trackProp.id);
      this.$bus.$emit('set-track', this.trackProp); */ // This.$bus es una nueva instancia de Vue como esta escrito en event-bus.js
      this.$store.commit('setTrack', this.trackProp)
    }
  }
};

export default trackMixin;