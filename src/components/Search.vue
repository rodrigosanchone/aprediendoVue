<template>
  <div class="general">
  
       <div class="center">
        <section id="content">
           
            <!--Listados de Articulos-->
            <div id="articles" v-if="articles">
              
                   
                    <h1 class="subheader">Artículos encontrados</h1>

                    <div  id="articles">
                        <Articles :articles="articles"></Articles>
                    </div>
                   
               

            </div>
            <div v-else>
                  <h1 class="subheader">Sin resultados</h1>
               <h3>No hay articulos encontrados</h3>
            </div>

     
   
        </section>
           <Sidebar></Sidebar>
         </div>
    </div>
</template>

<script>
import axios from 'axios'
import Sidebar from './Sidebar.vue'
//import Slider from './Slider.vue'
import {Global} from '../Global'
import Articles  from './Articles.vue'

export default {
 
    name:'Search',
     components: {
       Sidebar,
     //  Slider,
       Articles       
  },
  mounted(){
    //alert(Global.url)
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);

  },
  data(){
    return{
      articles:null,
      url: Global.url,
      searchString:null
    }
  },
  methods:{
    getArticlesBySearch(searchString){
      axios.get(this.url+"search/"+searchString)
        .then(res=>{
               
               if(res.data.status){
                this.articles = res.data.articles;
                //console.log(res)
              } 
            //   console.log(res.data.articles);
            
        })
    }
  }
}


</script>
