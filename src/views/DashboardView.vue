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
          :title="user"
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

      <v-list-item title="Menú Principal" value="menuPrincipal" prepend-icon="mdi-home"></v-list-item>

      <v-list>
          <v-list-group value="Management">
            <template v-slot:activator="{ props }">
              <v-list-item
              v-bind="props"
              title="Gestión"
              prepend-icon="mdi-cog-outline"
              ></v-list-item>
            </template>
            
            <v-list-item
            v-for="item in clientManagement"
            :key="item"
            :title="item.title"
            :prepend-icon="item.icon"
            :value="item.title"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="data">
            <template v-slot:activator="{ props }">
              <v-list-item
              v-bind="props"
              title="Mis Datos"
              prepend-icon="mdi-account-edit"
              ></v-list-item>
            </template>
            
            <v-list-item
            v-for="item in myData"
            :key="item"
            :title="item.title"
            :prepend-icon="item.icon"
            :value="item.title"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="billing">
            <template v-slot:activator="{ props }">
              <v-list-item
              v-bind="props"
              title="Facturas"
              prepend-icon="mdi-account-cash"
              ></v-list-item>
            </template>
            
            <v-list-item
            v-for="item in billing"
            :key="item"
            :title="item.title"
            :prepend-icon="item.icon"
            :value="item.title"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="samples">
            <template v-slot:activator="{ props }">
              <v-list-item
              v-bind="props"
              title="Análisis"
              prepend-icon="mdi-flask"
              ></v-list-item>
            </template>
            
            <v-list-item
            v-for="item in samples"
            :key="item"
            :title="item.title"
            :prepend-icon="item.icon"
            :value="item.title"
            ></v-list-item>
          </v-list-group>
        </v-list>
        <v-list-item
            title="Cerrar sesión"
            prepend-icon="mdi-exit-to-app"
            to="/logout"
          >

          </v-list-item>

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
  import axios from 'axios'
  export default {
    name: 'BarComponent',
    data: () => ({
      user: "user",
      drawerMobile: null,
      rail: true,
      clientManagement: {
        client: {
          title: "Clientes", 
          icon: "mdi-account-circle"
        },
        center: {
          title: "Centros", 
          icon: "mdi-account-plus"
        },
        enterprise: {
          title: "Empresas", 
          icon: "mdi-account-star"
        },
      },
      myData: {
        generalData: {
          title: "Mis datos",
          icon: "mdi-account-details"
        },
        contacts: {
          title: "Contactos",
          icon: "mdi-account-group"
        },
        emails: {
          title: "Emails",
          icon: "mdi-email-plus-outline"
        },
        phones: {
          title: "Teléfonos",
          icon: "mdi-cellphone"
        },
      },
      billing: {
        paidBills: {
          title: "Facturas pagadas",
          icon: "mdi-cash-check",
        },
        pendingBills: {
          title: "Facturas pendientes",
          icon: "mdi-cash-lock",
        },
      },
      samples: {
        samplesInProcess: {
          title: "Finalizadas",
          icon: "mdi-flask-empty",
        },
        samplesFinished: {
          title: "En proceso",
          icon: "mdi-flask-empty-outline",
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
  },
  beforeCreate() {
      if (!localStorage["token"]) {
        this.$router.push('/login/')
      }
      const self = this
      axios
      .get('/users/current_user/', {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        }
      })
      .then(async response => {
          let userData = response.data[0]
          this.user = [userData["name"], userData["last_name"]].join(" ")
        })
      .catch(function(error) {
               if (error) {
                  self.$router.push('/login/')
                  localStorage.setItem("token", '')
               }
            }
            )
    }
  }
  
  </script>