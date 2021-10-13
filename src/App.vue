<template>
  <div id="app">
        <Header/>
   
     
         <router-view></router-view>
         
          <div class="clearfix"></div>

      
     
     <FooterComponent/>
     
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MiComponente from './components/Micomponente.vue' 
import Header from './components/Header.vue'


import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
  
   // MiComponente,
    Header,
   
    FooterComponent,
//  HelloWorld,
 
  }
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import './assets/css/styles.css'
</style>
