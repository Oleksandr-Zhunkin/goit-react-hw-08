import axios from "axios";

export const contactsApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});
export const setAuthToken = (token) => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  contactsApi.defaults.headers.common.Authorization = "";
};
