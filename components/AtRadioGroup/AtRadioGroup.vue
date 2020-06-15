<template>
  <div class="at-radio-group">
    <div class="at-radio-group__inner">
      <at-radio
        v-for="(option, index) in options"
        :key="index"
        :checked="checked === option.value"
        :disabled="disabled || option.disabled"
        :label="option.label"
        @change="(checked) => { onChange(option.value, checked); }"
      />
    </div>
  </div>
</template>

<script>
import uid from 'uid';

import AtRadio from '../AtRadio/AtRadio.vue';

export default {
  name: 'AtRadioGroup',
  components: {
    AtRadio,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    atId: {
      type: String,
      default: `at-${uid(6)}`,
    },
    options: {
      type: Array,
      required: true,
    },
    checked: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(optionValue) {
      this.$emit('change', optionValue);
    },
  },
};
</script>

<style lang="scss">
@import './AtRadioGroup.scss';
</style>
