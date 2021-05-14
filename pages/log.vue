<template>
  <b-container class="mt-3">
    <b-table
      id="table-transition-example"
      class="mt-5 table"
      :items="items"
      :fields="fields"
      striped
      small
    >
      <template #cell(user)="data">
        <b-badge variant="info">
          {{ getUserNameById(data.item.userId) }}
        </b-badge>
      </template>
      <template #cell(start_time)="data">
        {{ data.item.start_time | formatDate1 }}
      </template>
      <template #cell(end_time)="data">
        {{ data.item.end_time | formatDate1 }}
      </template>
      <template #cell(sum)="data">
        <b-badge variant="success">{{ data.item.sum }} ₸</b-badge></template
      >
    </b-table>
  </b-container>
</template>

<script>
export default {
  filters: {
    formatDate1: (d) =>
      d ? d.toLocaleTimeString('ru-RU').replace(',', '').slice(0, -3) : ' ',
  },
  date: new Date(),
  data() {
    return {
      fields: [
        {
          key: 'pc',
          label: 'PC',
        },
        {
          key: 'user',
          label: 'Аты',
        },

        {
          key: 'start_time',
          label: 'Басталуы',
        },
        {
          key: 'end_time',
          label: 'Аяқталуы',
        },

        { key: 'sum', label: 'Cумма' },
      ],
    }
  },
  computed: {
    items() {
      return this.$store.state.log.items
    },
    users() {
      return this.$store.state.users.users
    },
  },
  methods: {
    getUserNameById(userID) {
      if (!userID) {
        return ''
      }
      return this.users.find((user) => user.id === userID).name
    },
  },
}
</script>
<style scoped>
.table {
  border: 1px solid rgb(219, 214, 214);
}
</style>
