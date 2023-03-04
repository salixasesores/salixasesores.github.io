<template>
  <v-card class="client-card" title="Dirección">
    <div v-if="address">
      <v-card-text>
        <div v-if="address.localidad">
          Localidad: {{ address.localidad }}
        </div>
        <div v-if="address.postal_code">
          Código Postal: {{ address.postal_code }}
        </div>
        <div v-if="address.address">
          Dirección: {{ address.address }}
        </div>
      </v-card-text>
    </div>
    <v-card-text v-else>
      No hay datos introducidos
    </v-card-text>
    </v-card>
</template>
  
<script>
  export default {
    name: 'AssociatedPhones',
    props: [
      "address"
    ]

  }
</script>
