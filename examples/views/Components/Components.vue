<template>
  <main
    id="components"
    class="components"
  >
    <TheSideNav />
    <router-view />
  </main>
</template>

<script>
import TheSideNav from '../../components/TheSideNav.vue';

export default {
  name: 'Components',
  components: {
    TheSideNav,
  },
};
</script>

<style lang="scss">

</style>
