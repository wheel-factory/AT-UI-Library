<template>
  <section
    id="fixed-head"
    class="section section-at-table-fixed-head"
  >
    <ExampleContainer title="AtTable Fixed Head">
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns"
        fixed
        style="
          height: 380px;
        "
      />
    </ExampleContainer>
  </section>
</template>

<script>
import dataSource from './dataSource';

export default {
  name: 'AtTableFixedHead',
  data: () => ({
    table: {
      data: dataSource.slice(0, 32),
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
