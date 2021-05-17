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
      <b-col>
        <div>
          <ul class="list-unstyled">
            <b-media tag="li">
              <template #aside>
                <b-img
                  blank
                  blank-color="#abc"
                  width="64"
                  alt="placeholder"
                ></b-img>
              </template>
              <h5 class="mt-0 mb-1"><a href="/realtime"> RealTime</a></h5>
              <p class="mb-0">
                Бұл бетте жаңадан келген адамдарға уақыт қосуға арналған, мұнда
                адам аты арқылы таңдалып уақыт ашылады, ойын уақыты біткен соң,
                уақыт жабылп журналға жазылады.
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <template #aside>
                <b-img
                  blank
                  blank-color="#cba"
                  width="64"
                  alt="placeholder"
                ></b-img>
              </template>

              <h5 class="mt-0 mb-1"><a href="/log">Log</a></h5>
              <p class="mb-0">
                Журнал. Бұл бетте ойыншының ойнаған уақытан бөлек, қанша сумма
                төлеу керектілігі жазылады. Сумма басталған уақыт пен аяқталған
                уақытты есептеп алынған!
              </p>
            </b-media>

            <b-media tag="li" class="my-4">
              <template #aside>
                <b-img
                  blank
                  blank-color="#bac"
                  width="64"
                  alt="placeholder"
                ></b-img>
              </template>

              <h5 class="mt-0 mb-1"><a href="/balance">Balance</a></h5>
              <p class="mb-0">Баланс. Ойыншының қалған ақшасы.</p>
            </b-media>
            <b-media tag="li" class="my-4">
              <template #aside>
                <b-img
                  blank
                  blank-color="#bdc"
                  width="64"
                  alt="placeholder"
                ></b-img>
              </template>

              <h5 class="mt-0 mb-1"><a href="/products">Products</a></h5>
              <p class="mb-0">
                Бұл бетте тауар қосып, өшіруге жәнеде бағасын өзгертуге болады!
              </p>
            </b-media>
            <b-media tag="li" class="my-4">
              <template #aside>
                <b-img
                  blank
                  blank-color="#bdc"
                  width="64"
                  alt="placeholder"
                ></b-img>
              </template>

              <h5 class="mt-0 mb-1"><a href="/shop">Shop</a></h5>
              <p class="mb-0">
                Дүкен. Бұл бетте PS-ге келген адамадардың, қандай тауар сатып
                алған жайлы мәлімет енгізіге болады. Енгізілген мәлімет журналға
                (log) жазылады.
              </p>
            </b-media>
          </ul>
        </div>
      </b-col>
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
