<template>
<v-card>
  <v-card-title>
    Listado de usuarios
  </v-card-title>
  <v-card-text>
    Filtrar:  <input type="text"
    placeholder="salix@salix.com"
    v-model="filter" />
  </v-card-text>
  <v-table class="table-striped">
    <thead style="background: #e7fce3 ;">
      <tr>
        <th class="text-left">
          Código
        </th>
        <th class="text-left">
          Nombre
        </th>
        <th>
          Email
        </th>
      </tr>
    </thead>
    <tbody>
      <template
        v-for="(user, index) in filteredRows"
        :key="user.id"
        >
        <tr 
        :class="{ 'table-light': index % 2, 'table-dark': (index+1)%2 }"
        @click="handleClick(user.id)"
        
        >
        <td>{{ user.id }}</td>
        <td>{{ user.name }} {{ user.last_name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </template>
    </tbody>
  </v-table>
</v-card>

</template>

<script>

export default {
  name: 'UsersComponent',
  data() {
    return {
      filter: ''
    }
  },
  props: [
    'users'
  ],
  methods: {
    handleClick(item){
      this.$router.push('/employees/users/'+item)
    }
  },
  computed: {
    filteredRows() {
      return this.users.filter(row => {
        const customers = this.users
        const customerCode = row.id.toString().toLowerCase();
        const customerName = row.name.toString().toLowerCase();
        const customerEmail = row.email.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();
        if (searchTerm) {
          return customerCode.includes(searchTerm) ||
          customerName.includes(searchTerm) ||
          customerEmail.includes(searchTerm)
        } else {
          return customers
        }
      });
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