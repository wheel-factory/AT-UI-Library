<template>
  <div class="example example-at-button">
    <at-button>test</at-button>
    <AtButtonThemes />
  </div>
</template>

<script>
import AtButtonThemes from './sections/AtButtonThemes.vue';

export default {
  name: 'ExampleAtButton',
  components: {
    AtButtonThemes,
  },
};
</script>

<style lang="scss">

</style>
