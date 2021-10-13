<template>
   <section id="content">
         <h2 class="subheader">ultimos Articulos</h2>
             <micomponente></micomponente>
            
        </section>
</template>

<script>
import Micomponente from './Micomponente.vue'
 
 

export default {
 
  name: 'HelloWorld',
  components:{
    Micomponente
  
  },
  props: {
    msg: String

  },
  data(){
    return{
      texto: "Hola mundo desde componente"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
