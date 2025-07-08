<template>
  <div id="app">
    <select v-model="$i18n.locale">
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
    </select>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
select {
  margin-bottom: 2em;
  padding: 0.5em;
}
</style>
