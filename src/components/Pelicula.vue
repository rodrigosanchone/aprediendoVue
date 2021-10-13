<template>
  
         

        
            <!--Listados Articulos-->
        
                <article class="article-item" id="article-template">
                    <div class="image-wrap">
                        <img :src="pelicula.image" :alt="pelicula.title">
                    </div>
                    <h2>{{pelicula.title}}</h2>
                    <span class="date">
                    {{pelicula.year}}
                    </span>
                    <a href="">Leer más</a>
                    <input type="button" value="Marcar como favorita" @click="pasarFavoritaAlpadre(pelicula)">
                    <div class="clearfix"></div>

                </article>
                <!--Añadir articulos via js-->
           
     
</template>

<script>


export default {
 
   name:'Pelicula',
   props: ['pelicula'],
  methods:{
      pasarFavoritaAlpadre(pelicula){
         /*   console.log(pelicula);
           alert("Boton pulsado"); */
           this.$emit('favorita', pelicula);
      }
  }
}
</script>