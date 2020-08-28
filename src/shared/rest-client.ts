import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { WeatherData } from './weather-data';

export class RestClient {
  private instance: AxiosInstance;

  constructor() {
    const baseURL = 'https://localhost:44386/';
    this.instance = axios.create({
      baseURL,
    });
  }

  public async getWeather(): Promise<WeatherData[]> {
    try
    {
      const response = await this.instance.get<WeatherData[]>('/weatherforecast');
      if(response.status === 200) {
        return response.data;
      }
      console.error("An unexpected server error occurred.", response.status, response.data);
    } catch(error) {
      console.error(error);
    }
    return [];
  }
}