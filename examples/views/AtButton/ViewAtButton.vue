<template>
  <div class="view view-at-button">
    <div class="view__wrap">
      <AtButtonIntro />
      <h4>Examples</h4>
      <AtButtonType />
      <AtButtonShape />
      <AtButtonSize />
      <AtButtonState />
    </div>
  </div>
</template>

<script>
import AtButtonIntro from './sections/0.AtButtonIntro.vue';
import AtButtonType from './sections/1.AtButtonType.vue';
import AtButtonShape from './sections/2.AtButtonShape.vue';
import AtButtonSize from './sections/3.AtButtonSize.vue';
import AtButtonState from './sections/4.AtButtonState.vue';

export default {
  name: 'ViewAtButton',
  components: {
    AtButtonIntro,
    AtButtonType,
    AtButtonShape,
    AtButtonSize,
    AtButtonState,
  },
};
</script>

<style lang="scss">

</style>
