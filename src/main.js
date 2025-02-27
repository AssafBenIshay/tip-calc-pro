import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'

const app = createApp(App)

export const store = createStore({
    state: {

        bill: 0,
        discount: 0,
        people: 0,
        tip: 0,

    },
    mutations: {
        setBill(state, n) {
            state.bill = n
        },
        setDiscount(state, n) {
            state.discount = n
        },
        setPeople(state, n) {
            state.people = n
        },
        setTip(state) {
            state.tip = (state.bill * state.discount) / 100
        },
        resetCalculator(state) {
            state.bill = 0
            state.discount = 0
            state.people = 0
            state.tip = 0
        }
    }

})
app.use(store)
app.mount('#app')

