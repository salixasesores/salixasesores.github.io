<template>
  <v-footer
  style="background-color: #ABEBA1;"
  >
    <v-card
      flat
      tile
      class="text-center"
      color="#ABEBA1"
    >
      <v-card-title>
        Sálix - Asesores de confianza
      <v-divider></v-divider>
      </v-card-title>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-card-text>
        Contactanos en llamando o por whatsapp al 600 600 600 o mandando un email a salixasesores@gmail.com 
      </v-card-text>

      <img style="height:100px" :src="require('../assets/logo.png')">
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Sálix</strong>
      </v-card-text>

    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'FooterComponent',
    data: () => ({
    }),
  }
</script>