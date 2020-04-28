<template>
  <div class="view view--at-table">
    <AtTableIntro />
    <h4>Examples</h4>
    <AtTableBase />
  </div>
</template>

<script>
import AtTableIntro from './sections/0.AtTableIntro.vue';
import AtTableBase from './sections/1.AtTableBase.vue';

export default {
  name: 'ViewAtTable',
  components: {
    AtTableIntro,
    AtTableBase,
  },
};
</script>

<style lang="scss">

</style>
