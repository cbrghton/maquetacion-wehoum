<template>
  <section class="flex flex-col md:flex-row md:items-center md:space-x-8 pt-28 md:pt-96 space-y-5">
    <div class="md:flex-auto md:w-full">
      <img src="../assets/images/sideimage1.png" alt="">
    </div>

    <div class="flex flex-col space-y-5">
      <div class="text-sm max-w-xs">
        ABOUT
      </div>

      <div class="text-4xl">
        High Quality Services
      </div>

      <p>
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
      </p>

      <p class="text-xs text-gray-400">
        "A small river named Duden flows by their place and supplies it with the necessary regelialia."
      </p>

      <div class="flex flex-row items-center space-x-8">
        <div class="rounded-full flex items-center justify-center">
          <img src="../assets/images/user2.png" alt="male person">
        </div>

        <div class="flex flex-col items-start text-xs">
          <span>Leo Knight</span>
          <span class="text-gray-400">Owner</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'About'
})
</script>

<style scoped>

</style>
