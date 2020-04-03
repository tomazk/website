import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import StaticPage from './pages/StaticPage.vue'
import StatsPage from './pages/StatsPage.vue'
import AdvancedStatsPage from './pages/AdvancedStatsPage.vue'
import TablesPage from './pages/TablesPage.vue'
import DataPage from './pages/DataPage.vue'

import store from './store'

import '@/main.js'
import 'style/index.scss'

Vue.use(VueScrollTo)

const routes = [
  {
    path: '*',
    redirect: '/stats'
  },
  {
    path: '/about',
    component: StaticPage,
    props: {
      name: 'about',
      content: import('./content/about.md')
    }
  },
  {
    path: '/stats',
    component: StatsPage
  },
  {
    path: '/advancedstats',
    component: AdvancedStatsPage
  },
  {
    path: '/data',
    component: DataPage
  },
  {
    path: '/tables',
    component: TablesPage
  },
  {
    path: '/links',
    component: StaticPage,
    props: {
      name: 'links',
      content: import('./content/links.md')
    }
  },
  {
    path: '/FAQ',
    component: StaticPage,
    props: {
      name: 'FAQ',
      content: import('./content/FAQ.md')
    }
  },
  {
    path: '/team',
    component: StaticPage,
    props: {
      name: 'team',
      content: import('./content/team.md')
    }
  },
  {
    path: '/sources',
    component: StaticPage,
    props: {
      name: 'sources',
      content: import('./content/sources.md')
    }
  },
  {
    path: '/models',
    component: StaticPage,
    props: {
      name: 'sources',
      content: import('./content/models.md')
    }
  },
  {
    path: '/datasources',
    component: StaticPage,
    props: {
      name: 'datasources',
      content: import('./content/datasources.md')
    },
  },
]

const router = new VueRouter({
  routes, // short for `routes: routes`
})

sync(store, router)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
