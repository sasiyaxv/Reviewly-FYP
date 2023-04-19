import axios from "axios";
import { BASE_URL, PYTHON_ANYWHERE_URL } from "./constants";

export const convertToSinhala = async (sentence) => {
  const response = await axios.post(PYTHON_ANYWHERE_URL + "toSinhala", {
    string: sentence,
  });
  return response.data;
};

export const isEnglish = async (sentence) => {
  const response = await axios.post(PYTHON_ANYWHERE_URL + "isEnglish", {
    string: sentence,
  });
  return response.data;
};

export const isSinhala = async (sentence) => {
  const response = await axios.post(PYTHON_ANYWHERE_URL + "isSinhala", {
    string: sentence,
  });
  return response.data;
};

export const textBlob = async (sentence) => {
  const response = await axios.post(
    PYTHON_ANYWHERE_URL + "getPredictionTextBlob",
    {
      string: sentence,
    }
  );
  return response.data;
};

export const bertAnalyze = async (sentence) => {
  const response = await axios.post(BASE_URL + "bertPrediction", {
    string: sentence,
  });
  console.log(response);
  return response.data;
};

export const translateToEnglish = async (sentence) => {
  const response = await axios.post(PYTHON_ANYWHERE_URL + "toEnglish", {
    string: sentence,
  });
  return response.data;
};

export const dataPreprocess = async (sentence) => {
  const response = await axios.post(PYTHON_ANYWHERE_URL + "cleanText", {
    string: sentence,
  });
  return response.data;
};

export const contactDeveloper = async ({ email, heading, message }) => {
  const response = await axios.post(BASE_URL + "contactUs", {
    email: email,
    header: heading,
    message: message,
  });
  return response.data;
};
