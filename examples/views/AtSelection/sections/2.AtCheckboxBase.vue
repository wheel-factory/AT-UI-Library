<template>
  <section
    id="intro"
    class="section section-at-checkbox-base"
  >
    <ExampleContainer
      title="AtCheckbox Base"
    >
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
};
</script>

<style lang="scss">

</style>
