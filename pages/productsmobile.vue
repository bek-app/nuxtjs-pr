<template>
  <b-container class="mt-3">
    <div class="product__input">
      <b-form-input
        class="input"
        v-model.trim="text"
        placeholder="Тауар аты"
      ></b-form-input>
      <b-form-input
        class="input"
        v-model.number="number"
        type="number"
      ></b-form-input>
      <b-button variant="success" class="btn" @click="addProduct"
        >Қосу</b-button
      >
    </div>

    <div class="cards" v-for="product in products" :key="product.id">
      <b-card class="mt-3 mb-2 card" title="" tag="article">
        <div class="product__head">
          <h3>{{ product.name }}</h3>
          <b-badge variant="info" class="product__sum"
            >{{ product.sum }}₸</b-badge
          >
        </div>
        <b-row class="btns">
          <b-col>
            <b-button
              class="btn mr-2"
              size="sm"
              variant="success"
              block
              @click="openModal(product.id)"
              >Өзгерту</b-button
            ></b-col
          >
          <b-col>
            <b-button
              class="btn"
              size="sm"
              variant="danger"
              block
              @click="removeSum()"
            >
              Өшіру
            </b-button>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <b-modal id="my-modal" size="sm" hide-footer>
      <template #modal-title>
        <span>Таңдалған тауар</span>
        <b-badge variant="success">
          {{ getProductById(selectedId) }}</b-badge
        ></template
      >
      <b-form-input
        class="input mb-2"
        v-model.number="numberChange"
        type="number"
      ></b-form-input>
      <b-button block variant="primary" @click="changeSum()">
        бағасын өзгерту!</b-button
      ></b-modal
    >
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      number: 0,
      numberChange: 0,
      selectedId: null,
    }
  },

  computed: {
    products() {
      return this.$store.state.products.products
    },
  },
  methods: {
    addProduct() {
      if (!this.text || !this.number) return
      let maxId = 0
      this.products.forEach((product) => {
        if (product.id > maxId) {
          maxId = product.id
        }
      })
      const newData = {
        id: maxId + 1,
        name: this.text,
        sum: this.number,
      }
      this.$store.commit('products/addProduct', newData)
    },
    removeSum(id) {
      this.boxTwo = ''
      this.$bvModal
        .msgBoxConfirm('Тауарды өшіре берейін бе?', {
          title: 'Тауарды өшіру',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Ия',
          cancelTitle: 'Жоқ',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.$store.commit('products/removeSum', id)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal(id) {
      this.selectedId = id
      this.numberChange = this.products.find(
        (product) => product.id === this.selectedId
      ).sum
      this.$bvModal.show('my-modal')
    },
    getProductById(selectedId) {
      if (!selectedId) {
        return ''
      }
      return this.products.find((product) => product.id === selectedId).name
    },
    changeSum() {
      if (!this.numberChange) return

      const newData = {
        id: this.selectedId,
        sum: this.numberChange,
      }

      this.$store.commit('products/changeSum', newData)

      this.$bvModal.hide('my-modal')
    },
  },
}
</script>
<style scoped>
.product__input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.input {
  margin-right: 10px;
}
.card {
  margin: 0 auto;
}
.product__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.product__sum {
  font-size: 20px;
}
@media (max-width: 375px) {
  .product__input {
    display: flex;
    flex-direction: column;
  }
  .input {
    margin-bottom: 10px;
    margin-right: 0;
  }
  .btn {
    display: block;
    width: 100%;
  }
}
</style>
