<template>
  <div class="view view--at-table">
    <div class="view__wrap">
      <AtSelectionIntro />
      <h4>Examples</h4>
      <AtRadioBase />
      <AtCheckboxBase />
    </div>
  </div>
</template>

<script>
import AtSelectionIntro from './sections/0.AtSelectionIntro.vue';
import AtRadioBase from './sections/1.AtRadioBase.vue';
import AtCheckboxBase from './sections/2.AtCheckboxBase.vue';

export default {
  name: 'VieweAtSelection',
  components: {
    AtSelectionIntro,
    AtRadioBase,
    AtCheckboxBase,
  },
};
</script>

<style lang="scss">

</style>
