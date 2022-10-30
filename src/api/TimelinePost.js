import axios from "axios";

export function getTimelinePosts(data) {
  return axios.post("http://localhost:4000/posts", data/timeline);
}

