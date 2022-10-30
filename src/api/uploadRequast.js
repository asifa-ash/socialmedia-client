import axios from "axios";

export function uploadImage(data) {
  return axios.post("http://localhost:4000/upload", data);
}

export function uploadPost(data) {
  return axios.post("http://localhost:4000/post",data);
}