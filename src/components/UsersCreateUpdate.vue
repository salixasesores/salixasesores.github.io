<template>
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
  <v-card class="mx-auto" width="350">
  <v-form v-model="valid" @submit.prevent="submitForm">
    <v-container>
      <v-row>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Nombre"
            required
          ></v-text-field>
      
      </v-row>
      <v-row>
        <v-text-field
        v-model="lastName"
        :rules="nameRules"
        :counter="10"
        label="Apellido"
        required
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
        v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="password"
          label="Nueva Contraseña"
          type="password"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          v-model="passwordConfirmation"
          label="Repetir contraseña"
          type="password"
        ></v-text-field>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green" type="submit" v-on:click="submitForm()">Enviar</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-form>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersComponent',
  data: () => ({
    name: null, 
    lastName: null,
    email: null, 
    errors: [],
    correctData: false
  }),
  beforeCreate(){
    let baseURL = '/users/users_endpoint/'
    let id = this.$route.params.id
    let url = baseURL + id
    axios
      .get(url, {
        headers: {
          'Authorization': 'Token ' + localStorage["token"]
        }
      })
      .then(response => {
          const data = response;
          let user = data["data"]
          this.id = user.id
          this.name = user.name
          this.lastName = user.last_name
          this.email = user.email
        })
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
}

</script>

<style>
.client-card {
  margin: 10px;
}
</style>
