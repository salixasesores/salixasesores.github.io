<template>

      <EmployeeView />
      <UsersRetrieveComponent />


  </template>
  
  <script>
  import EmployeeView from '../EmployeeView.vue';
  import UsersRetrieveComponent from '../../components/UsersRetrieveComponent.vue'

  export default {
    components: {
      UsersRetrieveComponent,
      EmployeeView
    },
    name: 'EmployeeUsers'
  }
  </script>