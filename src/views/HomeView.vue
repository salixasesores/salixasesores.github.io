<template>
  <div class="home">
    <div id="inicio"></div>
      
      <HomeBar />

      <CarousselComponent />
      <CookiesComponent />
      <v-container grid-list-xs>
        <v-row class="justify-center">
          <div style="font-weight: bold; font-size:30px; margin-top: 0.5%; position: relative;">
            <div id="nosotros" style="position:absolute; margin-top: -120px; left: 0"></div>
            ¿Qué te ofrece Sálix?
          </div>
          <v-divider color="teal"></v-divider>
        </v-row>
        <UsComponent />
      </v-container>

      <v-container grid-list-xs>
        <v-row class="justify-center">
          <div style="font-weight: bold; font-size:30px; margin-top: 0.5%; position: relative;">
            <div id="servicios" style="position:absolute; margin-top: -120px; left: 0"></div>
            Nuestros servicios
          </div>
          <v-divider color="teal"></v-divider>
        </v-row>
        <ServicesComponent />
      </v-container>

      <v-container grid-list-xs>
        <v-row class="justify-center">
          <div style="font-weight: bold; font-size:30px; margin-top: 0.5%; position: relative;">
            <div id="equipo" style="position:absolute; margin-top: -120px; left: 0"></div>
            El equipo de Sálix
          </div>
          <v-divider color="teal"></v-divider>
        </v-row>
        <TeamComponent />
      </v-container>

      <v-container grid-list-xs>
        <v-row class="justify-center">
          <div style="font-weight: bold; font-size:30px; margin-top: 0.5%; position: relative;">
            <div id="contacto" style="position:absolute; margin-top: -120px; left: 0"></div>
            Contacta con nosotros
          </div>
          <v-divider color="teal"></v-divider>
        </v-row>
        <br>
        <ContactComponent />
      </v-container>
    
      <br>
      <br>
      <br>
      <br>
      <FooterComponent />
  </div>
</template>

<script>
import HomeBar from '../components/HomeBar.vue'
import UsComponent from '../components/UsComponent.vue'
import ServicesComponent from '../components/ServicesComponent.vue'
import TeamComponent from '../components/TeamComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import CarousselComponent from '../components/CarousselComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import CookiesComponent from '../components/CookiesComponent.vue'

export default {
  components: {
    HomeBar,
    UsComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    CarousselComponent,
    FooterComponent,
    CookiesComponent
  },
}
</script>
