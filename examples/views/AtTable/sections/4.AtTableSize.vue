<template>
  <section
    id="Size"
    class="section section-at-table-base"
  >
    <ExampleContainer title="AtTable Size">
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns"
        size="mini"
        style="margin: 0 0 40px"
      />

      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns"
        style="margin: 0 0 40px"
      />

      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns"
        size="large"
        style="margin: 0 0 40px"
      />

      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns"
        size="extra"
      />
    </ExampleContainer>
  </section>
</template>

<script>
import dataSource from './dataSource';

export default {
  name: 'AtTableSize',
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
