import axios from "axios";
import Config from "react-native-config";

export const API_URL = `${Config.API_URL}?apikey=${Config.API_KEY}`;

const ApiClient = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

ApiClient.interceptors.request.use((config) => {
  if (__DEV__) {
    console.log("Requesting To: ", config.url);
  }
  return config;
});

ApiClient.interceptors.response.use((response) => {
  if (__DEV__) {
    console.log("Response: ", response);
  }
  return response;
});

export default ApiClient;
