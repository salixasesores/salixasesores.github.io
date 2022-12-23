<template>

  <div class="test">
    <div id="test"></div>        
    <v-list>
      <v-list-item v-for="item in facts" :key="item">
      {{ item.fact }}
      </v-list-item>
    </v-list>
  </div>

</template>
  
<script>
  export default {
    name: 'TestComp',
    data() {
    return {
      facts: null
    };
  },
    methods: {
      printStuff() {
        console.log(this.facts)
      }
    },
    mounted() {
      fetch("https://catfact.ninja/facts")
        .then(async response => {
          const data = await response.json();
          
          this.facts = data["data"]
        })
    }
  }
</script>