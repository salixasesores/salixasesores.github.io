<template>
  <v-card class="client-card">
    <v-card-title v-if="name">
      Cliente: {{ name }} 
    </v-card-title>
    <v-card-text v-if="code">
      Código: {{ code }}
    </v-card-text>
    <v-card-text v-if="direct_email">
      Email principal: {{ direct_email }}
    </v-card-text>
    <v-card-text v-if="direct_phone">
      Teléfono principal: {{ direct_phone }}
    </v-card-text>
    <v-card-text v-if="cif">
      CIF: {{ cif }}
    </v-card-text>
  </v-card>
  
  <AssociatedContactsComponent :contacts="contacts" />
  <AssociatedEmailsComponent :emails="emails" />
  <AssociatedPhonesComponent :phones="phone_numbers" />
  <AssociatedAddressComponent :address="address" />
  <BaseClientTableComponent tableName="Centros" :items="centers" baseURL="/employees/centers/"/>
  <BaseClientTableComponent tableName="Empresas" :items="enterprises" baseURL="/employees/enterprises/"/>

</template>

<script>
import axios from 'axios'
import BaseClientTableComponent from './BaseClientTableComponent.vue'
import AssociatedEmailsComponent from './AssociatedEmailsComponent.vue'
import AssociatedPhonesComponent from './AssociatedPhonesComponent.vue'
import AssociatedAddressComponent from './AssociatedAddressComponent.vue'
import AssociatedContactsComponent from './AssociatedContactsComponent .vue'

export default {
  components: {
    BaseClientTableComponent,
    AssociatedEmailsComponent,
    AssociatedPhonesComponent,
    AssociatedAddressComponent,
    AssociatedContactsComponent
  },
  name: 'ClientsRetrieveComponentVue',
  data: () => ({
    code: null,
    name: null, 
    direct_email: null, 
    direct_phone: null, 
    cif: null,
    phone_numbers: null,
    emails: null,
    address: null,
    contacts: null,
    centers: null,
    enterprises: null,
  }),
  beforeCreate(){
    let baseURL = '/users/customers_endpoint/'
    let id = this.$route.params.id
    let url = baseURL + id
    axios
      .get(url, {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        }
      })
      .then(response => {
          const data = response;
          let client = data["data"]
          this.code = client.code
          this.name = client.name
          this.direct_email = client.direct_email
          this.direct_phone = client.direct_phone
          this.cif = client.cif
          this.emails = client.emails
          this.phone_numbers = client.phone_numbers
          this.address = client.address
          this.contacts = client.contacts
          this.centers = client.center_set
          this.enterprises = client.enterprise_set
        })
  },
  methods: {
    centerPush(centerCode) {
      this.$router.push('/employees/centers/'+centerCode)
    },
    enterprisePush(enterpriseCode) {
      this.$router.push('/employees/enterprises/'+enterpriseCode)
    } 
  }
}

</script>

<style>
.client-card {
  margin: 10px;
  background: rgb(250, 255, 250)
}
.table-light {
  display: table-row;
  background: white !important;
}
.table-dark {
  display: table-row;
  background: #ebfff4 !important;
}
.table-light:hover {
  background: rgb(148, 236, 236) !important;
}
.table-dark:hover {
  background: rgb(148, 236, 236) !important;
}
</style>
