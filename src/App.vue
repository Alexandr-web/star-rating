<template>
  <div id="app">
    <div class="container">
      <vListStars />
    </div>
  </div>
</template>

<script>
import vListStars from './components/vListStars';

export default {
  name: 'App',
  components: {
    vListStars
  }
}
</script>

<style>
  @import '../public/css/main.css';
</style>
