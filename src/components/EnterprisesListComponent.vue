<template>
    <BaseClientTableComponent 
      tableName="Listado de empresas"  
      :items="enterprises"
      baseURL="/employees/enterprises/"
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
    enterprises: null,
  }),
  beforeCreate(){
    axios
      .get('/users/enterprises_endpoint/', {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        },
      })
      .then(async response => {
          const data = await response;
          this.enterprises = data["data"]
        })
  },
}

</script>
