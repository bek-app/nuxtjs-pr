<template>
  <b-container class="mt-3">
    <Navbar />
    <b-table class="mt-5" :items="users" :fields="fields"> </b-table>
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
