<template>
<v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
      >
        <v-list v-for="item in barItems" :key="item.title">
          <v-list-item :title="item.title" :value="item.value" :prepend-icon="item.icon" v-on:click="scrollTo(item.scrollPoint)" :active="false"></v-list-item>
        </v-list>
        <v-list>
          <v-list-item title="Acceso Clientes" value="6" prepend-icon="mdi-account-check" to="/login" />
          <v-list-item title="Acceso Empleados" value="6" prepend-icon="mdi-account-key" to="/login-employees" />
          <v-list-item title="Dashboard" value="7" prepend-icon="mdi-laptop" to="/dashboard" />
          <v-list-item title="Cerrar" value="7" prepend-icon="mdi-keyboard-return" @click.stop="drawer = !drawer"/>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar 
        height="120px"
        color="#f6fcf5"
        hide-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
      <v-spacer></v-spacer>
      <v-toolbar-side-icon>
        <img style="height:100px" :src="require('../assets/logo.png')">
      </v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down" color="green" v-for="item in barItems" :key="item.title" v-on:click="scrollTo(item.scrollPoint)">{{ item.title }}</v-btn>
        <v-btn class="hidden-sm-and-down" variant="outlined" color="teal" to="/login">ACCESO CLIENTES</v-btn>
        <v-btn class="barBtn hidden-sm-and-down" variant="outlined" color="gray" to="/dashboard" style="margin-left:20px;">DASHBOARD</v-btn>
        <v-btn class="barBtn hidden-sm-and-down" variant="outlined" color="green" to="/login-employees">ACCESO EMPLEADOS</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon class="hidden-md-and-up">mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
      <br style="height:100px;">
      <br>

</template>

<script>
export default {
  name: 'BarComponent',
  data: () => ({
    drawer: false,
    group: null,
    watch: {
      group () {
        this.drawer = false
      },
    },
  barItems: [
      {
        value: 1,
        title: "Inicio",
        icon: "mdi-home",
        scrollPoint: "inicio"
      },
      {
        value: 2,
        title: "Nosotros",
        icon: "mdi-flower",
        scrollPoint: "nosotros"
      },
      {
        value: 3,
        title: "Servicios",
        icon: "mdi-star",
        scrollPoint: "servicios"
      },
      {
        value: 4,
        title: "Equipo",
        icon: "mdi-account-multiple",
        scrollPoint: "equipo"
      },
      {
        value: 5,
        title: "Contacto",
        icon: "mdi-email",
        scrollPoint: "contacto"
      },
    ],
  }),
  methods: {
      scrollTo(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
        this.drawer = false
      }
    },
}

</script>