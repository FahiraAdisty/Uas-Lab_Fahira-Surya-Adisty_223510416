<template>
    <div>
      <q-card>
        <q-card-section>
          <q-input
            outlined
            v-model="location"
            label="Masukkan Lokasi..."
            @keyup.enter="fetchWeather"
          />
          <q-btn label="Get Weather" @click="fetchWeather" class="q-mt-md" />
        </q-card-section>
  
        <q-card-section v-if="weatherFetched">
          <div class="text-h6">{{ city }}</div>
          <div class="text-subtitle2">Temperature: {{ temperature }}°C</div>
          <div class="text-subtitle2">Condition: {{ condition }}</div>
        </q-card-section>
  
        <q-card-section v-if="error">
          <div class="text-h6">Error fetching weather</div>
          <div>{{ errorMessage }}</div>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WeatherWidget',
    data() {
      return {
        location: '',
        city: '',
        temperature: null,
        condition: '',
        weatherFetched: false,
        error: false,
        errorMessage: '',
      };
    },
    methods: {
      async fetchWeather() {
        try {
          const apiKey = '94bf6d59f86ae95e8071e78240546056';
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${apiKey}`);
          const data = await response.json();
  
          if (response.ok) {
            this.city = data.name;
            this.temperature = data.main.temp;
            this.condition = data.weather[0].description;
            this.weatherFetched = true;
            this.error = false;
          } else {
            this.error = true;
            this.errorMessage = data.message;
            this.weatherFetched = false;
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
          this.error = true;
          this.errorMessage = 'Failed to fetch weather data';
          this.weatherFetched = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .weather-widget {
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--q-background);
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  }
  
  .weather-card {
    background: #e8f5e9;
  }
  
  .q-card-section {
    padding: 20px;
  }
  
  .weather-info {
    background: #a5d6a7;
    border-radius: 8px;
  }
  
  .q-icon {
    font-size: 64px;
    margin-bottom: 10px;
  }
  
  .text-h4 {
    font-size: 1.5em;
    margin-bottom: 5px;
  }
  
  .text-h6 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  
  .full-width {
    width: 100%;
  }
  </style>