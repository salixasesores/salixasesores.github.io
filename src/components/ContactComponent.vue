<template>
      <v-container grid-list-xs>
        Llámanos o envíanos un email. Estaremos encantados de atenderte.
        <br>
        <br>
        <v-list>
          <v-list-item style="font-size: 20px;" class="text-center">
            <v-icon color="green" >mdi-phone</v-icon> 600 600 600
          </v-list-item>
          <v-list-item style="font-size: 20px;" class="text-center">
            <v-icon color="green" >mdi-email</v-icon> salixasesores@gmail.com
          </v-list-item>
        </v-list>
        <br>
        También puedes contactar directamente con alguno de nuestros departamentos. 
        <br>
        <br>
        <v-row class="justify-center">
          
            <v-list-item v-for="department in departments" :key="department.id">
              <h3>{{ department.name }}</h3>
              Teléfono: {{ department.phone }}
              <br>
              Email: {{ department.email }}
            </v-list-item>
        </v-row>
      </v-container>

</template>

<script>
export default {
  name: 'ContactComponent',
  data: () => ({
    departments: {
      riesgos: {
        id: "riesgos",
        name: "Riesgos Laborales",
        phone: "600 600 600",
        email: "salixasesor@salix.com"
      },
      laboratorio: {
        id: "laboratorio",
        name: "Laboratorio",
        phone: "600 600 600",
        email: "salixasesor@salix.com"
      },
      recogida: {
        id: "recogida",
        name: "Recogida",
        phone: "600 600 600",
        email: "salixasesor@salix.com"
      },
      atencion: {
        id: "atencion",
        name: "Atención al Cliente",
        phone: "600 600 600",
        email: "salixasesor@salix.com"
      },
      administracion: {
        id: "administracion",
        name: "Administración",
        phone: "600 600 600",
        email: "salixasesor@salix.com"
      },
      alimentacion: {
        id: "alimentacion",
        name: "Alimentación",
        phone: "600 600 600",
        email: "salixasesor@salix.com"
      },
    },
  }),
}

</script>