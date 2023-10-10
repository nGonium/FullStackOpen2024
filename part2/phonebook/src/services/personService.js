import axios from "axios"

const BASE_URL = 'http://localhost:3001/persons'

const getAll = () => 
  axios
    .get(BASE_URL)
    .then(res => res.data)

const create = (newObject) => 
  axios
    .post(BASE_URL, newObject)
    .then(res => res.data)

const update = (id, updatedObject) => 
  axios
    .put(`${BASE_URL}/${id}`, updatedObject)
    .then(res => res.data)

export default { getAll, create, update }