<template>
  <v-app>
    <v-main>
      <v-toolbar 
        height="120px"
        color="#f6fcf5"
      >
      <v-spacer></v-spacer>
      <v-toolbar-side-icon>
        <img style="height:100px" :src="require('./assets/logo.png')">
      </v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">INICIO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">NOSOTROS</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">SERVICIOS</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">EQUIPO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">CONTACTO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="outlined" color="teal">ACCESO CLIENTES</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon class="hidden-sm-and-up">mdi-menu</v-icon>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
      >
        <v-list :items="barItems">
          <v-list-item title="Inicio" value="1" prepend-icon="mdi-home"/>
          <v-list-item title="Nosotros" value="2" prepend-icon="mdi-flower"/>
          <v-list-item title="Servicios" value="3" prepend-icon="mdi-star"/>
          <v-list-item title="Equipo" value="4" prepend-icon="mdi-account-multiple"/>
          <v-list-item title="Contacto" value="5" prepend-icon="mdi-email"/>
          <v-list-item title="Acceso Clientes" value="6" prepend-icon="mdi-account"/>
          <v-list-item title="Cerrar" value="7" prepend-icon="mdi-keyboard-return" @click.stop="drawer = !drawer"/>
        </v-list>
      </v-navigation-drawer>

      <v-carousel show-arrows="hover" height="350px" cycle="true">
        <v-carousel-item
          src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20220131080401/ri/750/src/images/Article_Images/ImageForArticle_22064_16436342404173431.jpg"
          cover
          gradient="to top right, rgba(220,220,220,.7), rgba(230,255,230,.7)"
          transparency="0.5"
        >
        <div>
            <div style="margin-left: 5%; margin-right: 5%; margin-top: 10px; font-weight: bold; font-size: 30px;">
              Asesoría de seguridad alimentaria, control de aguas y formación
            </div>
            <div style="margin-left: 5%; margin-right: 5%; font-size: 20px">
              Servicio integral con toma de muestras, análisis, emisión de informes y asesoría
            </div>
          </div>
      </v-carousel-item>
      <v-carousel-item
          src="https://lmg-labmanager.s3.amazonaws.com/assets/articleNo/27442/aImg/50021/lab-quality-assurance-l.jpg"
          cover
          gradient="to top right, rgba(220,220,220,.7), rgba(230,255,230,.7)"
          transparency="0.5"
        >
        <div>
            <div style="margin-left: 5%; margin-right: 5%; margin-top: 10px; font-weight: bold; font-size: 30px;">
              Aquí va otro texto diferente pero más guay aún
            </div>
            <div style="margin-left: 5%; margin-right: 5% font-size: 20px">
              Con otro subtitulo también bien chulo
            </div>
          </div>
      </v-carousel-item>
      <v-carousel-item
          src="https://iq-laboratory.com/wp-content/uploads/2021/04/laboratory-design.jpg"
          cover
          gradient="to top right, rgba(220,220,220,.7), rgba(230,255,230,.7)"
          transparency="0.5"
        >
        <div>
            <div style="margin-left: 5%; margin-right: 5%; margin-top: 10px; font-weight: bold; font-size: 30px;">
              Aquí el último texto.
            </div>
            <div style="margin-left: 5%; margin-right: 5% font-size: 20px">
              Cada vez mejor
            </div>
          </div>
      </v-carousel-item>
      </v-carousel>
      <v-container grid-list-xs>
        <v-row class="justify-center">
          <div style="font-weight: bold; font-size:30px">
            ¿Qué te ofrece Sálix?
          </div>
        </v-row>
        <br>
        <br>
        <v-row class="justify-space-between">
          <v-spacer></v-spacer>

          <v-card width="350px" height="350px" color="green">
            <v-icon>mdi-home</v-icon>
            <v-card-title>
              Titulo
            </v-card-title>
            <v-card-subtitle>
              Subtitle
            </v-card-subtitle>
          </v-card>
          <v-card width="350px" height="350px" color="green">
            <v-icon>mdi-home</v-icon>
            <v-card-title>
              Titulo
            </v-card-title>
            <v-card-subtitle>
              Subtitle
            </v-card-subtitle>
          </v-card>
          <v-card width="350px" height="350px" color="green">
            <v-icon>mdi-home</v-icon>
            <v-card-title>
              Titulo
            </v-card-title>
            <v-card-subtitle>
              Subtitle
            </v-card-subtitle>
          </v-card>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    watch: {
      group () {
        this.drawer = false
      },
    },
    barItems: [ // Currently not being used as it is hardcoded in the bar item
      {
        title: "Inicio",
        value: 1
      },
      {
        title: "Nosotros",
        value: 2
      },
      {
        title: "Servicios",
        value: 3
      },
      {
        title: "Equipo",
        value: 4
      },
      {
        title: "Contacto",
        value: 5
      },
      {
        title: "Acceso Clientes",
        value: 6
      }
    ]
  }),
}
</script>
