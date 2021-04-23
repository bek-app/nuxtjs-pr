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
        {{ data.item.user && data.item.user.name }}
      </template>
      <template #cell(start_time)="data">
        {{ data.item.start_time | formatDate1 }}
      </template>
      <template #cell(end_time)="data">
        {{ data.item.end_time | formatDate1 }}
      </template>
      <template #cell(status)="data">
        <h3>
          <b-badge v-if="data.item.busy" variant="danger">бос емес</b-badge>
          <b-badge v-else variant="success">бос</b-badge>
        </h3>
      </template>
      <template #cell(summ)="data" class="text-center">
        {{ data.item.summ }} ₸
      </template>
      <template #cell(btn)="data">
        <b-button
          v-if="data.item.busy"
          v-b-modal="'my-modal'"
          variant="danger"
          block
          @click="stopTime(data.item)"
        >
          Жабу</b-button
        >

        <b-button v-else block variant="primary" @click="openTime(data.item)"
          >Ашу</b-button
        >
      </template>
    </b-table>
    <b-modal id="my-modal" hide-footer>
      <b-button block variant="primary" @click="closeTime()"
        >Жабу</b-button
      ></b-modal
    >
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
          </div>
        </div>
        <b-button variant="success" class="mt-3" @click="addItem()">
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
        { key: 'summ', label: 'Толық сумма' },
        {
          key: 'btn',
          label: '',
        },
      ],
      items: [
        {
          user: null,
          start_time: null,
          pc: 'PC1',
          end_time: null,
          summ: null,
          busy: false,
        },
        {
          user: null,
          start_time: null,
          pc: 'PC2',
          end_time: null,
          summ: null,
          busy: false,
        },
        {
          user: null,
          start_time: null,
          pc: 'PC3',
          end_time: null,
          summ: null,
          busy: false,
        },
        {
          user: null,
          start_time: null,
          pc: 'PC4',
          end_time: null,
          summ: null,
          busy: false,
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
    addItem() {
      if (!this.selectedUserId) return
      const selectedUser = this.users.find(
        (user) => user.id === this.selectedUserId
      )
      this.selectedPS.user = selectedUser
      this.selectedPS.busy = true
      this.selectedPS.end_time = null
      this.selectedPS.start_time = new Date()
      this.selectedPS.summ = null
      this.$bvModal.hide('bv-modal-example')
    },
    openTime(ps) {
      this.selectedPS = ps

      this.$bvModal.show('bv-modal-example')
    },

    closeTime() {
      this.selectedPS.user = null
      this.selectedPS.busy = false
      this.selectedPS.end_time = new Date()
      const totalSumm = Math.ceil(
        ((this.selectedPS.end_time - this.selectedPS.start_time) /
          1000 /
          3600) *
          800
      )
      this.selectedPS.summ = totalSumm
      this.$bvModal.hide('my-modal')
    },
    stopTime(ps) {
      this.selectedPS = ps
      this.$bvModal.show('my-modal')
    },
  },
}
</script>
<style scoped></style>
