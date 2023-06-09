import axios from "axios";
import { get, isEqual } from "lodash";
import config from "../../config";
import { AsyncStorage } from "react-native";
const request = axios.create({
  baseURL: config.API_ROOT,
  params: {},
});

request.interceptors.request.use(
  (config) => {
    const token = get(
      // JSON.parse(AsyncStorage.getItem("settings")),
      // "state.token",
      null
    );
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = error.response.status;
    if (isEqual(statusCode, 401)) {
      // AsyncStorage.multiRemove();
    }

    return Promise.reject(error);
  }
);

export { request };
