<template>
  <section
    id="shape"
    class="section section-at-button-shape"
  >
    <ExampleContainer
      title="AtButton Shape"
    >
      <at-button-group>
        <at-button>
          Rectangle
        </at-button>
        <at-button shape="rounded">
          Rounded
        </at-button>
        <at-button shape="capsule">
          capsule
        </at-button>
      </at-button-group>
      <br>
      <at-button-group>
        <at-button type="major">
          Rectangle
        </at-button>
        <at-button
          type="major"
          shape="rounded"
        >
          Rounded
        </at-button>
        <at-button
          type="major"
          shape="capsule"
        >
          capsule
        </at-button>
      </at-button-group>
    </ExampleContainer>
  </section>
</template>

<script>
export default {
  name: 'SectionAtButtonShape',
};
</script>

<style lang="scss">

</style>
