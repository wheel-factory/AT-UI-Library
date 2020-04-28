<template>
  <section
    id="base"
    class="section section-at-table-base"
  >
    <ExampleContainer
      title="AtTable Base"
    >
      <div
        :style="{
          width: '100%',
          height: '400px',
        }"
      >
        <at-table
          at-id="example-table"
          :rows="table.data"
          :cols="table.columns"
          border
          fixed
          striped
        />
      </div>
    </ExampleContainer>
  </section>
</template>

<script>
import AtTableBaseTableDataSource from './1.AtTableBaseTableDataSource';

export default {
  name: 'AtTableBase',
  data: () => ({
    table: {
      data: AtTableBaseTableDataSource,
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

</style>
