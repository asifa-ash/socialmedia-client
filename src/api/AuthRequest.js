import axios from "axios";

export function logIn(data) {
  const iop = axios.post("http://localhost:4000/auth/login", data);
  console.log(iop)
 
  return iop
  
}
export function signUp(data) {
  
  
 
  return axios.post("http://localhost:4000/auth/register", data);

}
