<template>
  <section
    id="fixed-head"
    class="section section-at-table-fixed-head"
  >
    <ExampleContainer
      title="AtTable Fixed Head"
    >
      <div
        :style="{
          width: '100%',
          height: '380px',
        }"
      >
        <at-table
          at-id="example-table"
          :rows="table.data"
          :columns="table.columns"
          fixed
        />
      </div>
    </ExampleContainer>
  </section>
</template>

<script>

export default {
  name: 'AtTableFixedHead',
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
        {
          id: 11,
          first_name: 'Heriberto',
          last_name: 'Scutchings',
          phone_number: '+64 (605) 522-7475',
          email: 'hscutchingsa@gmpg.org',
          ip_address: '254.9.242.252',
        },
        {
          id: 12,
          first_name: 'Craggie',
          last_name: 'Eales',
          phone_number: '+86 (529) 280-4937',
          email: 'cealesb@cdc.gov',
          ip_address: '247.29.166.43',
        },
        {
          id: 13,
          first_name: 'Brigida',
          last_name: 'Toupe',
          phone_number: '+380 (309) 777-6018',
          email: 'btoupec@webmd.com',
          ip_address: '93.188.68.20',
        },
        {
          id: 14,
          first_name: 'Clevie',
          last_name: 'Spykings',
          phone_number: '+7 (410) 310-8619',
          email: 'cspykingsd@hhs.gov',
          ip_address: '155.111.181.116',
        },
        {
          id: 15,
          first_name: 'Jean',
          last_name: 'Sanchez',
          phone_number: null,
          email: 'jsancheze@wix.com',
          ip_address: null,
        },
        {
          id: 16,
          first_name: 'Jacenta',
          last_name: 'Blumire',
          phone_number: '+380 (832) 559-7445',
          email: 'jblumiref@histats.com',
          ip_address: '82.247.234.1',
        },
        {
          id: 17,
          first_name: 'Roseann',
          last_name: 'Skillett',
          phone_number: '+86 (279) 340-2999',
          email: 'rskillettg@phoca.cz',
          ip_address: '78.140.99.228',
        },
        {
          id: 18,
          first_name: 'Georgi',
          last_name: 'Klimontovich',
          phone_number: null,
          email: 'gklimontovichh@t-online.de',
          ip_address: null,
        },
        {
          id: 19,
          first_name: 'Theo',
          last_name: 'Reede',
          phone_number: '+44 (449) 297-0402',
          email: 'treedei@jimdo.com',
          ip_address: '57.95.73.76',
        },
        {
          id: 20,
          first_name: 'Amberly',
          last_name: 'Waye',
          phone_number: '+7 (948) 706-9755',
          email: null,
          ip_address: '125.91.46.163',
        },
        {
          id: 21,
          first_name: 'Brandi',
          last_name: 'Shedden',
          phone_number: '+62 (928) 965-1183',
          email: 'bsheddenk@smh.com.au',
          ip_address: '39.128.229.58',
        },
        {
          id: 22,
          first_name: 'Alika',
          last_name: 'Bowick',
          phone_number: '+62 (134) 908-7489',
          email: 'abowickl@woothemes.com',
          ip_address: '95.41.242.10',
        },
        {
          id: 23,
          first_name: 'Rodolfo',
          last_name: 'Lidgett',
          phone_number: '+86 (315) 380-3170',
          email: 'rlidgettm@1688.com',
          ip_address: '67.170.224.122',
        },
        {
          id: 24,
          first_name: 'Madelena',
          last_name: 'Sunnucks',
          phone_number: '+86 (123) 303-2649',
          email: 'msunnucksn@vk.com',
          ip_address: '64.115.38.135',
        },
        {
          id: 25,
          first_name: 'Jo',
          last_name: 'Chicken',
          phone_number: '+54 (942) 547-5138',
          email: 'jchickeno@symantec.com',
          ip_address: '232.9.132.188',
        },
        {
          id: 26,
          first_name: 'Prent',
          last_name: 'Rizzillo',
          phone_number: '+86 (825) 698-2828',
          email: 'prizzillop@soundcloud.com',
          ip_address: '89.155.190.199',
        },
        {
          id: 27,
          first_name: null,
          last_name: null,
          phone_number: '+504 (126) 719-7857',
          email: 'sdonnelq@ucsd.edu',
          ip_address: '118.249.6.0',
        },
        {
          id: 28,
          first_name: 'Allayne',
          last_name: 'McPhate',
          phone_number: null,
          email: 'amcphater@friendfeed.com',
          ip_address: null,
        },
        {
          id: 29,
          first_name: 'Kirby',
          last_name: 'Redwing',
          phone_number: '+62 (730) 901-3856',
          email: 'kredwings@posterous.com',
          ip_address: '203.74.171.200',
        },
        {
          id: 30,
          first_name: 'Frasier',
          last_name: 'Pimer',
          phone_number: '+86 (290) 448-3455',
          email: 'fpimert@ebay.com',
          ip_address: '31.182.31.76',
        },
        {
          id: 31,
          first_name: 'Angela',
          last_name: 'Daborn',
          phone_number: '+62 (468) 882-3562',
          email: 'adabornu@omniture.com',
          ip_address: '98.132.243.162',
        },
        {
          id: 32,
          first_name: 'Fara',
          last_name: 'Alenichev',
          phone_number: '+351 (157) 639-5719',
          email: 'falenichevv@slideshare.net',
          ip_address: '173.39.125.241',
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
          width: 140,
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
        },
      ],
    },
  }),
};
</script>

<style lang="scss">

</style>
