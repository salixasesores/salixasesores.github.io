<template>

      <EmployeeView />
      <ContactListComponent />


  </template>
  
<script>
import EmployeeView from '../EmployeeView.vue';
import ContactListComponent from '@/components/ContactListComponent.vue';

export default {
  components: {
      EmployeeView,
      ContactListComponent
    },
    name: 'CenterListView'
  }
</script>