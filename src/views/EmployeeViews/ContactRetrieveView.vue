<template>

      <EmployeeView />
      <ContactsRetrieveComponent />


  </template>
  
<script>
import EmployeeView from '../EmployeeView.vue';
import ContactsRetrieveComponent from '@/components/ContactsRetrieveComponent.vue';

export default {
  components: {
      EmployeeView,
      ContactsRetrieveComponent
    },
    name: 'CenterListView'
  }
</script>