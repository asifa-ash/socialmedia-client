import axios from "axios";

export function logIn(data) {
  return axios.post("http://localhost:4000/auth/login", data);
}
export function signUp(data) {
  
  axios.post("http://localhost:4000/auth/register", data);
}
