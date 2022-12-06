<template>
      <v-carousel show-arrows="hover" height="300px" cycle="true" style="margin-top: 60px">
        <v-carousel-item
          v-for= "item in items" :key="item.id"
          :src="item.image"
          cover
          gradient="to top right, rgba(220,220,220,.7), rgba(230,255,230,.7)"
          transparency="0.5"
        >
          <div>
            <div style="margin-left: 5%; margin-right: 5%; margin-top: 10px; font-weight: bold; font-size: 30px;">
              {{ item.title }}
            </div>
            <div style="margin-left: 5%; margin-right: 5%; font-size: 20px">
              {{ item.text }}
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>

</template>

<script>
export default {
  name: 'CarousselComponent',
  data: () => ({
    items: {
      asesoramiento: {
        id: "asesoramiento",
        title: "Asesoría de seguridad alimentaria, control de aguas y formación",
        text: "Servicio integral con toma de muestras, análisis, emisión de informes y asesoría",
        image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20220131080401/ri/750/src/images/Article_Images/ImageForArticle_22064_16436342404173431.jpg",
      },
      compromiso: {
        id: "compromiso",
        title: "Aquí va otro texto diferente pero más guay aún",
        text: "Con otro subtitulo también bien chulo",
        image: "https://lmg-labmanager.s3.amazonaws.com/assets/articleNo/27442/aImg/50021/lab-quality-assurance-l.jpg",
      },
      valores: {
        id: "valores",
        title: "Aquí el último texto.",
        text: "Cada vez mejor",
        image: "https://iq-laboratory.com/wp-content/uploads/2021/04/laboratory-design.jpg",
      },
    },
  }),
}

</script>