<template>
  <NavBar />
<!--   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <Footer/>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  name:'HomeApp',
  components: { NavBar, Footer }
}
</script>