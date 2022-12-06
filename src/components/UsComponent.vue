<template>
      <v-container grid-list-xs>
        <v-row class="justify-center">
          <v-card width="350px" height="350px" :color="card.color" style="margin: 5%;" v-for="card in usCards" :key="card.id">
            <v-img :src="card.image" cover>
              <div class="text-center" style="font-size:50px; color: black;">
                <v-icon>{{ card.icon }}</v-icon>
              </div>
              <v-card-title class="text-center" style="font-size:30px; color: black;">
                {{ card.title }}
              </v-card-title>
              <v-card-text class="text-center" style="color: black;">
                {{ card.text }}
              </v-card-text>
            </v-img>
          </v-card>
        </v-row>
      </v-container>

</template>

<script>
export default {
  name: 'UsComponent',
  data: () => ({
    usCards: {
      trato: {
        id: "trato",
        color: "#82ffbf",
        icon: "mdi-account-circle",
        image: require('../assets/award.png'),
        title: "Trato personalizado",
        text: "Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo."
      },
      trato2: {
        id: "trato2",
        color: "#c3f7d4",
        icon: "mdi-link-variant",
        image: require('../assets/team.png'),
        title: "Trato personalizado",
        text: "Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo."
      },
      trato3: {
        id: "trato3",
        color: "#7ee08c",
        icon: "mdi-beaker-outline",
        image: require('../assets/petrib.png'),
        title: "Trato personalizado",
        text: "Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo."
      },
    },
  }),
}

</script>