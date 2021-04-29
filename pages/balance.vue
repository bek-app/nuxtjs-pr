<template>
  <b-container class="mt-3">
    <Navbar />
    <b-table
      class="mt-5 table"
      responsive="sm"
      striped
      small
      :items="users"
      :fields="fields"
    >
      <template #cell(balance)="data">
        <b-badge variant="success">{{ data.item.balance }} ₸</b-badge></template
      >
      <template #cell(name)="data">
        <b-badge variant="warning">{{ data.item.name }} </b-badge></template
      >
    </b-table>
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
          key: 'name',
          label: 'Аты-жөні',
        },
        {
          key: 'balance',
          label: 'Баланс',
        },
      ],
    }
  },
  computed: {
    users() {
      return this.$store.state.users.users
    },
  },
}
</script>
<style scoped>
.table {
  border: 1px solid rgb(219, 214, 214);
}
</style>
