<template>

      <EmployeeView />
      <ClientsRetrieveComponentVue />


  </template>
  
  <script>
  import EmployeeView from '../EmployeeView.vue';
  import ClientsRetrieveComponentVue from '@/components/ClientsRetrieveComponent.vue';
  export default {
    components: {
      ClientsRetrieveComponentVue,
      EmployeeView
    },
    name: 'EmployeeUsers'
  }
  </script>