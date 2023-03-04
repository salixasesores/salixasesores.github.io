<template>
    <BaseContactTableComponent 
      tableName="Listado de contactos"  
      :items="contacts"
      baseURL="/employees/contacts/"
    />
</template>

<script>
import axios from 'axios'
import BaseContactTableComponent from './BaseContactTableComponent.vue'

export default {
  components: {
    BaseContactTableComponent
  },
  name: 'ClientsListComponent',
  data: () => ({
    contacts: null,
  }),
  beforeCreate(){
    axios
      .get('/users/contacts_endpoint/', {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        },
      })
      .then(async response => {
          const data = await response;
          this.contacts = data["data"]
        })
  },
}

</script>
