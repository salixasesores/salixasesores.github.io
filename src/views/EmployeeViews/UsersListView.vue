<template>

      <EmployeeView />
      <UsersComponent />


  </template>
  
  <script>
  import EmployeeView from '../EmployeeView.vue';
  import UsersComponent from '../../components/UsersComponent.vue'

  export default {
    components: {
      UsersComponent,
      EmployeeView
    },
    name: 'EmployeeUsers'
  }
  </script>