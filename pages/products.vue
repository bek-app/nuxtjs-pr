<template>
  <b-container class="mt-3">
    <Navbar />
    <div class="product__input">
      <b-form-input
        class="input"
        v-model="text"
        placeholder="Тауар аты"
      ></b-form-input>
      <b-form-input
        class="input"
        v-model.number="number"
        type="number"
        placeholder="Тауар бағасы"
      ></b-form-input>
      <b-button variant="success" @click="addProduct">Қосу</b-button>
    </div>
    <div class="table">
      <b-table
        id="table-transition-example"
        class="mt-5"
        :items="products"
        :fields="fields"
        striped
        small
        responsive="sm"
      >
        <template #cell(id)="data">
          {{ data.index + 1 }}
        </template>
        <template #cell(product_name)="data">
          {{ data.item.name }}
        </template>

        <template #cell(sum)="data">
          <b-badge variant="info"> {{ data.item.sum }} ₸ </b-badge>
        </template>
        <template #cell(btn)="data">
          <b-button
            size="sm"
            variant="success"
            @click="changeSum(data.item.sum)"
            >Өзгерту</b-button
          >
          <b-button size="sm" variant="danger" @click="removeSum(data.item.id)"
            >Өшіру</b-button
          >
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: 'Id',
        },

        {
          key: 'product_name',
          label: 'Тауар аты',
          sortable: true,
        },

        { key: 'sum', label: 'Толық сумма' },
        { key: 'btn', label: '' },
      ],
      text: '',
      number: 0,
    }
  },

  computed: {
    products() {
      return this.$store.state.products.products
    },
  },
  methods: {
    addProduct() {
      if (!this.text && !this.number) return
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
    changeSum(sum) {
      this.$store.commit('products/changeSum', sum)
    },
  },
}
</script>
<style scoped>
.product__input {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding: 0 15px;
}

.input {
  margin-right: 10px;
}
.table {
  padding: 0 15px;
}
</style>
