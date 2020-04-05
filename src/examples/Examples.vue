<template>
  <div id="Examples">
    <div class="example-container example-container-at-table">
      <div class="example-container__wrap">
        <at-table
          at-id="example-table"
          :rows="table.data"
          :cols="table.columns"
          border
          fixed
        />
      </div>
    </div>
  </div>
</template>

<script>
import AtTable from '@/packages/AtTable/AtTable.vue';

import tableDataSource from './table_data_source';

export default {
  name: 'Examples',
  components: {
    AtTable,
  },
  data: () => ({
    table: {
      data: tableDataSource,
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
          fixed: 'left',
        },
        {
          key: 'phone_number',
          label: 'Phone Number',
          width: 180,
          align: 'right',
        },
        {
          key: 'email',
          label: 'Email',
          width: 180,
        },
        {
          key: 'ip_address',
          label: 'IP Address',
          width: 400,
        },
        // {
        //   key: 'address',
        //   label: 'Address',
        // },
        // {
        //   key: 'city',
        //   label: 'City',
        // },
        // {
        //   key: 'state',
        //   label: 'State',
        // },
        // {
        //   key: 'postCode',
        //   label: 'ZIP Code',
        // },
      ],
    },
  }),
};
</script>

<style lang="scss">
@import '@/styles/global.scss';
@import './styles/Examples.scss';
.example-container-at-table {
  width: 800px;
  height: 600px;
}
</style>
