<template>
  <b-container class="mt-3">
    <Navbar />
    <b-table class="mt-5" :items="getUsers" :fields="fields"> </b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'pc',
          label: 'PC',
        },

        {
          key: 'start_time',
          label: 'Басталуы',
        },
        {
          key: 'end_time',
          label: 'Аяқталуы',
        },
        {
          key: 'name',
          label: 'Аты-жөні',
        },
        { key: 'sum', label: 'Толық сумма' },
      ],
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    },
  },
}
</script>
