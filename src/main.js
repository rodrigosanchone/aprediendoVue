import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Blog from './components/Blog.vue'
import  Formulario from './components/Formulario.vue'
import Pagina from './components/Pagina.vue'
import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/Micomponente.vue'
import Peliculas from './components/Peliculas.vue'
import  ultimoArticulo from './components/ultimoArticulo.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import Search from './components/Search.vue'
import Redirect from './components/Redirect.vue'
import Article from './components/Article.vue'
import CrearArticulo from './components/CrearArticulo.vue'
import EditArticle from './components/EditArticle.vue'
import Vuelidate from 'vuelidate';


Vue.use(VueRouter);
Vue.use(Vuelidate);
const moment = require('moment');
require('moment/locale/es')
Vue.use(require('vue-moment'),{
  moment
});

const routes =  [
  {path:'/home',component: ultimoArticulo},
  {path:'/mi-componente',component: MiComponente},
  {path:'/hola-mundo',component: HelloWorld},
  {path:'/blog',component: Blog},
  {path:'/articulo',component: ultimoArticulo},
  {path:'/crearArticulo',component: CrearArticulo},
  {path:'/editar/:id',component: EditArticle},
  {path:'/formulario',component: Formulario},
  {path:'/pagina/:id?',component: Pagina},
  {path:'/hola-mundo',component: HelloWorld},
  {path:'/peliculas',component: Peliculas},
  {path:'/',component: ultimoArticulo},
  {path:'/redirect/:searchString',component: Redirect},
  {path:'/buscador/:searchString',component: Search},
  {path:'/articulo/:id', name:'article',component: Article},
  {path: '*',component:ErrorComponent}
  
];

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode:'history',

})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
