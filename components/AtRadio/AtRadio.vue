<template>
  <label
    class="at-radio"
    :class="{
      'at-radio--checked': checked,
      'at-radio--disabled': disabled,
    }"
  >
    <span class="at-radio__symbol" />
    <input
      class="at-radio__original"
      type="radio"
      :checked="checked"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
    >
    <span
      v-if="label !== undefined"
      class="at-radio__label"
    >
      {{ label }}
    </span>
  </label>
</template>

<script>
import uid from 'uid';

export default {
  name: 'AtRadio',
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
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: [String, Number],
      default: undefined,
    },
  },
  methods: {
    onFocus() {
      this.$emit('focus');
    },
    onBlur() {
      this.$emit('blur');
    },
    onChange(event) {
      this.$emit('change', event.target.checked);
    },
  },
};
</script>

<style lang="scss">
@import './AtRadio.scss';
</style>
