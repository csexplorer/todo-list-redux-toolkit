// A mock function to mimic making an async request for data
import axios from "axios";

export function login({username, password}) {
  return axios.post('https://task.samid.uz/v1/user/sign-in', {username, password})
}
