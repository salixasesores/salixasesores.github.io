<template>

  <EmployeeView />
  <EnterprisesRetrieveComponent />


</template>

<script>
import EmployeeView from '../EmployeeView.vue';
import EnterprisesRetrieveComponent from '../../components/EnterprisesRetrieveComponent.vue';

export default {
components: {
  EnterprisesRetrieveComponent,
  EmployeeView
},
name: 'CenterRetrieveView'
}
</script>