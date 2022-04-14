import axios from "axios";

const myAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASS_URL ?? "http://localhost:80",
});

export default myAxios;