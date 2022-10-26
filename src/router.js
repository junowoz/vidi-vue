import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Landingpage from './views/1landingpage'
import Nftsrastreados from './views/2nftsrastreados'
import Seguro from './views/3seguro.vue'
import Todos from './views/4dashboardtodos.vue'
import Perfil from './views/5dashboardperfil.vue'
import Plagiados from './views/6dashboardplagiados.vue'
import Processos from './views/7dashboardprocessos.vue'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Landingpage',
      path: '/',
      component: Landingpage,
    },
    {
      name: 'Nftsrastreados',
      path: '/2nftsrastreados',
      component: Nftsrastreados,
    },
    {
      name: 'Seguro',
      path: '/3seguro',
      component: Seguro,
    },
    {
      name: 'Todos',
      path: '/4dashboardtodos',
      component: Todos,
    },
    {
      name: 'Perfil',
      path: '/5dashboardperfil',
      component: Perfil,
    },
    {
      name: 'Plagiados',
      path: '/6dashboardplagiados',
      component: Plagiados,
    },
    {
      name: 'Processos',
      path: '/7dashboardprocessos',
      component: Processos,
    },
  ],
})
