<template>

      <EmployeeView />
      <ClientsListComponentVue />


  </template>
  
  <script>
  import ClientsListComponentVue from '@/components/ClientsListComponent.vue';
  import EmployeeView from '../EmployeeView.vue';

  export default {
    components: {
      ClientsListComponentVue,
      EmployeeView
    },
    name: 'EmployeeUsers'
  }
  </script>