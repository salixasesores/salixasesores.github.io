<template>
  <v-card :title="title" class="client-card">
    <div v-if="contacts">
      <v-card-text v-for="contact in contacts" :key="contact.name">
        <v-card :title="contact.name" flat class="client-card" :to="baseURL+contact.code">
          <v-card-text>
              Código: {{ contact.code }}
            </v-card-text>
          </v-card>
        </v-card-text>
    </div>
  </v-card>
</template>
  
<script>
  export default {
    name: 'AssociatedContacts',
    props: [
      "title",
      "contacts",
      "baseURL"
    ],
  }
</script>
