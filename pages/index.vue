<template>
  <b-container class="mt-5">
    <b-table striped hover :items="items" :fields="fields">
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
    </b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'index',
          label: '№',
        },
        {
          key: 'name',
          label: 'Аты-жөні',
          sortable: true,
        },
        {
          key: 'balance',
          label: 'Балансы',
          sortable: true,
        },
      ],
      items: [
        { id: 1, name: 'Maksat', balance: 50 },
        { id: 2, name: 'Sultan', balance: 30 },
        { id: 5, name: 'Sultan', balance: 15 },
        { id: 17, name: 'Sultan', balance: 20 },
      ],
    }
  },
}
</script>

<style></style>
