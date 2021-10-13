<template>
  <div class="general">
    <Slider texto="Blog"/>
       <div class="center">
        <section id="content">
           
            <!--Listados de Articulos-->
            <div id="articles" v-if="articles">
              
                   
                    <h1 class="subheader">Blog</h1>

                    <div  id="articles">
                        <Articles :articles="articles"></Articles>
                    </div>
                   
               

            </div>

     
   
        </section>
           <Sidebar></Sidebar>
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
 
    name:'Blog',
     components: {
       Sidebar,
       Slider,
       Articles       
  },
  mounted(){
    //alert(Global.url)
    this.getArticles();
  },
  data(){
    return{
      articles:null,
      url: Global.url
    }
  },
  methods:{
    getArticles(){
      axios.get(this.url+"articles")
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
