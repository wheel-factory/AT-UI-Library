<template>
  <section
    id="intro"
    class="section section-at-checkbox-group-base"
  >
    <ExampleContainer title="AtCheckboxGroup Base">
      <at-checkbox-group
        v-model="checked"
        :options="options"
      />
      <p>
        Checked: {{ checked }}
      </p>
    </ExampleContainer>
  </section>
</template>

<script>
export default {
  name: 'SectionAtCheckboxGroupBase',
  data: () => ({
    options: [
      {
        label: 'Option 1',
        value: 'option_1',
      },
      {
        label: 'Option 2',
        value: 'option_2',
      },
      {
        label: 'Option 3',
        value: 'option_3',
        disabled: true,
      },
      {
        label: 'Option 4',
        value: 'option_4',
      },
    ],
    checked: ['option_1', 'option_2'],
  }),
};
</script>

<style lang="scss">

</style>
