<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="firstName">Ad:</label>
      <input id="firstName" v-model="form.firstName" required />
    </div>
    <div>
      <label for="lastName">Soyad:</label>
      <input id="lastName" v-model="form.lastName" required />
    </div>
    <div>
      <label for="email">E-posta:</label>
      <input id="email" type="email" v-model="form.email" required />
    </div>
    <div>
      <label for="dob">Doğum Tarihi:</label>
      <input id="dob" type="date" v-model="form.dob" required />
    </div>
    <button type="submit">Gönder</button>
    <div v-if="success" class="success-msg">Form başarıyla gönderildi!</div>
  </form>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        dob: ''
      },
      success: false
    };
  },
  methods: {
    handleSubmit() {
      this.success = true;
    }
  }
};
</script>

<style scoped>
div {
  margin-bottom: 1em;
}
label {
  display: inline-block;
  width: 100px;
}
input {
  padding: 0.5em;
}
button {
  padding: 0.5em 1em;
}
.success-msg {
  color: green;
  margin-top: 1em;
  font-weight: bold;
}
</style> 