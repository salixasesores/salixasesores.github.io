<template>
  <v-card class="client-card" title="Emails asociados">
    <v-card-text v-if="emails">
      
      <ul>
        <li v-for="mail in emails" :key="mail" style="margin-left: 20px">
          {{ mail.name }}: {{ mail.email }}
        </li>
      </ul>
    </v-card-text>
    <v-card-text v-else>
      No hay emails asociados.
    </v-card-text>
  </v-card>  
</template>
  
<script>
  export default {
    name: 'AssociatedEmails',
    props: [
      "emails"
    ]

  }
</script>
