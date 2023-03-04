<template>
  <div class="login">
    <BarClients />
  </div>
  <v-container>
   <v-row class="justify-center">
         <div v-for="error in errors" :key="error">
            <v-alert 
            type="error" 
            class="elevation-12 justify-center" 
            style="margin-top: 100px; margin-bottom: -80px;" 
            max-width="350px" 
            v-model="correctData"
            >
            {{ error }}
            </v-alert>
         </div>
      </v-row>  
    <v-row class="justify-center">
      <v-card class="elevation-12 justify-center" style="margin-top: 100px" width="350px">
         <v-toolbar color="success">
            <v-toolbar-title>Registro</v-toolbar-title>
         </v-toolbar>
         <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                  label="Nombre"
                  type="text"
                  v-model="name"
               ></v-text-field>
               <v-text-field
                  label="Apellido/s"
                  type="text"
                  v-model="last_name"
               ></v-text-field>
               <v-text-field
                  label="Email"
                  type="text"
                  v-model="username"
               ></v-text-field>
               <v-text-field
                  name="password"
                  label="Contraseña"
                  type="password"
                  v-model="password"
               ></v-text-field>
               <v-text-field
                  name="password2"
                  label="Confirmar Contraseña"
                  type="password"
                  v-model="passwordConfirmation"
               ></v-text-field>
               <div style="color: teal; margin-left: 10px;">
                  La contraseña debe contener al menos:
                  <ul style="margin-left: 30px">
                     <li>8 caracteres</li>
                     <li>Una mayúscula</li>
                     <li>Una minúscula</li>
                     <li>Una número</li>
                     <li>Un caracter especial</li>
                  </ul>
               </div>
            </v-form>
         </v-card-text>
         <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" variant="outlined" type="submit" v-on:click="submitForm()">Crear cuenta</v-btn>
            <v-spacer></v-spacer>
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
           name: '',
           last_name: '',
           username: '',
           password: '',
           email: '',
           passwordConfirmation: '',
           errors: [],
           correctData: false
       }
   },
   methods: {
      isAlpha(str) {
         return /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(str);
      },
      isEmail(email) {
         return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)
      },
      validPassword(password) {
         if (password.lenght < 8) {
            return false
         }
         if (!/[A-Z]/.test(password)) {
            return false
         }
         if (!/[a-z]/.test(password)) {
            return false
         }
         if (!/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
            return false
         }
         

         return true
      },
      validateInput() {
         this.errors = []
         if (!this.name || !this.isAlpha(this.name)) {
            this.errors.push("Debes introducir un nombre válido")
         }
         if (!this.last_name || !this.isAlpha(this.last_name)) {
            this.errors.push("Debes introducir un apellido válido")
         }
         if (!this.username || !this.isEmail(this.username)) {
            this.errors.push("Debes introducir un correo electrónico válido")
         }
         if (!this.password || !this.validPassword(this.password)) {
            this.errors.push("Debes introducir una contraseña válida")
         }
         if (this.password != this.passwordConfirmation){
            this.errors.push("Las contraseñas no coinciden. Por favor, escríbelas de nuevo.")
         }
         if (this.errors.length == 0) {
            return true        
         } else {
            this.correctData = true
         }
      },
      submitForm() {
         if (this.validateInput()) {
            const formData = {
               name: this.name,
             last_name: this.last_name,
             username: this.username,
             password: this.password,
             email: this.username
            }
            axios
            .post('/api/v1/users/', formData)
            .then(response => {
               this.$router.push('/dashboard/')
               console.log(response.status)
            })
         }
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