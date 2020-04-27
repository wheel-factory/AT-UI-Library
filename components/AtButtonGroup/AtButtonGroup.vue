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
.at-button-group {
  $spacing: 10px;
  $spacing-x: $spacing;
  $spacing-y: $spacing;

  &__inner{
    margin: 0 (-$spacing-x) (-$spacing-y) 0;
  }

  .at-button{
    margin: 0 $spacing-x $spacing-y 0;
  }
}
</style>
