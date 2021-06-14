<template>
  <header class="container mx-auto pb-16 md:pb-0">
    <nav>
      <section class="flex items-center justify-between p-2">

        <section class="flex items-center space-x-5">
          <a class="m-2" href="">
            <img alt="Amatista Logo" class="w-auto object-cover" src="../assets/images/logo-n.png">
          </a>

          <div class="md:block hidden text-white">
            <ul class="flex items-center space-x-5">
              <li>
                About
              </li>

              <li>
                Rooms
              </li>

              <li>
                Blog
              </li>

              <li>
                Contact
              </li>
            </ul>
          </div>
        </section>

        <section class="flex items-center space-x-5">
          <div class="md:block hidden text-amatista">
            <span class="rounded-full border-amatista border-2 p-2">
              SIGN-UP
            </span>
          </div>

          <div class="rounded-full flex p-2 m-2 bg-amatista text-white items-center justify-center md:hidden block">
            <span class="material-icons">
              menu
            </span>
          </div>
        </section>
      </section>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header'
})
</script>

<style scoped>

</style>
