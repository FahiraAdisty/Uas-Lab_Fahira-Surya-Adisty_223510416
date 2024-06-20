<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Project
        </q-toolbar-title>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" overlay>
      <q-list>
        <q-item clickable v-ripple @click="navigateTo('/')">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/task1')" :active="isActive('/task1')">
          <q-item-section>
            <q-item-label>Task 1</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/task2')" :active="isActive('/task2')">
          <q-item-section>
            <q-item-label>Task 2</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/task3')" :active="isActive('/task3')">
          <q-item-section>
            <q-item-label>Task 3</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/task4')" :active="isActive('/task4')">
          <q-item-section>
            <q-item-label>Task 4</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/task5')" :active="isActive('/task5')">
          <q-item-section>
            <q-item-label>Task 5</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/task6')" :active="isActive('/task6')">
          <q-item-section>
            <q-item-label>Task 6</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style>
.bg-light-blue {
  background-color: #000000;
}

.text-white {
  color: #FFFFFF;
}

.q-item.q-item--clickable.q-item--active {
  background-color: #000000; /* Slightly darker blue for active items */
}
</style>
