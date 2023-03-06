import axios from "axios";
import { BASE_URL } from "./constants";
//const axios = require('axios'); // legacy way

export function sayHello() {
  axios
    .get(BASE_URL + "hello")
    .then(function (response) {
      // handle success
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
