<template>
  <b-container class="mt-3"><Navbar /> </b-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: mapState(['users']),
  methods: {
    ...mapGetters(),
    ...mapActions(['getUsers']),
    ...mapMutations({}),
  },
}
</script>
