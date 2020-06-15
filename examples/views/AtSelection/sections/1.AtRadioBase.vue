<template>
  <section
    id="AtRadio"
    class="section section-at-radio-base"
  >
    <ExampleContainer title="AtRadio Base">
      <at-radio
        v-model="atRadio"
        label="AtRadio"
      />
      <div class="at-radio-group">
        <div class="at-radio-group__inner">
          <at-radio label="Unchecked" />
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
      </div>
    </ExampleContainer>
  </section>
</template>

<script>
export default {
  name: 'SectionAtRadioBase',
  data: () => ({
    atRadio: false,
  }),
};
</script>

<style lang="scss">

</style>
