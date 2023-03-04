<template>
    <BaseClientTableComponent 
      tableName="Listado de clientes"  
      :items="clients"
      baseURL="/employees/clients/"
    />
</template>

<script>
import axios from 'axios'
import BaseClientTableComponent from './BaseClientTableComponent.vue'

export default {
  components: {
    BaseClientTableComponent
  },
  name: 'ClientsListComponent',
  data: () => ({
    clients: null,
    search: '', 
  }),
  beforeCreate(){
    axios
      .get('/users/customers_endpoint/', {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        },
      })
      .then(async response => {
          const data = await response;
          this.clients = data["data"]
        })
  },
}

</script>
