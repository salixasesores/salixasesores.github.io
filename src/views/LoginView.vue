<template>
  <div class="login">
    <BarClients />
  </div>
  <v-container>
      <v-row class="justify-center">
         <v-alert 
            id="loginAlert"
            type="error" 
            class="elevation-12 justify-center" 
            style="margin-top: 100px; margin-bottom: -80px" 
            max-width="350px" 
            v-model="correctData"
            >
               Los datos introducidos son incorrectos. Por favor, pruebe de nuevo.
            </v-alert>
      </v-row>  
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
                  v-model="email"
               ></v-text-field>
               <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Contraseña"
                  type="password"
                  v-model="password"
               ></v-text-field>
            </v-form>
         </v-card-text>
         <v-card-actions>
            <v-btn color="blue" to="/signin">Registro</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="teal" v-on:click="submitForm()" >Entrar</v-btn>
         </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import BarClients from '../components/BarClients.vue'
import axios from 'axios'

export default {
  components: {
    BarClients,
  },
  data() {
       return {
           email: '',
           password: '',
           correctData: false,
       }
   },
  methods: {
       submitForm() {
           const self = this
           const formData = {
              username: this.email,
              password: this.password
           }
           axios
           .post('/api/v1/token/login/', formData)
           .then(response => {
              this.$router.push('/dashboard/')
              const token = response.data.auth_token
              this.$store.commit('setToken', token)
              axios.defaults.headers.common['Authorization'] = "Token " + token
              localStorage.setItem("token", token)
            }
            )
           .catch(function(error) {
               if (error) {
                  self.correctData = true
               }
            }
            )
       }
   },
   beforeCreate() {
      if (localStorage['token']) {
         const self = this
      axios
      .get('/users/current_employee/', {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        }
      })
      .then(
         self.$router.push('/employees/')
        )
      .catch(function(error) {
               if (error) {
                  self.$router.push('/dashboard/')
               }
            }
            )
      }
   }
}
</script>