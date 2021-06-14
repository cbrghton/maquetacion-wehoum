<template>
  <Header></Header>

  <main class="container mx-auto px-4 pt-96 md:pt-10">
    <Reservation></Reservation>

    <About></About>

    <Rooms></Rooms>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue';
import Reservation from './components/Reservation.vue';
import About from './components/About.vue';
import Rooms from './components/Rooms.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Reservation,
    About,
    Rooms
  }
})
</script>

<style>
</style>
