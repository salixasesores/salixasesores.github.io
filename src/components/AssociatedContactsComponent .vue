<template>
  <v-card title="Contactos" class="client-card">
    <div v-if="contacts">
      <v-card-text v-for="contact in contacts" :key="contact.name">
        <v-card :title="contact.name" flat class="client-card">
          <v-card-text>
              <ul>
                Emails:
                <li v-for="mail in contact.email" :key="mail.name" style="margin-left: 20px">
                  {{ mail.name }}: {{ mail.email }}
                </li>
              </ul>
              <ul>
                Teléfonos:
                <li v-for="phone in contact.phone_number" :key="phone.name" style="margin-left: 20px">
                  {{ phone.name }}: {{ phone.phone_number }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
          {{ contact.email.email }}
          {{ contact.phone_numbers }}
        </v-card-text>
    </div>
  </v-card>
</template>
  
<script>
  export default {
    name: 'AssociatedContacts',
    props: [
      "contacts"
    ],
  }
</script>
