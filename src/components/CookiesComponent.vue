<template>
      <v-alert
      density="comfortable"
      color="success"
      variant="tonal"
      closable
      title="Aviso de cookies"
    >
    Usamos cookies para poder ofrecerte una mejor experiencia. Solo usamos tu información para mantener tu sesión iniciada. En serio, ni siquiera sabemos como usarlas para vender tus datos.
    <a href="https://www.cookiebot.com/es/ley-de-cookies/#:~:text=%C2%BFQu%C3%A9%20significa%20la%20ley%20de,prop%C3%B3sitos%20y%20de%20qu%C3%A9%20manera." target="_blank">Haz click aquí</a> para saber más sobre las cookies. 
    </v-alert>
</template>

<script>
  export default {
    name: 'CookiesComponent',
}
</script>