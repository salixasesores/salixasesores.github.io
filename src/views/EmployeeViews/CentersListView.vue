<template>

      <EmployeeView />
      <CenterListComponentVue />


  </template>
  
<script>
  import CenterListComponentVue from '@/components/CenterListComponent.vue';
  import EmployeeView from '../EmployeeView.vue';

  export default {
    components: {
      CenterListComponentVue,
      EmployeeView
    },
    name: 'CenterListView'
  }
</script>