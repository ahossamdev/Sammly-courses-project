import axios from "axios";
const Token = localStorage.getItem("token");
// user
export const userApi = axios.create({
  baseURL: "http://localhost:8080/users/",
});

// trainer :

export const apiTrainer = axios.create({
  baseURL: "http://localhost:8080/trainers/",
});
export const getToken = () => {
  return { token: Token };
};

// contact :

export const contactApi = axios.create({
  baseURL: "http://localhost:8080/contact",
});

// course:

export const courseApi = axios.create({
  baseURL: "http://localhost:8080/courses",
});

// trainer form

export const formApi = axios.create({
  baseURL: "http://localhost:8080/trainerform",
});
