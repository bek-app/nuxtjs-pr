<template>
  <b-container class="container">
    <b-row>
      <b-col>
        <b-jumbotron
          class="jumbotron"
          bg-variant="dark"
          text-variant="white"
          border-variant="dark"
        >
          <template #header>NuxtJS</template>

          <template #lead> Бұл жоба Vue.js (nuxtJs) жасалынған! </template>

          <hr class="my-4" />

          <p>
            Play Station орталықтарында жұмыс істеу процесстерін <br />
            жеңілдету үшін арналған жоба!
          </p>
          <h3>Қолдалынған технологиялар</h3>
          <ul>
            <li>Vue</li>
            <li>Vuex</li>
            <li>Bootstrap-vue</li>
          </ul>
        </b-jumbotron></b-col
      >
    </b-row>
    <b-row>
      <b-col> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
}
</script>
<style scoped>
.container {
  padding: 0;
}
.jumbotron {
  background: url('~/assets/img/jumbotron.jpg') no-repeat center center / cover;
}
</style>
