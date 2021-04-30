<template>
  <b-container>
    <Navbar />
    <div class="cards" v-for="item in items" :key="item.id">
      <b-card
        class="mt-3 mb-2 card"
        title=""
        tag="article"
        style="max-width: 30rem"
      >
        <div class="pc">
          <b-badge v-if="item.busy" variant="danger">
            {{ item.pc }}
          </b-badge>
          <b-badge v-else variant="success"> {{ item.pc }} </b-badge>
          <div class="userid">
            <span>{{ getUserNameById(item.userId) }}</span>
          </div>
        </div>
        <div class="times mt-3">
          <b-row align-h="between">
            <b-col> <span>Басталуы:</span> </b-col>
            <b-col class="time">
              <b-badge v-if="item.start_time" variant="success" class="mb-2">
                {{ item.start_time | formatDate1 }}
              </b-badge>
            </b-col>
          </b-row>
          <b-row align-h="between">
            <b-col> <span>Аяқталуы:</span></b-col>
            <b-col class="time">
              <b-badge v-if="item.end_time" variant="warning">
                {{ item.end_time | formatDate1 }}
              </b-badge></b-col
            >
          </b-row>
        </div>
        <div class="sum mt-3">
          <b-badge variant="info"> Сумма </b-badge>
          <b-badge variant="warning">{{ item.sum }} ₸</b-badge>
        </div>
        <div class="btns mt-3">
          <b-button
            v-if="item.busy"
            v-b-modal="'my-modal'"
            variant="danger"
            block
            size="sm"
            @click="hideModalTime(item)"
          >
            Жабу</b-button
          >
          <b-button
            v-else
            block
            size="sm"
            variant="primary"
            @click="showModalTime(item)"
            >Ашу</b-button
          >
        </div>
      </b-card>
    </div>

    <div class="modals">
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
      selectedPS: null,
      selectedUserId: null,
    }
  },
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
        end_time: this.selectedPS.end_time,
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
        userId: this.selectedPS.userId,
        busy: false,
        end_time: endTime,
        start_time: this.selectedPS.start_time,
        sum: totalSum,
      }

      this.$store.commit('realtime/closeTime', {
        ps: this.selectedPS,

        newData,
      })

      this.$bvModal.hide('my-modal')
    },
    showModalTime(pc) {
      this.selectedPS = pc

      this.$bvModal.show('bv-modal-example')
    },
    hideModalTime(pc) {
      this.selectedPS = pc
      this.$bvModal.show('my-modal')
    },
  },
}
</script>
<style scoped>
.card {
  margin: 0 auto;
}
.pc {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
}
.userid {
  font-size: 25px;
  font-weight: bold;
}
.times {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-size: 18px;
}
.time {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.sum {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
}
</style>
