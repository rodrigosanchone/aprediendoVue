<template>
<div class="general">
    <Slider texto="Página"/>
       <div class="center">
  <section id="content">
    <h2 class="subheader">Página de Prueba</h2>
    <!--Listados de Articulos-->
    <h3>{{ id_desde_url }}</h3>
    <button @click="redirigirAlBlog()">Volver al blog</button>
  </section>
     <Sidebar/>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";
export default {
  name: "Pagina",
   components: {
       Sidebar,
       Slider
         
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null,
    };
  },
  methods: {
    redirigirAlBlog() {
      this.$router.push("/blog");
    },
  },
};
</script>