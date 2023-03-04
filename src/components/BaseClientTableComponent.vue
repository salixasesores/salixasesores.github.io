<template>
  <v-card class="client-card">
      <v-card-title >
        {{ tableName }}
      </v-card-title>      
      <v-card-text>
        <input type="text"
         placeholder="Filtrar"
         v-model="filter" />
      </v-card-text>
        <v-table v-if="items" style="margin: 10px">
          <thead style="background: #e7fce3 ;">
            <tr>
              <th class="text-left">
                Código
              </th>
              <th class="text-left">
                Nombre
              </th>
              <th>
                Email Principal
              </th>
              <th>
                Teléfono Principal
              </th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="(item, index) in filteredRows"
              :key="item.code"
              >
              <tr 
              :class="{ 'table-light': index % 2, 'table-dark': (index+1)%2 }"
              @click="pushTo(item.code)"

              >
              <td>{{ item.code }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.direct_email }}</td>
              <td>{{ item.direct_phone }}</td>
            </tr>
          </template>
          </tbody>
      </v-table>
      <v-card-text v-else>
        No hay datos introducidos.
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'BaseTableComponent',
  data() {
    return {
      filter:'',
    }
  },
  props: [
    'tableName',
    'items',
    'baseURL',
  ],
  methods: {
    pushTo(code) {
      this.$router.push(this.baseURL+code)
    }
  },
  computed: {
    filteredRows() {
      return this.items.filter(row => {
        let customers = this.items
        const customerCode = row.code.toString().toLowerCase();
        const customerName = row.name.toString().toLowerCase();
        console.log(row)
        const customerEmail = row.direct_email.toString().toLowerCase();
        const customerPhone = row.direct_phone.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();
        if (searchTerm.length == 0) {
          return customers
        } else {
          return customerCode.includes(searchTerm) ||
            customerName.includes(searchTerm) ||
            customerEmail.includes(searchTerm) ||
            customerPhone.includes(searchTerm)
        }
      });
    }
  },
}
</script>


<style>
.client-card {
  margin: 10px;
  background: rgb(250, 255, 250)
}
</style>