<template>
  <section
    id="border"
    class="section section-at-table-border"
  >
    <ExampleContainer
      title="AtTable Border"
    >
      <at-table
        at-id="example-table"
        :rows="table.data"
        :columns="table.columns"
        border
      />
    </ExampleContainer>
  </section>
</template>

<script>

export default {
  name: 'AtTableBorder',
  data: () => ({
    table: {
      data: [
        {
          id: 1,
          first_name: 'Marianna',
          last_name: 'Mounfield',
          phone_number: '+86 (571) 323-1573',
          email: 'mmounfield0@mayoclinic.com',
          ip_address: '228.178.144.56',
        },
        {
          id: 2,
          first_name: 'Joseph',
          last_name: 'Hansberry',
          phone_number: '+63 (836) 547-6371',
          email: 'jhansberry1@ft.com',
          ip_address: '113.158.168.239',
        },
        {
          id: 3,
          first_name: 'Tamma',
          last_name: 'Lilley',
          phone_number: '+34 (610) 333-4176',
          email: 'tlilley2@com.com',
          ip_address: '164.183.47.84',
        },
        {
          id: 4,
          first_name: 'Archaimbaud',
          last_name: 'Valek',
          phone_number: null,
          email: 'avalek3@google.ca',
          ip_address: null,
        },
        {
          id: 5,
          first_name: 'Lorelle',
          last_name: 'Adamou',
          phone_number: null,
          email: 'ladamou4@tmall.com',
          ip_address: null,
        },
        {
          id: 6,
          first_name: 'Bink',
          last_name: 'Hacon',
          phone_number: '+55 (158) 892-3032',
          email: 'bhacon5@ucsd.edu',
          ip_address: '227.245.247.41',
        },
        {
          id: 7,
          first_name: 'Shell',
          last_name: 'Boxhill',
          phone_number: '+1 (713) 336-9512',
          email: 'sboxhill6@odnoklassniki.ru',
          ip_address: '16.196.68.92',
        },
        {
          id: 8,
          first_name: 'Sayers',
          last_name: 'Bugg',
          phone_number: null,
          email: null,
          ip_address: null,
        },
        {
          id: 9,
          first_name: 'Pierson',
          last_name: 'Guest',
          phone_number: '+33 (999) 215-6150',
          email: 'pguest8@clickbank.net',
          ip_address: '152.78.51.211',
        },
        {
          id: 10,
          first_name: 'Glori',
          last_name: 'Yaus',
          phone_number: null,
          email: 'gyaus9@cam.ac.uk',
          ip_address: null,
        },
      ],
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
          key: 'phone_number',
          label: 'Phone Number',
          width: 180,
          align: 'right',
        },
        {
          key: 'email',
          label: 'Email',
        },
        {
          key: 'ip_address',
          label: 'IP Address',
        },
      ],
    },
  }),
};
</script>

<style lang="scss">

</style>
