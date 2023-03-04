<template>

  <EmployeeView />
  <CenterRetrieveComponentVue />


</template>

<script>
import EmployeeView from '../EmployeeView.vue';
import CenterRetrieveComponentVue from '@/components/CenterRetrieveComponent.vue';
export default {
components: {
  CenterRetrieveComponentVue,
  EmployeeView
},
name: 'CenterRetrieveView'
}
</script>