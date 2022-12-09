<template>
  <div class="login">
    <BarClients />
  </div>
  <v-container>
    <v-row class="justify-center">
      <v-card class="elevation-12 justify-center" style="margin-top: 100px" width="350px">
         <v-toolbar color="success">
            <v-toolbar-title>Inicio de sesión</v-toolbar-title>
         </v-toolbar>
         <v-card-text>
            <v-form>
               <v-text-field
                  prepend-icon="mdi-email"
                  name="login"
                  label="Email"
                  type="text"
               ></v-text-field>
               <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Contraseña"
                  type="password"
               ></v-text-field>
            </v-form>
         </v-card-text>
         <v-card-actions>
            <v-btn color="blue" to="/signin">Registro</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="teal" to="/">Entrar</v-btn>
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