<template>
  <b-container>
    <b-row>
      <b-col sm="6" v-for="user in users" :key="user.id">
        <b-card class="mb-3" :title="user.name">
          <b-avatar class="mr-3" size="3rem"></b-avatar>
          <b>{{ user.username }}</b>
          <p class="mt-3">Phone: <b>{{ user.phone }}</b></p>
          <p>E-mail: <b>{{ user.email }}</b></p>
          <p>Website: <b>{{ user.website }}</b></p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // middleware: ['users'],
  computed: {
    ...mapGetters({
      users: "GET_USERS"
    })
  },
  async fetch({ store }) {
    await store.dispatch("fetchUsers");
  }
};
</script>

<style lang="scss" scoped>
b {
  color: var(--gray-dark);
}
</style>