import axios from "axios";

export const getAll = async () => {
  const { data } = await axios.get("/api/foods");
  return data;
};

export const getById = async (id) => {
  const { food } = await axios.get(`/api/foods/:${id}`);
  return food;
};
