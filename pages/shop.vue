<template>
  <b-container class="mt-3">
    <Navbar />
    <div class="selected__container">
      <b-form-select
        v-model="selectedUserId"
        class="my-select"
        :options="users"
        value-field="id"
        text-field="name"
      ></b-form-select>
      <b-form-select
        v-model="selectedProductId"
        class="my-select"
        :options="products"
        value-field="id"
        text-field="name"
      >
      </b-form-select>
      <b-button variant="success" @click="addSelected">Енгізу</b-button>
    </div>
    <div class="table">
      <b-table
        id="table-transition-example"
        class="mt-5"
        :items="items"
        :fields="fields"
        striped
        small
      >
        <template #cell(id)="data">
          {{ data.item.userId }}
        </template>
        <template #cell(user)="data">
          {{ getUserNameById(data.item.userId) }}
        </template>
        <template #cell(product_name)="data">
          {{ getProductNameById(data.item.productId) }}
        </template>
        <template #cell(start_time)="data">
          {{ data.item.start_time | formatDate1 }}
        </template>
        <template #cell(sum)="data">
          <b-badge variant="info"> {{ data.item.sum }} ₸ </b-badge>
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
export default {
  filters: {
    formatDate1: (d) =>
      d ? d.toLocaleTimeString('ru-RU').replace(',', '').slice(0, -3) : ' ',
  },
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: 'Id',
        },
        {
          key: 'user',
          label: 'Аты-жөні',
          sortable: true,
        },
        {
          key: 'start_time',
          label: 'Уақыты',
          sortable: true,
        },

        {
          key: 'product_name',
          label: 'Тауар аты',
          sortable: true,
        },

        { key: 'sum', label: 'Толық сумма' },
      ],
      selectedUserId: null,
      selectedProductId: null,
    }
  },

  computed: {
    items() {
      return this.$store.state.shopLog.items
    },

    users() {
      return this.$store.state.users.users
    },
    products() {
      return this.$store.state.products.products
    },
  },
  methods: {
    getUserNameById(userID) {
      if (!userID) {
        return ''
      }
      return this.users.find((user) => user.id === userID).name
    },
    getProductNameById(productID) {
      if (!productID) {
        return ''
      }
      return this.products.find((product) => product.id === productID).name
    },
    getProductSumById(productID) {
      if (!productID) {
        return ''
      }
      return this.products.find((product) => product.id === productID).sum
    },
    addSelected() {
      if (!this.selectedUserId && !this.selectedProductId) return
      const sum = this.products.find(
        (product) => product.id === this.selectedProductId
      ).sum
      const newData = {
        userId: this.selectedUserId,
        start_time: new Date(),
        productId: this.selectedProductId,
        sum,
      }
      this.$store.commit('shopLog/addSelected', newData)
    },
  },
}
</script>
<style scoped>
.selected__container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  padding: 15px;
}

.my-select {
  margin-right: 10px;
}
.table {
  padding: 0 15px;
}
</style>
