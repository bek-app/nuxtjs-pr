<template>
  <b-container class="mt-3">
    <Navbar />
    <b-table class="mt-5" responsive="sm" small :items="users" :fields="fields">
      <template #cell(balance)="data">
        <b-badge variant="success">{{ data.item.balance }} ₸</b-badge></template
      >
    </b-table>
    <template #cell(name)="data">
      <b-badge variant="success">{{ data.item.name }} </b-badge></template
    >
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
