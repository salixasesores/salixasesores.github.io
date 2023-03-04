<template>
  <v-card class="client-card" title="Teléfonos asociados">
    <v-card-text v-if="phones">
      
      <ul>
        <li v-for="phone in phones" :key="phone" style="margin-left: 20px">
          {{ phone.name }}: {{ phone.phone_number }}
        </li>
      </ul>
    </v-card-text>
    <v-card-text v-else>
      No hay teléfonos asociados.
    </v-card-text>
  </v-card>  
</template>
  
<script>
  export default {
    name: 'AssociatedPhones',
    props: [
      "phones"
    ]

  }
</script>
