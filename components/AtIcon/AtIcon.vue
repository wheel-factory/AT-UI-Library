<template>
  <div />
</template>

<script>
export default {
  name: 'AtButton',
  props: {
    atId: {
      type: String,
      required: true,
      // validator: (id) => /(?!-)^[a-z|-]+(?<!-)$/g.test(id),
    },
    tag: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="scss">

</style>
