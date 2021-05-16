<template>
  <b-container class="mt-3 wrap">
    <b-table
      class="mt-5 table"
      responsive="sm"
      :items="items"
      :fields="fields"
      small
    >
      <template #cell(pc)="data">
        <b-badge v-if="data.item.busy" variant="danger">
          {{ data.item.pc }}
        </b-badge>
        <b-badge v-else variant="success"> {{ data.item.pc }} </b-badge>
      </template>
      <template #cell(name)="data">
        {{ getUserNameById(data.item.userId) }}
      </template>
      <template #cell(start_time)="data">
        {{ data.item.start_time | formatDate1 }}
      </template>
      <template #cell(end_time)="data">
        {{ data.item.end_time | formatDate1 }}
      </template>

      <template #cell(sum)="data" class="text-center">
        <b-badge variant="warning">{{ data.item.sum }} ₸</b-badge>
      </template>
      <template #cell(btn)="data">
        <b-button
          v-if="data.item.busy"
          v-b-modal="'my-modal'"
          variant="danger"
          size="sm"
          @click="hideModalTime(data.item)"
        >
          Жабу</b-button
        >

        <b-button
          v-else
          size="sm"
          variant="primary"
          @click="showModalTime(data.item)"
          >Ашу</b-button
        >
      </template>
    </b-table>
    <b-modal id="my-modal" size="sm" hide-footer>
      <template #modal-title> Уақытты жаба берейін бе? </template>
      <b-button size="sm" block variant="primary" @click="closeTime()"
        >Ия</b-button
      ></b-modal
    >
    <div>
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title> Уақыт қосу</template>
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
        {
          key: 'btn',
          label: '',
        },
      ],

      selectedPS: null,
      selectedUserId: null,
    }
  },

  // mounted() {
  //   this.$store.dispatch('users/getUsers')
  // },

  computed: {
    items() {
      return this.$store.state.realtime.items
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
    addItem() {
      if (!this.selectedUserId) return

      const newData = {
        userId: this.selectedUserId,
        busy: true,
        end_time: null,
        start_time: new Date(),
        sum: null,
      }

      this.$store.commit('realtime/changePS', {
        ps: this.selectedPS,
        newData,
      })

      this.$bvModal.hide('bv-modal-example')
    },

    closeTime() {
      const endTime = new Date()
      const totalSum = Math.floor(
        ((endTime - this.selectedPS.start_time) / 1000 / 3600) * 800
      )
      const logItem = {
        userId: this.selectedPS.userId,
        start_time: this.selectedPS.start_time,
        pc: this.selectedPS.pc,
        end_time: endTime,
        sum: totalSum,
      }

      this.$store.commit('log/addLog', logItem)

      const newData = {
        userId: null,
        busy: false,
        end_time: endTime,
        start_time: null,
        sum: totalSum,
      }

      this.$store.commit('realtime/closeTime', {
        ps: this.selectedPS,

        newData,
      })

      this.$bvModal.hide('my-modal')
    },
    showModalTime(ps) {
      this.selectedPS = ps

      this.$bvModal.show('bv-modal-example')
    },
    hideModalTime(ps) {
      this.selectedPS = ps
      this.$bvModal.show('my-modal')
    },
  },
}
</script>
<style scoped>
.table {
  border: 1px solid rgb(219, 214, 214);
}
</style>
