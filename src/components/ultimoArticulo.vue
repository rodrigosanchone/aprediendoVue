<template>
<div class="general">
    <Slider texto="Ultimos Articulos"
     home="true"
    />
       <div class="center">
            <section id="content">

          
  <!--Listados de Articulos-->
            <div id="articles" v-if="articles">
              
                   
                    <h1 class="subheader">Ultimos Articulos</h1>

                    <div  id="articles">
                        <Articles :articles="articles"></Articles>
                    </div>
                   
               

            </div>
         
         <!--    
            <div id="article">
                <article class="article-item" id="article-template">
                    <div class="image-wrap">
                        <img src="https://unsplash.com/photos/iQq_J6F1xRU" alt="perro">
                    </div>
                    <h2>Articulo de prueba</h2>
                    <span class="date">
                    Hace 5 minutos
                </span>
                    <a href="">Leer más</a>
                    <div class="clearfix"></div>
                </article>  
            </div> -->
        </section>
         <Sidebar/>
       </div>
   
</div>
</template>

<script>

import axios from 'axios'
import Sidebar from './Sidebar.vue'
import Slider from './Slider.vue'
import {Global} from '../Global'
import Articles  from './Articles.vue'
export default {
  
   name:'ultimoArticulo',

      components: {
       Sidebar,
       Slider,
       Articles       
  },
  mounted(){
    //alert(Global.url)
    this.getLastArticles();
  },
  data(){
    return{
      articles:null,
      url: Global.url
    }
  },
  methods:{
    getLastArticles(){
      axios.get(this.url+"articles/true")
        .then(res=>{
               
               if(res.data.status){
                this.articles = res.data.articles;
                //console.log(res)
              } 
            //   console.log(res.data.articles);
            
        });
    }
  }
};
</script>
