<template>
  <label
    class="at-checkbox"
    :class="{
      'at-checkbox--checked': checked,
      'at-checkbox--indeterminate': indeterminate,
    }"
  >
    <span class="at-checkbox__symbol" />
    <input
      class="at-checkbox__original"
      type="checkbox"
      :checked="checked"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
    >
  </label>
</template>

<script>
import uid from 'uid';

export default {
  name: 'AtCheckbox',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    atId: {
      type: String,
      default: `at-${uid(6)}`,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  // ------ ------ ------ ------ ------ ------ ------
  updated() {
    console.log('6', 'at-checkbox--updated', performance.now());
  },
  // ------ ------ ------ ------ ------ ------ ------
  methods: {
    onFocus() {
      this.$emit('focus');
    },
    onBlur() {
      this.$emit('blur');
    },
    onChange(event) {
      // ------ ------ ------ ------ ------ ------ ------
      console.log('1', 'at-checkbox--trigger', performance.now());
      // ------ ------ ------ ------ ------ ------ ------
      this.$emit('change', event.target.checked);
    },
  },
};
</script>

<style lang="scss">
@import './Atcheckbox.scss';
</style>
