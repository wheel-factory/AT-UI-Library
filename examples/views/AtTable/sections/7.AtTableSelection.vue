<template>
  <section
    id="selection"
    class="section section-at-table-selection"
  >
    <ExampleContainer title="AtTable Selection">
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns"
        fixed
        selection
        style="
          height: 380px;
        "
      />
      <button @click="()=>{ table.data[6].last_name= 'Zhao' }">
        Update
      </button>
    </ExampleContainer>
  </section>
</template>

<script>
import dataSource from './dataSourceBigArray';

export default {
  name: 'AtTableSelection',
  data: () => ({
    table: {
      data: dataSource,
      // data: dataSource.slice(0, 32),
      columns: [
        {
          key: 'first_name',
          label: 'First Name',
          width: 120,
          fixed: 'left',
        },
        {
          key: 'last_name',
          label: 'Last Name',
          width: 120,
        },
        {
          key: 'email',
          label: 'Email',
          width: 280,
        },
        {
          key: 'phone_number',
          label: 'Phone Number',
          width: 160,
          align: 'right',
        },
        {
          key: 'street_address',
          label: 'Address',
          width: 280,
        },
        {
          key: 'street_address',
          label: 'Address',
          width: 280,
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
