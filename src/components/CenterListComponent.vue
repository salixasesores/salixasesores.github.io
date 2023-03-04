<template>
    <BaseClientTableComponent 
      tableName="Listado de centros"  
      :items="centers"
      baseURL="/employees/centers/"
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
    centers: null,
  }),
  beforeCreate(){
    axios
      .get('/users/centers_endpoint/', {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        },
      })
      .then(async response => {
          const data = await response;
          this.centers = data["data"]
        })
  },
}

</script>
