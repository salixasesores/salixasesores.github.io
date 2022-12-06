<template>

<v-container grid-list-xs>
        <v-row class="justify-center">
            <v-card min-width="100px" min-height="350px" style="margin: 2%; margin-top: 5%" class="mx-auto" v-for="member in members" :key="member.id">
              <v-img :src="member.image" height="300" cover></v-img>
              <v-card-title> {{ member.name }} </v-card-title>
              <v-card-subtitle> Responsable de {{ member.responsibility }} </v-card-subtitle>
              <v-card-text>
                <div style="font-weight: 500; font-size: 15px">
                  Formación: 
                </div>
                  <ul style="margin: 5%;">
                    <li v-for="training in member.trainings" :key="training"> {{ training }} </li>
                  </ul>
                <div style="font-weight: 500; font-size: 15px">
                  Experiencia: 
                </div>
                <ul style="margin: 5%;">
                    <li v-for="experience in member.experiences" :key="experience"> {{ experience }} </li>
                </ul>
                <div style="font-weight: 500; font-size: 15px">
                  Teléfono de contacto: 
                </div>
                {{ member.phone }}
                <br>
                <br>
                <div style="font-weight: 500; font-size: 15px">
                  Email de contacto:
                </div>
                {{ member.email }} 
              </v-card-text>
            </v-card>
        </v-row>
      </v-container>
</template>

<script>

export default {
  name: 'TeamComponent',
  data: () => ({
    members: {
      worker1: {
        id: "uno",
        image: "https://www.genincode.com/wp-content/uploads/2021/10/gettyimages-1027139762.jpg",
        name: "Trabajadora Nombre Inventado",
        responsibility: "cosas inventadas y jájas",
        trainings: {
          1: "Graduada en Invents",
          2: "Master en comedia",
          3: "Doctorando en XD"
        },
        experiences: {
          1: "Trabajó muchos años haciendo cosas",
          2: "Seguidamente hizo muchas otras",
          3: "Por último terminó haciendo aún más cosas"
        },
        email: "salixasesor@salix.com",
        phone: "600 600 600",
      },
      worker2: {
        id: "uno",
        image: "https://www.genincode.com/wp-content/uploads/2021/10/gettyimages-1027139762.jpg",
        name: "Trabajadora Nombre Inventado",
        responsibility: "cosas inventadas y jájas",
        trainings: {
          1: "Graduada en Invents",
          2: "Master en comedia",
          3: "Doctorando en XD"
        },
        experiences: {
          1: "Trabajó muchos años haciendo cosas",
          2: "Seguidamente hizo muchas otras",
          3: "Por último terminó haciendo aún más cosas"
        },
        email: "salixasesor@salix.com",
        phone: "600 600 600",
      },
      worker3: {
        id: "uno",
        image: "https://www.genincode.com/wp-content/uploads/2021/10/gettyimages-1027139762.jpg",
        name: "Trabajadora Nombre Inventado",
        responsibility: "cosas inventadas y jájas",
        trainings: {
          1: "Graduada en Invents",
          2: "Master en comedia",
          3: "Doctorando en XD"
        },
        experiences: {
          1: "Trabajó muchos años haciendo cosas",
          2: "Seguidamente hizo muchas otras",
          3: "Por último terminó haciendo aún más cosas"
        },
        email: "salixasesor@salix.com",
        phone: "600 600 600",
      },
      worker4: {
        id: "uno",
        image: "https://www.genincode.com/wp-content/uploads/2021/10/gettyimages-1027139762.jpg",
        name: "Trabajadora Nombre Inventado",
        responsibility: "cosas inventadas y jájas",
        trainings: {
          1: "Graduada en Invents",
          2: "Master en comedia",
          3: "Doctorando en XD"
        },
        experiences: {
          1: "Trabajó muchos años haciendo cosas",
          2: "Seguidamente hizo muchas otras",
          3: "Por último terminó haciendo aún más cosas"
        },
        email: "salixasesor@salix.com",
        phone: "600 600 600",
      },
      worker5: {
        id: "uno",
        image: "https://www.genincode.com/wp-content/uploads/2021/10/gettyimages-1027139762.jpg",
        name: "Trabajadora Nombre Inventado",
        responsibility: "cosas inventadas y jájas",
        trainings: {
          1: "Graduada en Invents",
          2: "Master en comedia",
          3: "Doctorando en XD"
        },
        experiences: {
          1: "Trabajó muchos años haciendo cosas",
          2: "Seguidamente hizo muchas otras",
          3: "Por último terminó haciendo aún más cosas"
        },
        email: "salixasesor@salix.com",
        phone: "600 600 600",
      },
    },
  }),
}
</script>