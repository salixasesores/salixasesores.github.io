<template>
  <div class="login">
    <BarClients />
  </div>
  <v-container>
    <v-row class="justify-center">
      <v-card class="elevation-12 justify-center" style="margin-top: 100px" width="350px">
         <v-toolbar color="success">
            <v-toolbar-title>Registro</v-toolbar-title>
         </v-toolbar>
         <v-card-text>
            <v-form>
              <v-text-field
                  name="firstName"
                  label="Nombre"
                  type="text"
               ></v-text-field>
               <v-text-field
                  name="lastName"
                  label="Apellido/s"
                  type="text"
               ></v-text-field>
               <v-text-field
                  name="login"
                  label="Email"
                  type="text"
               ></v-text-field>
               <v-text-field
                  id="password"
                  name="password"
                  label="Contraseña"
                  type="password"
               ></v-text-field>
               <v-text-field
                  id="password2"
                  name="password2"
                  label="Confirmar Contraseña"
                  type="password"
               ></v-text-field>
            </v-form>
         </v-card-text>
         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" variant="outlined" to="/">Crear cuenta</v-btn>
            <v-spacer></v-spacer>
         </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import BarClients from '../components/BarClients.vue'

export default {
  components: {
    BarClients,
  },
}
</script>