<template>
  <!--Main Navigation-->
  <header>
    <!-- Navbar -->
    <nav
        class="flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
      <div class="flex flex-wrap items-center justify-between px-3">
        <!-- Hamburger button for mobile view -->
        <button
            class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation">
          <!-- Hamburger icon -->
          <span class="[&>svg]:w-7">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7">
            <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
          </svg>
        </span>
        </button>

        <!-- Collapsible navigation container -->
        <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-twe-collapse-item>
          <!-- Logo -->
          <a
              class="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#">
            <img alt="logo" src="https://avatars.githubusercontent.com/u/6698688?s=200&v=4" class="h-10">
            Stats
          </a>
          <!-- Left navigation links -->
          <ul v-for="item in items"
              class="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
              data-twe-navbar-nav-ref>
            <li class="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <!-- Dashboard link -->
              <RouterLink :to="item.to" custom v-slot="{ href, navigate, isActive, isExactActive }">
                <a :href="href" @click="navigate" class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                   :class="[{ 'active-link': isActive, 'active-link-exact': isExactActive }, isActive ? 'underline decoration-2 underline-offset-4 decoration-primary' : 'text-white/60']">{{ item.label }}</a>
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    <!-- Navbar -->
  </header>
  <!--Main Navigation-->
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const items = ref([
  {
    label:'Home',
    to: '/'
  },
  {
    label:'Compare',
    to: '/compare'
  },
  {
    label:'About',
    to: '/about'
  }
])
</script>

<style scoped>
.p-menubar {
  border: 0;
  border-radius: 0;
}
</style>
