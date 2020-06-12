<template>
  <div class="at-button-group">
    <div class="at-button-group__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtButtonGroup',
};
</script>

<style lang="scss">
@import './AtButtonGroup.scss';
</style>
