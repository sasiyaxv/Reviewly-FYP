import axios from "axios";
import { BASE_URL } from "./constants";
//const axios = require('axios'); // legacy way

export const sayHello = () => {
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
};

export const convertToSinhala = (sentence) => {
  axios
    .post(BASE_URL + "toSinhala/" + sentence, {
      // str: sentence,
    })
    .then(function (response) {
      console.log("Server Response :" + response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export function translateToEnglish(sentence) {
  axios
    .post(BASE_URL + "toEnglish/" + sentence, {
      // str: sentence,
    })

    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function isSinhala(sentence) {
  axios
    .post(BASE_URL + "isSinhala", {
      str: sentence,
    })

    .then(function (response) {
      console.log("Response server : " + response);
      return response;
    })

    .catch(function (error) {
      console.log(error);
    });
}
