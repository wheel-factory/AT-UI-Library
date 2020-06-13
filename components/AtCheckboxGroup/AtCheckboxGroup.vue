<template>
  <div class="at-checkbox-group">
    <div class="at-checkbox-group__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtCheckboxGroup',
};
</script>

<style lang="scss">
@import './AtCheckboxGroup.scss';
</style>
