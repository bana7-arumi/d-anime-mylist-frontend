import axios from "axios";

const myAxios = axios.create({
  baseURL: "http://api.d-anime-mylist.com"
});

export default myAxios;
