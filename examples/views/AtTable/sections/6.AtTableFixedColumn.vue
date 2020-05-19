<template>
  <section
    id="fixed-column"
    class="section section-at-table-fixed-column"
  >
    <ExampleContainer title="AtTable Fixed Column">
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns_e1"
        fixed
        style="
          max-width: 1400px;
          height: 380px;
          margin: 0 0 40px;
        "
      />
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns_e2"
        fixed
        style="

          height: 380px;
          margin: 0 0 40px;
        "
      />
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns_e3"
        fixed
        style="
          max-width: 1400px;
          height: 380px;
          margin: 0 0 40px;
        "
      />
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns_e4"
        fixed
        style="
          max-width: 1400px;
          height: 380px;
        "
      />
    </ExampleContainer>
  </section>
</template>

<script>
import dataSource from './dataSource';

export default {
  name: 'AtTableFixedColumnf',
  data: () => ({
    table: {
      data: dataSource.slice(0, 32),
      columns_e1: [
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
          fixed: 'left',
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
      columns_e2: [
        {
          key: 'first_name',
          label: 'First Name',
          width: 120,
        },
        {
          key: 'last_name',
          label: 'Last Name',
          width: 120,
          fixed: 'left',
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
          width: 240,
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
      columns_e3: [

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
        {
          key: 'first_name',
          label: 'First Name',
          width: 120,
          fixed: 'right',
        },
        {
          key: 'last_name',
          label: 'Last Name',
          width: 120,
          fixed: 'right',
        },
      ],
      columns_e4: [
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
          fixed: 'right',
        },
      ],
    },
  }),
};
</script>

<style lang="scss">

</style>
