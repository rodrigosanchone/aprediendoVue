<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Formulario</h1>

        <form action="" class="mind-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="" name="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div v-if="submitted && !$v.user.nombre.required">Este campo es requerido</div>
             <div v-if="submitted && !$v.user.nombre.minLength">Este campo acepta más de un caracter </div>
          </div>
          <div class="form-group">
            <label for="" name="apellido">Apellido</label>
            <input type="text" name="apellido" v-model="user.apellido" />
            <div v-if="submitted &&!$v.user.apellido.required">Este campo es requerido</div>
              <div v-if=" submitted &&!$v.user.apellido.minLength">Este campo acepta más de un caracter </div>
          </div>

          <div class="form-group">
            <label for="" name="">Biografia</label>
            <textarea
              name="bio"
              id=""
              cols="30"
              rows="10"
              v-model="user.bio"
            ></textarea>
            <div v-if="submitted &&!$v.user.bio.required">Este campo es requerido</div>
              <div v-if="submitted &&!$v.user.bio.minLength">Este campo acepta más de 10 caracteres </div>
          </div>

          <div class="form-group radiobuttons">
            <input
              type="radio"
              name="genero"
              checked
              value="hombre"
              v-model="user.genero"
            />Hombre
            <input
              type="radio"
              name="genero"
              value="mujer"
              v-model="user.genero"
            />Mujer
            <input
              type="radio"
              name="genero"
              value="otro"
              v-model="user.genero"
            />Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>

        <div class="datos" v-if="user.nombre && user.apellido">
          <h3>{{ user.nombre + " " + user.apellido }}</h3>
          <p>{{ user.bio }}</p>
          <p>{{ user.genero }}</p>
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
  </div>
</template>



<script>
import { required, minLength } from "vuelidate/lib/validators";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Formulario",
  components: {
    Sidebar,
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2),
      },
      apellido: {
        required,
        minLength: minLength(2),
      },
      bio: {
        required,
        minLength: minLength(10),
      },
    },
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellido: "",
        bio: "",
        genero: "",
      },
    };
  },
  methods: {
    mostrarUsuario() {
      console.log(this.user);
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert("Validación Correcta");
    },
  },
};
</script>