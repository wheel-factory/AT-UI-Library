<template>
  <div id="main">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'Main',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">

</style>
