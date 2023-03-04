<template>

      <EmployeeView />
      <EnterprisesListComponent />


  </template>
  
<script>
  import EmployeeView from '../EmployeeView.vue';
  import EnterprisesListComponent from '@/components/EnterprisesListComponent.vue';

  export default {
    components: {
      EnterprisesListComponent,
      EmployeeView
    },
    name: 'CenterListView'
  }
</script>