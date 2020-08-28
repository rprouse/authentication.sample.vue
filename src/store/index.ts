import { createStore } from 'vuex'

import { RestClient } from '../shared/rest-client'
import { WeatherData } from '../shared/weather-data';

export interface WeatherState {
  weather: WeatherData[];
}

const client = new RestClient();

const state: WeatherState = {
  weather: [],
};

export default createStore({
  state,
  mutations: {
    setWeather(weatherState, weather: WeatherData[]) {
      weatherState.weather = weather;
    },
  },
  actions: {
    async getWeather(context) {
      if (state.weather.length > 0) {
        return state.weather;
      }
      const data = await client.getWeather();
      context.commit('setWeather', data);
    }
  },
  modules: {
  }
})
