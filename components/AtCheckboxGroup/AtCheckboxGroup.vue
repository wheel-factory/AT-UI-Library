<template>
  <div class="at-checkbox-group">
    <div class="at-checkbox-group__inner">
      <at-checkbox
        v-for="(option, index) in options"
        :key="index"
        :checked="checked.includes(option.value)"
        :disabled="disabled || option.disabled"
        :label="option.label"
        @change="(checked) => { onChange(option.value, checked); }"
      />
    </div>
  </div>
</template>

<script>
import uid from 'uid';

import AtCheckbox from '../AtCheckbox/AtCheckbox.vue';

export default {
  name: 'AtCheckboxGroup',
  components: {
    AtCheckbox,
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
      type: Array,
      default: () => ([]),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(optionValue, checked) {
      const newChecked = [...this.checked];
      if (checked) {
        newChecked.push(optionValue);
      } else {
        newChecked.splice(newChecked.indexOf(optionValue), 1);
      }
      this.$emit('change', newChecked);
    },
  },
};
</script>

<style lang="scss">
@import './AtCheckboxGroup.scss';
</style>
