<template>
  <b-container class="mt-3 wrap">
    <b-table
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    ></b-table>
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
          sortable: true,
        },
        {
          key: 'name',
          label: 'Аты-жөні',
          sortable: true,
        },
        {
          key: 'start_time',
          label: 'Басталуы',
          sortable: true,
        },
        {
          key: 'end_time',
          label: 'Аяқталуы',
          sortable: true,
        },
        {
          key: 'status',
          label: 'Статусы',
          sortable: true,
        },
      ],
      items: [
        {
          name: 'Asan',
          start_time: '15:00',
          pc: 'PC1',
          end_time: '15:30',
          status: 'success',
        },
        {
          name: 'Esen',
          start_time: '12:20',
          pc: 'PC2',
          end_time: '13:10',
          status: 'busy',
        },
        {
          name: 'Maks',
          start_time: '12:20',
          pc: 'PC3',
          end_time: '13:10',
          status: '',
        },
        {
          name: 'Isa',
          start_time: '12:20',
          pc: 'PC4',
          end_time: '13:10',
          status: 'busy',
        },
      ],
    }
  },
  methods: {
    rowClass(item, type) {
      if (!item || type !== 'row') return
      if (item.status === 'awesome') return 'table-busy'
    },
  },
}
</script>
<style scoped></style>
