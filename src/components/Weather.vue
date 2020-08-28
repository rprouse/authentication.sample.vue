<template>
  <div>
    <h2>Weather</h2>
    <ul>
      <li v-for="day in weather" :key="day.date">{{day.date}} {{day.temperatureC}} {{day.summary}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { WeatherData } from "@/shared/weather-data";

export default defineComponent({
  name: "Weather",
  setup() {
    return {};
  },
  data() {
    return {
      message: "",
    };
  },
  async created() {
    await this.loadData();
  },
  methods: {
    ...mapActions(["getWeather"]),
    async loadData() {
      this.message = "Loading Weather...";
      await this.getWeather();
      this.message = "";
    },
  },
  computed: {
    ...mapState(["weather"]),
  },
});
</script>

<style scoped>
</style>