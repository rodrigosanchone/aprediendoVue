<template>
  <div class="general">
    <!--  <Slider texto="Articulo" /> -->
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
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

          <h1 class="subheader">{{ article.title }}</h1>

          <span class="date">{{ article.date | moment("from", "now") }}</span>
          <p>
            {{ article.content }}
          </p>

          <div class="clearfix"></div>
          <router-link :to="'/editar/' + article._id" class="btn btn-warnig">
            Editar
          </router-link>
          <a
            @click="deleteArticle(article._id)"
            to="/eliminar"
            class="btn btn-danger"
            >Eliminar</a
          >
        </article>
      </section>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import Sidebar from "./Sidebar.vue";
//import Slider from './Slider.vue'
import { Global } from "../Global";
//import Articles  from './Articles.vue'
export default {
  name: "Article",
  components: {
    //  Slider,
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: null,
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status) {
          this.article = res.data.article;
        }
      });
    },
    deleteArticle(articleId) {
      swal({
        title: "Seguro que desea hacer esto?",
        text: "Una vez borrado el articulo no podra recuperarlo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(this.url + "article/" + articleId).then((response) => {
            console.log(response);
            swal(
              "Articulo borrado",
              "Su Articulo no podra recupersarse",
              "error"
            );
            this.$router.push("/blog");
          });
        
        } else {
          swal("Su archivo esta seguro!");
        }
      });
    },
  },
};
</script>
