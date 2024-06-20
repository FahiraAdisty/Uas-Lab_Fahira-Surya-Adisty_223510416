<template>
  <div class="background-image">
    <h4 class="custom-font"><center>Pencarian Cuaca</center></h4>
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from '../components/WeatherWidget.vue';

export default {
  name: 'Home',
  components: {
    WeatherWidget,
  },
};
</script>

<style>
.background-image {
  background-image: url('/src/components/awan.jpeg'); 
  background-size: cover; 
  background-position: center; 
  height: 100vh;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
}

.custom-font {
  font-family: 'Arial', sans-serif; 
  font-size: 24px; 
  font-weight: bold; 
  color: #006aff; 
  background-color: white; 
  padding: 10px;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}
</style>
