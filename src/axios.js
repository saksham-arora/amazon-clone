import axios from "axios";

const obj = axios.create({
  baseURL: "http://localhost:5001/clone-28b1f/us-central1/api",
  //"http://localhost:5001/clone-28b1f/us-central1/api",

});

export default obj;
