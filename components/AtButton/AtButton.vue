<template>
  <button class="at-button">
    <slot />
  </button>
</template>

<script>
import uid from 'uid';

export default {
  name: 'AtButton',
  props: {
    atId: {
      type: String,
      default: `at-${uid(6)}`,
    },
    tag: {
      type: String,
      default: 'button',
    },
    theme: {
      type: String,
      default: '',
      validator: (theme) => ['', 'capsule'].includes(theme),
    },
    type: {
      type: String,
      default: 'minor',
      validator: (theme) => ['major', 'minor'].includes(theme),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">

</style>
