<template>
  <section id="content">
    <h1 class="subheader">Este es mi componente</h1>
    <h2>{{subtitulo}}</h2>
    <h3>Reactividad </h3>
    <input type="text" v-model="nombre">
     <p>Mo nombre es:  </p>  <strong>{{nombre}}</strong>

     <h2>Directivas adicionales</h2>
       <input type="number" v-model="edad">
       <p>Mi edad es:  </p>  <strong>{{edad}}</strong>

       <p style="color:green;font-weigth: bold" v-if="edad && edad >= 18 && edad<65">Eres mayor de edad</p>

         <p style="color:black;font-weigth: bold" v-else-if="edad && edad >= 65">Eres de edad avanzada </p>

          <p style="color:red;font-weigth: bold" v-else>Eres menor de edad </p>

        <h2>Directiva reiterativa</h2>  
        <ol>
          <li v-for="pelicula in peliculas" :key="pelicula">
            {{
              pelicula
           }}
          </li>
        </ol>
  </section>
</template>

<script>

export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy un subtitulo",
      nombre: '',
      edad:  18,
      peliculas:['Batman', 'Señor de los anillos','Spiderman' ]
    };
  },
};
</script>
