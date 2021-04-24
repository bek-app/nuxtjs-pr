<template>
  <b-container class="mt-3 wrap">
    <Navbar />
    <b-table
      class="mt-5"
      responsive="md"
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    >
      <template #cell(name)="data">
        {{ data.item.user }}
      </template>
      <template #cell(start_time)="data">
        {{ data.item.start_time }}
      </template>
      <template #cell(end_time)="data">
        {{ data.item.end_time }}
      </template>

      <template #cell(summ)="data" class="text-center">
        {{ data.item.summ }} ₸
      </template>
    </b-table>
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
      date: new Date(),
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
        { key: 'summ', label: 'Толық сумма' },
      ],
      items: [
        {
          user: 'Maksat',
          start_time: '11:30',
          pc: 'PC1',
          end_time: '15:00',
          summ: 7000,
        },
        {
          user: 'Asan',
          start_time: '21:30',
          pc: 'PC2',
          end_time: '23:00',
          summ: 800,
        },
        {
          user: 'Erjan',
          start_time: '22:30',
          pc: 'PC3',
          end_time: '23:00',
          summ: 500,
        },
        {
          user: 'Sultan',
          start_time: '20:30',
          pc: 'PC4',
          end_time: '22:00',
          summ: 1200,
        },
      ],
    }
  },
  methods: {},
}
</script>
<style scoped></style>
