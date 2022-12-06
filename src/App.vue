<template>
  <v-app>
    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
      >
        <v-list :items="barItems">
          <v-list-item title="Inicio" value="1" prepend-icon="mdi-home"/>
          <v-list-item title="Nosotros" value="2" v-on:click="scrollTo('nosotros')" prepend-icon="mdi-flower"/>
          <v-list-item title="Servicios" value="3" v-on:click="scrollTo('servicios')" prepend-icon="mdi-star"/>
          <v-list-item title="Equipo" value="4" v-on:click="scrollTo('equipo')" prepend-icon="mdi-account-multiple"/>
          <v-list-item title="Contacto" value="5" v-on:click="scrollTo('contacto')" prepend-icon="mdi-email"/>
          <v-list-item title="Acceso Clientes" value="6" prepend-icon="mdi-account"/>
          <v-list-item title="Cerrar" value="7" prepend-icon="mdi-keyboard-return" @click.stop="drawer = !drawer"/>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar 
        height="120px"
        color="#f6fcf5"
        hide-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
      <v-spacer></v-spacer>
      <v-toolbar-side-icon>
        <img style="height:100px" :src="require('./assets/logo.png')">
      </v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-and-down" variant="text" color="green">INICIO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green" v-on:click="scrollTo('nosotros')">NOSOTROS</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green" v-on:click="scrollTo('servicios')">SERVICIOS</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green" v-on:click="scrollTo('equipo')">EQUIPO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="text" color="green" v-on:click="scrollTo('contacto')">CONTACTO</v-btn>
        <v-btn class="hidden-sm-and-down" variant="outlined" color="teal">ACCESO CLIENTES</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon class="hidden-md-and-up">mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
      <br style="height:100px;">
      <br>

      <v-carousel show-arrows="hover" height="300px" cycle="true" style="margin-top: 60px">
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
          <div style="font-weight: bold; font-size:30px; margin-top: 0.5%; position: relative;">
            <nosotros id="nosotros" style="position:absolute; margin-top: -120px; left: 0"/>
            ¿Qué te ofrece Sálix?
          </div>
        </v-row>
        <br>
        <v-row class="justify-center">
          <v-card width="350px" height="350px" color="#82ffbf" style="margin: 5%;">
            <v-img :src="require('./assets/award.png')" cover>
              <div class="text-center" style="font-size:50px; color: black;">
                <v-icon>mdi-account-circle</v-icon>
              </div>
              <v-card-title class="text-center" style="font-size:30px; color: black;">
                Trato personalizado
              </v-card-title>
              <v-card-text class="text-center" style="color: black;">
                Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. 
                Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. 
              </v-card-text>
            </v-img>
          </v-card>
          <v-card width="350px" height="350px" color="#c3f7d4" style="margin: 5%;">
            <v-img :src="require('./assets/team.png')" cover>
              <div class="text-center" style="font-size:50px; color: black;">
                <v-icon>mdi-link-variant</v-icon>
              </div>
              <v-card-title class="text-center" style="font-size:30px; color: black;">
                Trato personalizado
              </v-card-title>
              <v-card-text class="text-center" style="color: black;">
                Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. 
                Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. 
              </v-card-text>
            </v-img>
          </v-card>
          <v-card width="350px" height="350px" color="#7ee08c" style="margin: 5%;">
            <v-img :src="require('./assets/petrib.png')" cover>
              <div class="text-center" style="font-size:50px; color: black;">
                <v-icon>mdi-beaker-outline</v-icon>
              </div>
              <v-card-title class="text-center" style="font-size:30px; color: black;">
                Trato personalizado
              </v-card-title>
              <v-card-text class="text-center" style="color: black;">
                Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. 
                Lo que más nos caracteriza en Sálix es la capacidad de ofrecer un servicio personalizado a cada cliente, dedicándole a cada uno de ellos neustro mejor esfuerzo. 
              </v-card-text>
            </v-img>
          </v-card>
        </v-row>
      </v-container>

      <v-container grid-list-xs>
        <v-row class="justify-center">
          <div style="font-weight: bold; font-size:30px; margin-top: 0.5%; position: relative;">
            <nosotros id="servicios" style="position:absolute; margin-top: -120px; left: 0"/>
            Nuestros servicios
          </div>
        </v-row>

        <v-row class="justify-center">
          <v-card width="350px" style="margin: 5%;" class="justify-center"> //color="#c3f7d4" 
            <v-icon style="font-size: 40px; margin: 15px; margin-bottom: 0px;">mdi-home</v-icon>
            <v-card-title class="text-center">
              Asesoría Higiénico Sanitaria
            </v-card-title>
            <v-card-text>
              Sálix ofrece asesoría higiénico sanitaria permanente por parte de su equipo, formado por graduados en biología, bioquímica, biomedicina y química. Realiza tareas de consultoría y formación en temas relacionados con: seguridad alimentaria, prevención de legionelosis,  control de aguas de consumo y piscinas.
            </v-card-text>
            <v-btn color="success">Saber más</v-btn>
              
          </v-card>
        </v-row>

        <br>
        <br>
        <br>
        <br>
      </v-container>

      <v-container grid-list-xs>
        <v-row class="justify-center">
          <div style="font-weight: bold; font-size:30px; margin-top: 0.5%; position: relative;">
            <nosotros id="equipo" style="position:absolute; margin-top: -120px; left: 0"/>
            El equipo de Sálix
          </div>
        </v-row>

        <br>
        <br>
        <br>
        <br>
      </v-container>


      <v-container grid-list-xs>
        <v-row class="justify-center">
          <div style="font-weight: bold; font-size:30px; margin-top: 0.5%; position: relative;">
            <nosotros id="contacto" style="position:absolute; margin-top: -120px; left: 0"/>
            Contacta con nosotros
          </div>
        </v-row>

        <br>
        <br>
        <br>
        <br>
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
    barItems: [ // Currently not being used as it is hardcoded in the bar item. Also needs the icons to be added
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
    ],
  }),
  methods: {
      scrollTo(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
        this.drawer = false
        console.log(this.drawer)
      }
    },
}
</script>
