<template>
  <section
    id="intro"
    class="section section-at-radio-base"
  >
    <ExampleContainer
      title="AtRadio Base"
    >
      <at-radio
        label="Unchecked"
      />
      <at-radio
        checked
        label="Checked"
      />
      <at-radio
        disabled
        label="Disabled"
      />
      <at-radio
        checked
        disabled
        label="Disabled"
      />
    </ExampleContainer>
  </section>
</template>

<script>
export default {
  name: 'SectionAtRadioBase',
};
</script>

<style lang="scss">

</style>
