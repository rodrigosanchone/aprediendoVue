<template>
  <div>
    <div v-if="articles && articles.length >= 1">
      <article
        class="article-item"
        v-for="article in articles"
        :key="article.id"
      >
        <div class="image-wrap">
          <img
            :src="url + 'get-image/' + article.image"
            :alt="article.title"
            v-if="article.image"
          />
          <img
            src="https://i.blogs.es/4f3b76/aprender-programacion-gratis/450_1000.jpg"
            alt="article.title"
            v-if="!article.image"
          />
        </div>
         <router-link :to="{name:'article',params:{id:article._id}}">
            <h2>{{ article.title }}</h2>
         </router-link>
       
        <span class="date">
          {{ article.date | moment('from','now') }}
        </span>

       

        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles && articles.length <= 1">
      No hay Articulos
    </div>
    <div v-else>
       Cargando
    </div>
  </div>
</template>

<script>
import { Global } from "../Global";
export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>
