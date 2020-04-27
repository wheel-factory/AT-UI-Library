<template>
  <section class="section section-at-button-status">
    <ExampleContainer
      title="Button State"
    >
      <at-button-group>
        <at-button>
          Normal
        </at-button>
        <at-button state="hover">
          Hover
        </at-button>
        <at-button state="hover">
          Active
        </at-button>
        <at-button state="running">
          Running
        </at-button>
        <at-button state="disabled">
          Disabled
        </at-button>
      </at-button-group>
      <br>
      <at-button-group>
        <at-button type="major">
          Normal
        </at-button>
        <at-button
          type="major"
          state="hover"
        >
          Hover
        </at-button>
        <at-button
          type="major"
          state="hover"
        >
          Active
        </at-button>
        <at-button
          type="major"
          state="running"
        >
          Running
        </at-button>
        <at-button
          type="major"
          state="disabled"
        >
          Disabled
        </at-button>
      </at-button-group>
    </ExampleContainer>
  </section>
</template>

<script>

export default {
  name: 'SectionAtButtonState',

};
</script>

<style lang="scss">

</style>
