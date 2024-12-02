import axios from "axios";

const connect = axios.create({
  baseURL: "https://kreasitech-backend-production.up.railway.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default connect;
