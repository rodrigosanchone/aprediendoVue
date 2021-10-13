<template>
  <div class="general">
    <div class="center">
        <section id="content">

            <h2 class="subheader">Peliculas</h2>
            
            <br>
            <p>{{web|mayusculas| concatonar('Este es el mejor año')}}</p>
            
            <div v-if="favorita">
              <h3>Pelicula Favorita: {{favorita.title}}</h3>
            </div>
        
            <!--Listados Articulos-->
              <div class="article"></div>
            
                    <div  v-for="pelicula in peliculasMayusculas" v-bind:key="pelicula.title">
                      <Pelicula 
                      :pelicula="pelicula"
                      v-on:favorita="haLlegadoLaFavorita" 
                      ></Pelicula>
                    </div>
                   
             
                <!--Añadir articulos via js-->
            
        </section>
        <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Pelicula from  './Pelicula.vue';
export default {
   name:'Peliculas',
   components:{
     Pelicula,
     Sidebar
   },
   methods:{
      haLlegadoLaFavorita(favorita){
        this.favorita = favorita
          console.log(favorita)
      }
   },
   computed:{
    
      peliculasMayusculas(){
        var pelis= this.peliculas;
        for(var i=0;i<this.peliculas.lenght;i++){
          pelis[i].title= pelis[i].title.toUpperCase;
        }

        return pelis;
      }
   },
   filters:{
     mayusculas(value){
        return value.toUpperCase();
     },
     concatonar(value,mensaje ){
        var date = new Date();
        return value + '   ' +date.getFullYear()+ ' ' +mensaje;
      }
   },
   data(){
      return{
          favorita: null,
          peliculas:[
              {
                  title:'Batman',
                  year: 1989,
                  image:'https://noticiast.com/wp-content/uploads/2021/05/Batman-1989-Fan-Game-recrea-a-la-perfeccion-el-clasico.jpeg'
              },
               {
                  title:'Star Wars',
                  year: 1977,
                  image:'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2021/05/star-wars-logo.jpg?fit=1280%2C720&quality=80&ssl=1'
              },
              {
                  title:'Howar the duck',
                  year: 1986,
                  image:'https://i2.wp.com/gamerfocus.co/wp-content/uploads/2014/11/Marvel-Howard-the-duck-e1416595856798.jpg?ssl=1'
              },
               {
                  title:'Gran torino',
                  year: 2015,
                  image:'https://www.filmarena-eng.com/obrazky/film_4831_1.jpg'
              }
          ],
          web: "RodrigoSancho.com"
      }
   }
}
</script>