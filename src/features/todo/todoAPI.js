// A mock function to mimic making an async request for data
import axios from "axios";

export function fetchList(amount = 1) {
  const token = localStorage.getItem('token')
  return axios.get('https://task.samid.uz/v1/tasks/list', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
