<template>

<v-container grid-list-xs>
        <v-row class="justify-center">
          
            <v-card width="350px" min-height="350px" style="margin: 2%; margin-top: 5%" class="justify-center d-flex flex-column" v-for="card in serviceCards" :key="card.id" >
              <v-btn
                class="ma-2"
                :icon="card.icon"
                color="teal"
                @click="(card.show = !card.show)"
              />

              <v-card-title class="text-center">{{ card.title }}</v-card-title>
              
              <v-card-text> {{ card.text }} </v-card-text>

              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green" @click="(card.show = !card.show)">Saber más</v-btn>
              <v-spacer></v-spacer>
              </v-card-actions>

            <v-expand-transition>
                  <div v-show="card.show">
                    <v-list color="teal">
                      <v-list-item 
                        v-for="subCard in card.subCards"
                        :key="subCard.value"
                        :value="subCard.value"
                        :title="subCard.title"
                        @click="(subCard.showSubcard = !subCard.showSubcard)"
                      >
                        <v-expand-transition>
                          <div v-show="subCard.showSubcard">
                            <v-card-text>
                              {{ subCard.text }}
                            </v-card-text>
                          </div>
                        </v-expand-transition>
                      </v-list-item>
                    </v-list>          
                </div>
              </v-expand-transition>
            </v-card>
        </v-row>
      </v-container>

</template>

<script>

export default {
  name: 'ServicesComponent',
  data: () => ({
    serviceCards: {
      asesoria: {
        id: "asesoria",
        icon: "mdi-handshake-outline",
        title: "Asesoría Higiénico Sanitaria",
        text: "Sálix ofrece asesoría higiénico sanitaria permanente por parte de su equipo, formado por graduados en biología, bioquímica, biomedicina y química, especializados en microbiología, tecnología de los alimentos y calidad del agua. Realiza tareas de consultoría y formación en temas relacionados con: seguridad alimentaria, prevención de legionelosis, control de aguas de consumo y piscinas.",
        show: false,
        subCards: {
          spa: {
            value: "spa",
            title: "Control de Piscinas y Spas",
            text:  "Para un correcto control de piscinas y spas, en el RD 742/2013, referente a los criterios sanitarios de las piscinas, queda reflejado que se debe diseñar un programa de autocontrol para cada piscina. En Sálix, diseñamos estos programas, personalizados a cada establecimiento, así como todas las actuaciones de seguimiento y verificación.",
            showSubcard: false,
          },
          aguas: {
            value: "agua",
            title: "Control de Aguas de Consumo Humano",
            text: "Según el RD 140/2003, es obligatorio el control del agua de consumo humano en comedores colectivos. Sálix diseña e implanta sistemas de control de aguas de consumo. ",
            showSubcard: false,
          },
          legionelosis: {
            value: "legionelosis",
            title: "Prevención de Legionelosis",
            text: "Todas aquellas instalaciones con un circuito hídrico, son susceptibles de ser reservorios de Legionella. Para la prevención de legionelosis, la legislación (RD 865/2003), obliga a realizar una evaluación de riesgos para saber si se trata de una instalación de bajo o alto riesgo, así como, a llevar un programa de autocontrol para la prevención de Legionella. Sálix asesora para la realización de estas actuaciones y realiza las verificaciones necesarias. ",
            showSubcard: false,
          },
          seguridadAlimentaria: {
            value: "seguridadAlimentaria",
            title: "Seguridad Alimentaria",
            text: "Sálix, Asesoría Higiénico-Sanitaria realiza el diseño e implantación de programas de autocontrol en seguridad alimentaria. Según indica la legislación (R (CE) 852/2004), todos losmanipulación operadores de empresas alimentarias, desde industrias alimenticias, hostelería, restauración, comedores colectivos en escuelas, residencias, etc, deben tener implantado un sistema de autocontrol en seguridad alimentaria, que se inicia instaurando unos prerrequisitos basados en el APPCC (Análisis de Peligros y Puntos Críticos de Control). Visita de las instalaciones. Durante las visitas, Sálix realiza una auditoría de las condiciones de los establecimientos y de los hábitos de manipulación. Gestión de alérgenos. Desde 2014, por el Reglamento Europeo R 1169/2011 y transcrito en el RD 126/2015, todas las empresas que sirven alimentos sin envasar, y por lo tanto sin etiquetado, deben tener un sistema de gestión de alérgenos para informar al cliente ante cualquier consulta sobre este tema. ",
            showSubcard: false,
          },
        }
      },
      laboratorio: {
        id: "laboratorio",
        icon: "mdi-flask-round-bottom",
        title: "Laboratorio de análisis",
        text: "Sálix, además de asesoría, cuenta con un laboratorio asociado para la realización de análisis microbiológicos de alimentos, análisis de aguas de consumo, de aguas de piscinas, superficies y cosméticos.",
        show: false,
        subCards: {
          ambiental: {
            value: "ambiental",
            title: "Análisis de contaminación de ambientes",
            text:  "Sálix cuenta con un laboratorio asociado para la realización de análisis de control de contaminación de ambientes.",
            showSubcard: false,
          },
          cosmeticos: {
            value: "cosmeticos",
            title: "Análisis de cosméticos",
            text: "Sálix cuenta con un laboratorio asociado para la realización de Análisis de cosméticos para su liberación al mercado",
            showSubcard: false,
          },
          analisisAlimentos: {
            value: "analisisAlimentos",
            title: "Análisis de alimentos",
            text: "Sálix cuenta con un laboratorio para la realización de análisis microbiológicos de alimentos que incluye el análisis para la verificación del APPCC, el análisis según la normativa vigente, análisis de indicadores para la evaluación de la manipulación de alimentos, control de contaminación cruzada de alérgenos alimentarios y análisis para determinar la vida útil de los alimentos.",
            showSubcard: false,
          },
          analisisAgua: {
            value: "analisisAgua",
            title: "Análisis de aguas",
            text: "Sálix cuenta con un laboratorio asociado para la realización de análisis fisicoquímico y microbiológico de aguas de consumo, de aguas de piscinas, de aguas de riego y aguas residuales.",
            showSubcard: false,
          },
          analisisSuperficies: {
            value: "analisisSuperficies",
            title: "Análisis de superficies",
            text: "Sálix cuenta con un laboratorio asociado para la realización de análisis de superficies para verificación del APPCC, control de L+D, control de contaminación cruzada de alérgenos y control de higiéne en la manipulación.",
            showSubcard: false,
          },
        }
      },
      formacion: {
        id: "formacion",
        icon: "mdi-book",
        title: "Formación",
        text: "Sálix, desde sus inicios, tiene una clara vocación formativa, convencidos de que la formación es la base fundamental del trabajo bien hecho. Ofrecemos cursos de formación sobre alimentación saludable, intolerancias y alergias alimentarias, manipulación higiénica de alimentos, mantenimiento de piscinas, formación para SSTT en prevención de Legionella, cursos personalizados para las distintas actividades de la industria, etc. Todos los cursos de formación que realizamos, tienen la posibilidad de ser bonificados.",
        show: false,
        subCards: {
          alimentacionSaludable: {
            value: "alimentacionSalusable",
            title: "Cursos sobre alimentación saludable",
            text:  "La alimentación saludable es un tema que preocupa cada vez más a la población. Hay muchos problemas relacionados con la salud como diabetes, hipertensión, obesidad. Es pues necesaria la formación de los agentes alimentarios en estos temas.",
            showSubcard: false,
          },
          intolerancias: {
            value: "intolerancias",
            title: "Cursos sobre intolerancias y alergias alimentarias",
            text: "Según el RD 126/2015, relativo a la información alimentaria de los alimentos que se presenten sin envasar para la venta al consumidor final y a las colectividades, es obligatoria la formación del personal sobre intolerancias y alergias alimentarias. Biovet ofrece cursos en distintos niveles formativos.",
            showSubcard: false,
          },
          continuada: {
            value: "continuada",
            title: "Formación continuada",
            text: "Es obligado en la industria alimentaria que el personal tenga una formación continuada en relación a la actividad que realiza. Por ello, Sálix ofrece formación para sstt en mantenimiento de piscinas, en prevención de legionella, cursos personalizados para las distintas actividades en la industria y formación e información permanente sobre temas de interés.",
            showSubcard: false,
          },
          manipulacion: {
            value: "manipulacion",
            title: "Cursos de manipulación higiénica de alimentos",
            text: "Sálix realiza cursos de manipulación higiénica de alimentos, emitiendo el certificado correspondiente, como justificante de formación. Se realiza en nuestras propias instalaciones o en los lugares de manipulación y personalizados en función del tipo de empresa.",
            showSubcard: false,
          },
        }
      },
      gestion: {
        id: "gestion",
        icon: "mdi-notebook-edit-outline",
        title: "Gestión",
        text: "Biovet Balear realiza todas aquellas tareas de gestión que requieran sus clientes relacionadas con su ámbito de trabajo y sus necesidades. Como trámites ante la administración o la Gestión de preparación y asistencia en visitas de inspección.",
        show: false,
        subCards: {
          tramites: {
            value: "tramites",
            title: "Trámites ante la administración",
            text:  "Sálix realiza todas aquellas gestiones que requieran sus clientes relacionadas con su ámbito de trabajo y sus necesidades como por ejemplo, trámites ante la administración como son el Alta de actividad, el Cambio de titular o domicilio, alta de piscinas en el SILOE y presentación de memorias técnicas entre otros.",
            showSubcard: false,
          },
          preparacion: {
            value: "preparacion",
            title: "Preparación y asistencia en visitas de inspección",
            text: "Preparación y asistencia en visitas de inspección de APPCC o prerrequsitos, incluyendo la revisión de documentación, auditoría de instalaciones y asistencia durante la inspección.",
            showSubcard: false,
          },
        }
      },
    },
  }),
}
</script>