<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-star">
            <div class="navbar-item">
              <strong>Platzi Music</strong>
            </div>
          </div>
          <div class="navbar-end navbar-menu">
            <router-link class="navbar-item" to="/">Buscar</router-link>
            <router-link class="navbar-item" to="about">Nosotros</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">Canciones destacadas</h2>
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from '@/components/Player'

  export default {
    components: {
      PmPlayer
    }    
  }
</script>