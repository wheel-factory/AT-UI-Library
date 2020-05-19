<template>
  <section
    id="striped"
    class="section section-at-table-striped"
  >
    <ExampleContainer
      title="AtTable Striped"
    >
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns"
        striped
      />
    </ExampleContainer>
  </section>
</template>

<script>
import dataSource from './dataSource';

export default {
  name: 'AtTableStriped',
  data: () => ({
    table: {
      data: dataSource.slice(0, 8),
      columns: [
        {
          key: 'first_name',
          label: 'First Name',
          width: 120,
        },
        {
          key: 'last_name',
          label: 'Last Name',
          width: 120,
        },
        {
          key: 'email',
          label: 'Email',
        },
        {
          key: 'phone_number',
          label: 'Phone Number',
          width: 160,
          align: 'right',
        },
        {
          key: 'city',
          label: 'Cite',
          width: 120,
        },
        {
          key: 'state',
          label: 'State',
          width: 60,
        },
        {
          key: 'zip_code',
          label: 'ZIP Code',
          width: 80,
        },
      ],
    },
  }),
};
</script>

<style lang="scss">

</style>
