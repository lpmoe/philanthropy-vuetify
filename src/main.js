import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyCpxHViDHMWXlLrmogE8nP0Qiw1OeADMkM",
      authDomain: "philoscorevuetify.firebaseapp.com",
      databaseURL: "https://philoscorevuetify.firebaseio.com",
      projectId: "philoscorevuetify",
      storageBucket: "philoscorevuetify.appspot.com",
      messagingSenderId: "198812694445"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadEngagements')
  }
})
