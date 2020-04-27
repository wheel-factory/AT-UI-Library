<template>
  <div class="example-container">
    <div class="example-container__title">
      {{ title }}
    </div>
    <div class="example-container__desc">
      <slot name="desc" />
    </div>
    <div class="example-container__examples">
      <slot />
    </div>
    <div class="example-container__code">
      <slot name="code" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExampleContainer',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  created() {

  },
  methods: {
  },
};
</script>

<style lang="sass">

</style>
