<template>
  <v-app>
    <v-main>
      <v-toolbar 
        height="120px"
        color="#f6fcf5"
      >
      <v-spacer></v-spacer>
      <v-toolbar-side-icon>
        <img style="height:100px" :src="require('./assets/logo.png')">
      </v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">INICIO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">NOSOTROS</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">SERVICIOS</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">EQUIPO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">CONTACTO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="outlined" color="teal">ACCESO CLIENTES</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon class="hidden-sm-and-up">mdi-menu</v-icon>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
      >
        <v-list>
          <v-divider></v-divider>
          <v-list-item>
            XD
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    watch: {
      group () {
        this.drawer = false
      },
    },
  }),
}
</script>
