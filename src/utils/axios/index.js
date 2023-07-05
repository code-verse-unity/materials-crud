import axiosModule from "axios";

const axios = axiosModule.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_ENTRY_POINT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export { axios };
