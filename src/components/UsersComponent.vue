<template>
  <UsersTableComponent :users="users" v-if="users"/>
</template>

<script>
import axios from 'axios'
import UsersTableComponent from './UsersTableComponent.vue';
export default {
  components: {
    UsersTableComponent,
},
  name: 'UsersComponent',
  data: () => ({
    users: null,
    search: '', 
  }),
  beforeCreate(){
    axios
      .get('/users/users_endpoint/', {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        },
      })
      .then(response => {
          const data = response;
          this.users = data["data"]
        })
  },
  methods: {
    handleClick(item){
      console.log(item)
      this.$router.push('/employees/users/'+item)
    }
  },
}

</script>

<style>
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