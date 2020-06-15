<template>
  <section
    id="intro"
    class="section section-at-checkbox-base"
  >
    <ExampleContainer
      title="AtCheckbox Base"
    >
      <at-checkbox
        v-model="atCheckbox"
        label="AtCheckbox"
      />
      <div class="at-checkbox-group">
        <div class="at-checkbox-group__inner">
          <at-checkbox
            label="Unchecked"
          />
          <at-checkbox
            indeterminate
            label="Disabled"
          />
          <at-checkbox
            checked
            label="Checked"
          />
          <at-checkbox
            disabled
            label="Disabled"
          />
          <at-checkbox
            indeterminate
            disabled
            label="Disabled"
          />
          <at-checkbox
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
  name: 'SectionAtCheckboxBase',
  data: () => ({
    atCheckbox: false,
  }),
};
</script>

<style lang="scss">

</style>
