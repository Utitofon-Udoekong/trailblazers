<template>
  <nav
    class="flex w-full items-center justify-between py-2 px-6 sm:px-20 z-30 bg-black sm:h-1/6 fixed sm:static top-0 inset-x-0 h-auto"
  >
    <div class="flex items-center">
      <div class="logo w-16 sm:w-auto sm:h-20 h-12">
        <a href="/" class="w-full h-full">
          <img src="@/assets/images/logo-text.png" class="w-full h-full sm:block hidden" alt="logo" />
          <img src="@/assets/images/logo.png" class="w-full h-full sm:hidden block" alt="logo" />
        </a>
      </div>
    </div>
    <div class="flex">
      <div class="flex items-center mr-3">
        <div class="hidden md:flex md:justify-between items-center md:bg-transparent">
          <ul class="inline-flex">
            <li class="text-white text-lg mx-4" v-for="(link, i) in navigation" :key="i">
              <a :href="link.href">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button class="mr-2 block md:hidden" aria-label="Open Menu" @click="drawer">
      <svg
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="w-8 h-8"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div @click="isOpen = false" class="absolute inset-0 bg-white opacity-50" tabindex="0"></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-full sm:w-72 bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span class="flex w-full justify-between items-center p-4 border-b">
        <img src="@/assets/images/logo.png" class="w-16 sm:w-auto sm:h-20 h-12" alt="logo" />
        <span class="text-2xl" @click="isOpen = false">X</span>
      </span>
      <div class="flex justify-center items-center flex-col h-auto">
        <span
          @click="isOpen = false"
          class=" p-4 text-white"
          v-for="(link, i) in navigation"
          :key="i"
        >
          <span>
            <a :href="link.href">{{ link.name }}</a>
          </span>
        </span>
      </div>
    </aside>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from '@vue/runtime-core';
const navigation = [
  { name: 'Signals', href: '#vip' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Risk Disclosure', href: '#footer' },
]
export default {
  setup() {
    let isOpen = ref(false);
    const drawer = () => {
      isOpen.value = !isOpen.value
    }
    onMounted(() => {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && isOpen.value) isOpen.value = false;
      });
    })
    return {
      navigation,
      isOpen,
      drawer
    }
  }
}
</script>

<style>
</style>