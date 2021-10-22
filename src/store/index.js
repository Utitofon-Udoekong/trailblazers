import { createStore } from 'vuex'
import codeServices from '../services/codeServices'

export default createStore({
  state: {
    code: "Will be gotten after payment",
    package: {
      title: "No package found",
      price: 0
    }
  },
  mutations: {
    setCode(state, payload){
      state.code = payload
    },
    addTocart(state, payload){
      state.package = payload
    }
  },
  actions: {
    getOneMonthCodes({commit}){
      codeServices.getOneMonthCodes().then(code => {
        commit("setCode", code)
      })
    },
    updateOneMonthCodes(){
      codeServices.updateOneMonthCodes();
    },
    getThreeMonthsCodes({commit}){
      codeServices.getThreeMonthsCodes().then(code => {
        commit("setCode", code)
      })
    },
    updateThreeMonthsCodes(){
      codeServices.updateThreeMonthsCodes();
    },
    getSixMonthsCodes({commit}){
      codeServices.getSixMonthsCodes().then(code => {
        commit("setCode", code)
      })
    },
    updateSixMonthsCodes(){
      codeServices.updateSixMonthsCodes();
    },
    getTwelveMonthsCodes({commit}){
      codeServices.getTwelveMonthsCodes().then(code => {
        commit("setCode", code)
      })
    },
    updateTwelveMonthsCodes(){
      codeServices.updateTwelveMonthsCodes();
    },
  },
  modules: {
  }
})
