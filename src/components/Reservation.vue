<template>
  <section class="flex flex-col text-left space-y-8 pt-2 md:pb-44">
    <div class="text-sm md:text-white max-w-xs">
      HOTEL & RESORT
    </div>

    <div class="text-5xl md:text-white max-w-xs">
      Enjoy Your Holidays
    </div>

    <p class="md:text-white max-w-xs">
      The sky was cloudless and of a deep dark blue the spectacle before us was indeed sublime.
    </p>

    <article
        class="rounded-lg bg-white w-full md:max-w-xl py-2"
    >
      <div class="flex flex-col md:flex-row items-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-300 w-full">
        <div class="flex md:flex-col items-center space-x-8">
          <label for="check_in" class="text-sm text-gray-400">
            Check in
          </label>

          <select id="check_in" class="border-none focus:ring-0">
            <option>13 May</option>
          </select>
        </div>

        <div class="flex md:flex-col items-center space-x-8">
          <label for="check_out" class="text-sm text-gray-400">
            Check out
          </label>

          <select id="check_out" class="border-none focus:ring-0">
            <option>19 May</option>
          </select>
        </div>

        <div class="flex md:flex-col items-center space-x-8">
          <label for="guests" class="text-sm text-gray-400">
            Guests
          </label>

          <input id="guests" class="border-none focus:ring-0 w-36 md:w-20 text-right" type="number" value="1">
        </div>

        <button class="text-white text-xs rounded-full bg-amatista p-2 mx-10">
          CHECK AVAILABILITY
        </button>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Reservation'
})
</script>

<style scoped>

</style>
