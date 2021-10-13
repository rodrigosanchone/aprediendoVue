<template src="./CreateArticle.html">
 
</template>

<script>
import Sidebar from "./Sidebar.vue";
import { Global } from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import Article from "./models/Article";
import swal from  'sweetalert';
export default {
  name: "EditArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      file: " ",
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
      isEdit: true
    };
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  mounted() {
    //console.log(this.article);
    var articleId = this.$route.params.id; 
    this.getArticle(articleId);
  },
  methods: {
        getArticle(articleId){
          axios.get(this.url+'article/'+articleId).then(res=>  {
              if(res.data.status){
                this.article = res.data.article;
              }
          })

      }, 
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    save() {
  
      this.submitted = true;
          var articleId = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "/article/"+articleId, this.article)
          .then((response) => {
            // console.log(response);
            //Subida de archivo

            if (response.data.status) {
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();

                formData.append("file0", this.file, this.file.name);
                var articleId = response.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then((response) => {
                    if (response.data.article) {
                         swal('Articulo Editado',
                           'El articulo se ha editado correctamente',
                           'success');  
                         
                      this.article = response.data.article;
                      this.$router.push("/articulo/"+articleId);
                    } else{
                        swal('Algo salio mal',
                           'El articulo  no se ha editado correctamente',
                           'error')
                           
                    }
                    
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                  
              }
             
            }
            
          })
          .catch((error) => {
            console.log(error);
          });
          
      }
    },
  },
};
</script>