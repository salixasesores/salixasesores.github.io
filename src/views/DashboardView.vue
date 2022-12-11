<template>
          <!-- CURRENTLY WORKING BUT THIS CAN BE IMPROVED BY USING A SINGLE NAVIGATION DRAWER AND USE IT'S PROPERTIES DEPEND ON SCREEN SIZE -->

  <div class="dashboard">
    <div id="dashboard"></div>

          <!-- Phone nav drawer -->
        
        <v-navigation-drawer
        v-model="drawerMobile"
        temporary
        :permanent="drawer"
        :rail="drawer"
        
        >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
        </v-list-item>
          <v-list v-for="item in barItems" :key="item.title">
            <v-list-item :title="item.title" :value="item.value" :prepend-icon="item.icon" v-on:click="scrollTo(item.scrollPoint)" :active="false"></v-list-item>
          </v-list>
          <v-list>
            <v-list-item title="Cerrar" value="0" prepend-icon="mdi-keyboard-return" @click.stop="(drawerMobile = !drawerMobile)"/>
          </v-list>
        </v-navigation-drawer>

    <!-- Desktop nav drawer -->
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="(rail = false)"
        class="hidden-sm-and-down"
        >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
        <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
          <v-list v-for="item in barItems" :key="item.title">
            <v-list-item :title="item.title" :value="item.value" :prepend-icon="item.icon" v-on:click="scrollTo(item.scrollPoint)" :active="false"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar 
          height="120px"
          color="#f6fcf5"
          hide-on-scroll
          scroll-target="#scrolling-techniques-4"
        >
        <v-btn class="hidden-md-and-up" icon @click.stop="(drawerMobile = !drawerMobile)">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          Has accedido como {{ user }}
            <v-avatar style="margin: 10px" >
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-avatar>
        </v-app-bar>
<br>
<br>
<br>

      </div>
  </template>
  
  <script>
  export default {
    name: 'BarComponent',
    data: () => ({
      user: "user",
      drawerMobile: false,
      rail: true,
    }),
    computed: {
      drawer () {
        if (window.innerWidth < 600) {
          return false
        } else {
          return true
        }
      }
    }
  }
  
  </script>