import { createRouter, createWebHistory } from 'vue-router'
import Conteudo1 from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'conteudo1',
    component: Conteudo1,
    children:[

    ]
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
