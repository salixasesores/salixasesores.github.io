<template>

      <EmployeeView />
      <UsersCreateUpdate />


  </template>
  
  <script>
  import EmployeeView from '../EmployeeView.vue';
  import UsersCreateUpdate from '@/components/UsersCreateUpdate.vue';

  export default {
    components: {
      UsersCreateUpdate,
      EmployeeView
    },
    name: 'EmployeeUsers'
  }
  </script>