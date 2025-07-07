<template>
  <div class="home">
    <h1>Form Uygulaması</h1>
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from '../components/FormComponent.vue'

export default {
  name: 'HomeView',
  components: {
    FormComponent
  }
}
</script>
