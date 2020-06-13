<template>
  <label
    class="at-checkbox"
    :class="{
      'at-checkbox--checked': checked,
      'at-checkbox--indeterminate': indeterminate,
      'at-checkbox--disabled': disabled,
    }"
  >
    <span class="at-checkbox__symbol">
      <input
        class="at-checkbox__original"
        type="checkbox"
        :checked="checked"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
      >
    </span>
    <span
      v-if="label !== undefined"
      class="at-checkbox__label"
    >
      {{ label }}
    </span>
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
@import './AtCheckbox.scss';
</style>
