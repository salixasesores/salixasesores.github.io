<template>

  <div class="dashboard">
    <div id="dashboard"></div>        
        <v-navigation-drawer

        v-model="drawerMobile"
        temporary
        :permanent="drawer"
        @click="(rail = false)"
        :rail="rail & drawer"
        
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
              class="hidden-sm-and-down"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
        <v-list-item title="Menú Principal" value="menu" prepend-icon="mdi-home"></v-list-item>
          <v-list v-for="item in clientItems" :key="item.title">
            <v-list-item :title="item.title" :value="item.value" :prepend-icon="item.icon" v-on:click="scrollTo(item.scrollPoint)" :active="false"></v-list-item>
          </v-list>
          <v-list>
            <v-list-item title="Cerrar" value="0" prepend-icon="mdi-keyboard-return" @click.stop="(drawerMobile = !drawerMobile)" class="hidden-md-and-up"/>
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
      drawerMobile: null,
      rail: true,
      clientItems: {
        overview: {
          title: "Menú Principal",
          icon: "mdi-home",
        },
        centers: {
          title: "Mis centros",
          icon: "mdi-home",
        },
        clients: {
          title: "Mis clientes",
          icon: "mdi-home",
        },
        contacts: {
          title: "Mis contactos",
          icon: "mdi-home",
        },
        data: {
          title: "Mis datos",
          icon: "mdi-home",
        },
        emails: {
          title: "Emails",
          icon: "mdi-home",
        },
        paidBills: {
          title: "Facturas pagadas",
          icon: "mdi-home",
        },
        pendingBills: {
          title: "Facturas pendientes",
          icon: "mdi-home",
        },
        phones: {
          title: "Teléfonos",
          icon: "mdi-home",
        },
        samplesInProcess: {
          title: "Muestras en proceso",
          icon: "mdi-home",
        },
        samplesFinished: {
          title: "Muestras procesadas",
          icon: "mdi-home",
        },      
      }
    }),
    computed: {
      drawer () {
        if (window.innerWidth < 600) {
          return false
        } else {
          return true
        }
      }
    },
    mounted() {
    this.drawerMobile = this.drawer
  }
  }
  
  </script>