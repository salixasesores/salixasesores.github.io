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
                Emails
              </th>
              <th>
                Teléfonos
              </th>
              <th>
                Clientes asociados
              </th>
              <th>
                Centros asociados
              </th>
              <th>
                Empresas asociadas
              </th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="(item, index) in filteredRows"
              :key="item.id"
              >
              <tr 
              :class="{ 'table-light': index % 2, 'table-dark': (index+1)%2 }"
              @click="pushTo(item.id)"
              >
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <ul>
                  <li v-for="email in item.email" :key="email.email + email.name">
                    {{ email.name }}: {{ email.email }} 
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li v-for="phone in item.phone_number" :key="phone.phone_number + phone.name">
                    {{ phone.name }}: {{ phone.phone_number }} 
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li v-for="customer in item.customer_set" :key="customer.code">
                    {{ customer.code }}: {{ customer.name }} 
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li v-for="center in item.center_set" :key="center.code">
                    {{ center.code }}: {{ center.name }} 
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li v-for="enterprise in item.enterprise_set" :key="enterprise.code">
                    {{ enterprise.code }}: {{ enterprise.name }} 
                  </li>
                </ul>
              </td>
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
  name: 'BaseContactTableComponent',
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

        let emailsList = Array()
        let phonesList = Array()
        let customersList = Array()
        let centersList = Array()
        let enterprisesList = Array()

        for (const email in row.email) {
          emailsList.push(row.email[email].name)
          emailsList.push(row.email[email].email)
        }

        for (const phone in row.phone_number) {
          phonesList.push(row.phone_number[phone].name)
          phonesList.push(row.phone_number[phone].phone_number)
        }

        for (const customer in row.customer_set) {
          customersList.push(row.customer_set[customer].code)
          customersList.push(row.customer_set[customer].name)
        }

        for (const center in row.center_set) {
          centersList.push(row.center_set[center].code)
          centersList.push(row.center_set[center].name)
        }

        for (const enterprise in row.enterprise_set) {
          enterprisesList.push(row.enterprise_set[enterprise].code)
          enterprisesList.push(row.enterprise_set[enterprise].name)
        }



        const customerName = row.name.toString().toLowerCase();
        const customerEmail = emailsList.toString().toLowerCase();
        const customerPhone = phonesList.toString().toLowerCase();
        const customerCustomer = customersList.toString().toLowerCase();
        const customerCenter = centersList.toString().toLowerCase();
        const customerEnterprise = enterprisesList.toString().toLowerCase();

        const searchTerm = this.filter.toLowerCase();
        if (searchTerm.length == 0) {
          return customers
        } else {
          return customerName.includes(searchTerm) ||
            customerEmail.includes(searchTerm) ||
            customerPhone.includes(searchTerm) ||
            customerCustomer.includes(searchTerm) ||
            customerCenter.includes(searchTerm) ||
            customerEnterprise.includes(searchTerm)
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
