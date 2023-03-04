<template>
  <v-card class="client-card">
    <v-card-title>
      Usuario: {{ name }} {{ last_name }}
    </v-card-title>
    <v-card-text>
      Código: {{ id }}
    </v-card-text>
    <v-card-text>
      Email: {{ email }}
    </v-card-text>
      
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersComponent',
  data: () => ({
    id: null,
    name: null, 
    last_name: null,
    email: null, 
  }),
  beforeCreate(){
    let baseURL = '/users/users_endpoint/'
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
          let user = data["data"]
          this.id = user.id
          this.name = user.name
          this.last_name = user.last_name
          this.email = user.email
        })
  },
}

</script>

<style>
.client-card {
  margin: 10px;
}
</style>
