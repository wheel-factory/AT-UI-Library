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

<style lang="scss">
.example-container{
  position: relative;

  padding: 30px 20px;

  border: solid 1px $color-dark-10;

  margin: 40px 0;

  &__title{
    $height: 20px;

    position: absolute;
    top: -$height / 2;
    left: 10px;

    background-color: $color-light;

    padding: 0 10px;

    color: $color-dark-60;
    font-size: 14px;
    line-height: $height;

    // text-transform: uppercase;
  }
}
</style>
