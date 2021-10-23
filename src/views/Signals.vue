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
      <div>
        <div v-if="!showForm && packagePrice >= 50">
          <form class="w-full my-4" @submit.prevent="submitForm">
            <div class="mb-4">
              <div class="border-2 focus-within:border-black hover:border-black rounded-md">
                <input
                  class="text-md border-gray-300 appearance-none bg-transparent border-none w-full py-3 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Enter your name"
                  required="required"
                  v-model="state.name"
                />
              </div>
              <small v-if="v$.name.$error" class="text-red-600">{{v$.name.$errors[0].$message}}</small>
            </div>
            <div class="mb-4">
              <div class="border-2 focus-within:border-black hover:border-black rounded-md">
                <input
                  class="text-md border-gray-300 appearance-none bg-transparent border-none w-full py-3 px-2 leading-tight focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  required="required"
                  v-model="state.email"
                />
              </div>
              <small v-if="v$.email.$error" class="text-red-600">{{v$.email.$errors[0].$message}}</small>
            </div>
            <div class="mb-4">
              <div class="border-2 focus-within:border-black hover:border-black rounded-md">
                <input
                  class="text-md border-gray-300 appearance-none bg-transparent border-none w-full py-3 px-2 leading-tight focus:outline-none"
                  type="number"
                  placeholder="Enter your phone number"
                  required="required"
                  v-model="state.phone"
                />
              </div>
              <small v-if="v$.phone.$error" class="text-red-600">{{v$.phone.$errors[0].$message}}</small>
            </div>
            <button
              type="submit"
              class="bg-black text-white text-lg font-semibold p-3 w-full sm:w-2/5 rounded-md"
              @click.prevent="submitForm"
            >Continue to payment</button>
          </form>
        </div>
      </div>
      <div class="table-form shadow-md" v-if="showForm">
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
                        <div
                          class="text-md sm:text-lg font-semibold text-gray-700"
                        >{{ packageTitle }}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div
                          class="text-md sm:text-lg font-semibold text-gray-700"
                        >${{ packagePrice }}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="py-3" v-if="packagePrice < 50">Please go back and choose a plan</p>
      <FlutterwaveComponent class="py-3" v-if="showFlutterButton" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import FlutterwaveComponent from '../components/FlutterwaveComponent.vue';
import useVuelidate from '@vuelidate/core'
import { required, email} from '@vuelidate/validators'
export default {
  components: {
    FlutterwaveComponent
  },
  setup() {
    const store = useStore();
    const state = reactive({
      name: "",
      email: "",
      phone: ""
    })
    const rules = computed(() => {
      return {
        name: { required },
        email: { required, email },
        phone: { required }
      }
    })
    const v$ = useVuelidate(rules, state)
    onMounted(() => {
      if (store.state.package.price < 50 || showForm.value === false) {
        showFlutterButton.value = false
      }
    })
    const changeFormState = () => {
      showForm.value = true
    }
    let showFlutterButton = ref(true)
    let showForm = ref(false)
    return {
      packageTitle: store.state.package.title,
      packagePrice: store.state.package.price,
      showFlutterButton,
      showForm,
      changeFormState,
      state,
      v$
    }
  },
  methods: {
    async submitForm() {
      await this.v$.$validate()
      if (!this.v$.$error) {
        this.changeFormState();
        this.showFlutterButton = true
      }
      else console.log("error")
    }
  }
}
</script>

<style>
.bg-flutter-yellow {
  background: #f5a623;
}
</style>