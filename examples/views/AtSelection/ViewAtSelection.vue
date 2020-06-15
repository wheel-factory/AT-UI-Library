<template>
  <div class="view view--at-table">
    <div class="view__wrap">
      <AtSelectionIntro />
      <h4>Examples</h4>
      <AtRadioBase />
      <AtRadioGroupBase />
      <AtCheckboxBase />
      <AtCheckboxGroupBase />
    </div>
  </div>
</template>

<script>
import AtSelectionIntro from './sections/0.AtSelectionIntro.vue';
import AtRadioBase from './sections/1.AtRadioBase.vue';
import AtRadioGroupBase from './sections/2.AtRadioGroupBase.vue';
import AtCheckboxBase from './sections/3.AtCheckboxBase.vue';
import AtCheckboxGroupBase from './sections/4.AtCheckboxGroupBase.vue';

export default {
  name: 'VieweAtSelection',
  components: {
    AtSelectionIntro,
    AtRadioBase,
    AtRadioGroupBase,
    AtCheckboxBase,
    AtCheckboxGroupBase,
  },
};
</script>

<style lang="scss">

</style>
