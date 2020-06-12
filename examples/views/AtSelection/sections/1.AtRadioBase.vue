<template>
  <section
    id="intro"
    class="section section-at-radio-base"
  >
    <ExampleContainer
      title="AtRadio Base"
    >
      <dir class="at-radio-group">
        <div class="at-radio-group__inner">
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
        </div>
      </dir>
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
