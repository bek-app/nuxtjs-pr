<template>
  <b-container class="mt-3 wrap">
    <b-table
      responsive="sm"
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    >
      <template #cell(btn)="">
        <b-button variant="primary" @click="$bvModal.show('bv-modal-example')"
          >Қосу</b-button
        >
        <b-button variant="danger"> Өшіру</b-button>
      </template>
    </b-table>
    <div>
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title> Using <code>$bvModal</code> Methods </template>
        <div class="d-block text-center">
          <div>
            <b-form-select
              v-model="selected"
              :options="users"
              value-field="id"
              text-field="name"
            >
            </b-form-select>

            <div class="mt-3">
              Selected: <strong>{{ selected }}</strong>
            </div>
          </div>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
          >Close Me</b-button
        >
      </b-modal>
    </div>
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
        {
          key: 'btn',
          label: '',
        },
      ],
      items: [
        {
          name: 'Asan',
          start_time: '15:00',
          pc: 'PC1',
          end_time: '15:30',
          status: 'success',
          _cellVariants: { status: 'success' },
        },
        {
          name: 'Esen',
          start_time: '12:20',
          pc: 'PC2',
          end_time: '13:10',
          status: 'busy',
          _cellVariants: { status: 'danger' },
        },
        {
          name: 'Maks',
          start_time: '12:20',
          pc: 'PC3',
          end_time: '13:10',
          status: 'success',
          _cellVariants: { status: 'success' },
        },
        {
          name: 'Isa',
          start_time: '12:20',
          pc: 'PC4',
          end_time: '13:10',
          status: 'busy',
          _cellVariants: { status: 'danger' },
        },
      ],
      users: [
        { id: 1, name: 'Maksat' },
        { id: 2, name: 'Sultan' },
        { id: 5, name: 'Esimkhan' },
        { id: 17, name: 'Jambyl' },
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
