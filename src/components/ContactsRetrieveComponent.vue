<template>
  <v-card class="client-card">
    <v-card-title v-if="name">
      Contacto: {{ name }} 
    </v-card-title>
  </v-card>
  
  <AssociatedEmailsComponent :emails="emails" />
  <AssociatedPhonesComponent :phones="phone_numbers" />
  <AssociatedCustomerCenterEnterprise title="Clientes asociados" :contacts="customers" baseURL="/employees/clients/" v-if="customers" />
  <AssociatedCustomerCenterEnterprise title="Centros asociados" :contacts="centers" baseURL="/employees/centers/" v-if="centers" />
  <AssociatedCustomerCenterEnterprise title="Empresas asociadas" :contacts="enterprises" baseURL="/employees/enterprises/" v-if="enterprises" />

</template>

<script>
import axios from 'axios'
import AssociatedEmailsComponent from './AssociatedEmailsComponent.vue'
import AssociatedPhonesComponent from './AssociatedPhonesComponent.vue'
import AssociatedCustomerCenterEnterprise from './AssociatedCustomerCenterEnterprise.vue'

export default {
  components: {
    AssociatedEmailsComponent,
    AssociatedPhonesComponent,
    AssociatedCustomerCenterEnterprise

  },
  name: 'ContactsRetrieveComponent',
  data: () => ({
    name: null, 
    phone_numbers: null,
    emails: null,
    contacts: null,
    customers: null, 
    centers: null,
    enterprises: null,
  }),
  beforeCreate(){
    let baseURL = '/users/contacts_endpoint/'
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
          let contact = data["data"]
          this.name = contact.name
          this.emails = contact.email
          this.phone_numbers = contact.phone_number
          this.customers = contact.customer_set
          this.centers = contact.center_set
          this.enterprises = contact.enterprise_set
        })
  },
  methods: {
    customerPush(customerCode) {
      this.$router.push('/employees/customer/'+customerCode)
    },
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
