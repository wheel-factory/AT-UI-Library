<template>
  <button
    class="at-button"
    :class="{
      [type]: true,
      [shape]: shape !== 'rectangle',
      [size]: size !== 'normal',
      [state]: state !== 'normal',
    }"
    :type="type === 'submit' || type === 'reset' ? type : 'button'"
    :disabled="disabled || state=== 'disabled' ? true : false"
  >
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
    type: {
      type: String,
      default: 'minor',
      validator: (type) => ['major', 'minor', 'text', 'submit', 'button', 'reset'].includes(type),
    },
    shape: {
      type: String,
      default: 'rectangle',
      validator: (shape) => ['rectangle', 'rounded', 'capsule'].includes(shape),
    },
    size: {
      type: String,
      default: 'normal',
      validator: (size) => ['extra', 'large', 'normal', 'mini', 'micro', 'atom'].includes(size),
    },
    state: {
      type: String,
      default: 'normal',
      validator: (state) => ['normal', 'hover', 'active', 'running', 'disabled'].includes(state),
    },
    active: {
      type: Boolean,
      default: false,
    },
    running: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    //
  },
};
</script>

<style lang="scss">
@import './AtButton.scss';
</style>
