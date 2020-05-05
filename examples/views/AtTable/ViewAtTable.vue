<template>
  <div class="view view--at-table">
    <AtTableIntro />
    <h4>Examples</h4>
    <AtTableBase />
    <AtTableBorder />
    <AtTableFixedHead />
  </div>
</template>

<script>
import AtTableIntro from './sections/0.AtTableIntro.vue';
import AtTableBase from './sections/1.AtTableBase.vue';
import AtTableBorder from './sections/2.AtTableBorder.vue';
import AtTableFixedHead from './sections/3.AtTableFixedHead.vue';

export default {
  name: 'ViewAtTable',
  components: {
    AtTableIntro,
    AtTableBase,
    AtTableBorder,
    AtTableFixedHead,
  },
};
</script>

<style lang="scss">

</style>
