<template>
  <div>
    <div class="px-8 py-2 bg-black fixed inset-x-0 top-0 w-full">
      <div class="logo w-1/6 sm:h-20 h-16">
        <a href="/" class="w-full h-full">
          <img src="@/assets/images/logo-text.png" class="w-full h-full sm:block hidden" alt="logo" />
          <img src="@/assets/images/logo.png" class="w-full h-full sm:hidden block" alt="logo" />
        </a>
      </div>
    </div>
    <div
      class="p-8 mt-48 mb-16 border-t border-brand-red border-solid max-w-5xl mx-auto bg-white shadow-xl"
    >
      <p class="text-md font-semibold cursor-pointer" @click="$router.back()">&lArr; Back</p>
      <div class="table-form shadow-md">
        <div class="flex flex-col">
          <div class="overflow-x-hidden">
            <div class="py-2 align-middle inline-block min-w-full">
              <div class="overflow-hidden sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                      >S/N</th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                      >Package</th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                      >Price</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <p>1</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-md sm:text-lg font-semibold text-gray-700">{{packageTitle}}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-md sm:text-lg font-semibold text-gray-700">${{packagePrice}}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="py-3" v-if="!showFlutterButton">Please go back and choose a plan</p>
      <FlutterwaveComponent class="py-3" v-if="showFlutterButton" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import FlutterwaveComponent from '../components/FlutterwaveComponent.vue';
export default {
  components: {
    FlutterwaveComponent
  },
  setup(){
    const store = useStore();
    onMounted(() => {
      if(store.state.package.price < 50){
        showFlutterButton.value = false
      }
    })
    let showFlutterButton = ref(true)
    return {
      packageTitle: store.state.package.title,
      packagePrice: store.state.package.price,
      showFlutterButton
    }
  }
}
</script>

<style>
.bg-flutter-yellow{
  background: #F5A623;
}
</style>