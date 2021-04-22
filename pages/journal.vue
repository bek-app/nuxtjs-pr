<template>
  <b-container class="mt-3 wrap">
    <Navbar />
    <b-table
      class="mt-5"
      responsive="sm"
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    >
      <template #cell(name)="data">
        {{ data.item.user && data.item.user.name }}
      </template>

      <template #cell(status)="data">
        <h3>
          <b-badge v-if="data.item.busy" variant="danger">бос емес</b-badge>
          <b-badge v-else variant="success">бос</b-badge>
        </h3>
      </template>
      <template #cell(btn)="data">
        <b-button
          v-b-modal="'my-modal'"
          variant="danger"
          v-if="data.item.busy"
          @click="stopTime(data.item)"
          block
        >
          Жабу</b-button
        >

        <b-button block variant="primary" @click="openTime(data.item)" v-else
          >Ашу</b-button
        >
      </template>
    </b-table>
    <b-modal id="my-modal">Hello From My Modal! </b-modal>
    <div>
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title> Журналға енгізу </template>
        <div class="d-block text-center">
          <div>
            <b-form-select
              v-model="selectedUserId"
              :options="users"
              value-field="id"
              text-field="name"
            >
            </b-form-select>

            <div class="mt-3"></div>
          </div>
        </div>
        <b-button variant="success" class="mt-3" @click="addItem(data.item)">
          Қосу</b-button
        >
        <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')"
          >Терезені жабу</b-button
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
        },
        {
          key: 'name',
          label: 'Аты-жөні',
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
        },
        {
          key: 'btn',
          label: '',
        },
      ],
      items: [
        {
          user: null,
          start_time: '15:00',
          pc: 'PC1',
          end_time: '15:30',
          busy: true,
        },
        {
          user: null,
          start_time: '12:20',
          pc: 'PC2',
          end_time: '13:10',
          busy: true,
        },
        {
          user: null,
          start_time: '12:20',
          pc: 'PC3',
          end_time: '13:10',
          busy: true,
        },
        {
          user: null,
          start_time: '12:20',
          pc: 'PC4',
          end_time: '13:10',
          busy: true,
        },
      ],

      users: [
        { id: 1, name: 'Maksat' },
        { id: 2, name: 'Sultan' },
        { id: 5, name: 'Esimkhan' },
        { id: 17, name: 'Jambyl' },
      ],
      selectedPS: null,
      selectedUserId: null,
    }
  },
  methods: {
    addItem(item) {
      if (!this.selectedUserId) return
      const selectedUser = this.users.find(
        (user) => user.id === this.selectedUserId
      )
      this.selectedPS.user = selectedUser
      item.end_time = null
      item.busy = true

      this.$bvModal.hide('bv-modal-example')
    },
    openTime(pc) {
      this.selectedPS = pc

      this.$bvModal.show('bv-modal-example')
    },

    stopTime(item) {
      item.user = null
      item.busy = false
      item.start_time = null

      this.$bvModal.show('my-modal')
    },
  },
}
</script>
<style scoped></style>
