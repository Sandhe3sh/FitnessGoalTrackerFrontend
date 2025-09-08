import axios from "axios";

const BASE_URL = "http://localhost:8083/api/fitness";

export const getEntries = () => axios.get(BASE_URL);
export const getEntry = (id) => axios.get(`${BASE_URL}/${id}`);
export const createEntry = (entry) => axios.post(BASE_URL, entry);
export const updateEntry = (id, entry) => axios.put(`${BASE_URL}/${id}`, entry);
export const deleteEntry = (id) => axios.delete(`${BASE_URL}/${id}`);
