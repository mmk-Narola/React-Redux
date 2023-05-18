import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "https://641dd63d945125fff3d75742.mockapi.io",
});

export default axiosBaseURL;

// https://641dd63d945125fff3d75742.mockapi.io/crud
