<template>
  <b-container class="mt-3">
    <Navbar />
    <b-table
      class="mt-5"
      striped
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    >
      <template #cell(start_time)="data">
        {{ data.item.start_time | formatDate1 }}
      </template>
      <template #cell(end_time)="data">
        {{ data.item.end_time | formatDate1 }}
      </template>
      <template #cell(sum)="data"> {{ data.item.sum }} ₸ </template>
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
          label: 'Аты-жөні',
        },

        {
          key: 'start_time',
          label: 'Басталуы',
        },
        {
          key: 'end_time',
          label: 'Аяқталуы',
        },

        { key: 'sum', label: 'Толық сумма' },
      ],
    }
  },
  computed: {
    items() {
      return this.$store.state.log.items
    },
  },
  methods: {},
}
</script>
