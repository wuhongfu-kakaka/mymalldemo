import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

//initial state
const state = {
  //[{ id, quantity 
  //,flags:{ isPick }, price, title, desc }...]
  cartItems: [],
}

//getters
const getters = {
  pickedCartItems: (state, getters) => {
    return state.cartItems.filter( ({ flags}) => flags.isPick)
  },
  pickedCartItemsTotalPrices: (state, getters) => {
    return getters.pickedCartItems.reduce( (total, { lowNowPrice, quantity}) => {
      return total += lowNowPrice * quantity
    },0)
  },
  cartItemsLength: (state) => state.cartItems.length,
  hasCartItem(state) {
    return (id) => { 
      return state.cartItems.findIndex( item => item.id === id) !== -1
    } 
  },
  allCartItemsPickFlag: (state, getters) => {
    if (getters.cartItemsLength === 0) return false
    return state.cartItems.every( ({ flags}) => flags.isPick )
  }

}

//mutations 
const mutations = {
  pushProductToCart (state, payload) {
    state.cartItems.push(payload.produce)
  },
  modifyCartItemQuantity (state, { id, quantity}) {
    const oldCartItem = state.cartItems.find( item => item.id === id)
    if (oldCartItem) {
      oldCartItem.quantity = quantity
    }
  },
  modifyCartItemPickFlag ( state, { id }) {
    const oldCartItem = state.cartItems.find( item => item.id === id)
    if (oldCartItem) {
      const isPick = !oldCartItem.flags.isPick 
      oldCartItem.flags.isPick = isPick
    }
  },
  modifyAllCartPickFlag (state, { isPick }) {
    state.cartItems.forEach( item => item.flags.isPick = isPick)
  }
}

//actions
const actions = {
  addCart({state, commit}, {produce}) {
    const cartItem = state.cartItems.find( ({ id }) => produce.id === id)
    if(!cartItem) {
      //produce新添加的
      commit({
        type: 'pushProductToCart',
        produce
      })
    }else {
      //produce本来就存在在购物车中
      //需要修改quantity ...或其他参数
      commit("modifyCartItemQuantity", produce)
    }
  },
  pickCartItem( {state, commit}, paylaod) {
    commit("modifyCartItemPickFlag", paylaod)
  },
  quanxuanCart({state, getters, commit}) {
    const allPickflag = getters.allCartItemsPickFlag
    console.log(allPickflag);
    
    commit('modifyAllCartPickFlag', { isPick: !allPickflag})
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {},
  strict: debug
})