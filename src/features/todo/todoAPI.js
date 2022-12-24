// A mock function to mimic making an async request for data
import axios from "axios";

export function fetchList() {
  const token = localStorage.getItem('token');

  return axios.get('https://task.samid.uz/v1/task', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}


export function create(values) {
  const token = localStorage.getItem('token');

  return axios.post(`https://task.samid.uz/v1/task`, {
    title: values.title,
    description: values.description,
    number: Number(values.number),
    status: values.status
  },{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}


export function remove(id) {
  const token = localStorage.getItem('token');

  return axios.delete(`https://task.samid.uz/v1/task/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
