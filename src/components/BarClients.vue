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
            <v-list-item title="Acceso Clientes" value="6" prepend-icon="mdi-account"/>
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
          <v-btn class="barBtn hidden-sm-and-down" color="green" to="/">INICIO</v-btn>
          <v-btn class="barBtn hidden-sm-and-down" variant="outlined" color="teal" to="/login">ACCESO CLIENTES</v-btn>
          <v-btn class="barBtn hidden-sm-and-down" variant="outlined" color="blue" to="/signin">REGISTRO</v-btn>
          <v-btn class="barBtn hidden-sm-and-down" variant="outlined" color="gray" to="/dashboard">DASHBOARD</v-btn>
          <v-spacer></v-spacer>
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
    }),
    methods: {
        scrollTo(id) {
          document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
          this.drawer = false
        }
      },
  }
  
  </script>

<style>
  .barBtn {
    margin: 5px;
  }
</style>