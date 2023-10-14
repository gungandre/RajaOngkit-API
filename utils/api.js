const axios = require("axios");

const rajaOngkirAPI = "http://api.rajaongkir.com/starter";

const instance = axios.create({
  baseURL: rajaOngkirAPI,
  headers: {
    key: "d59049b12bec5f149cb709f386dbd012",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const getProvince = instance
  .get("/province")
  .then((response) => response.data)
  .catch((error) => error);

const getCity = (params) => {
  return instance
    .get(`/city?province=${params}`)
    .then((response) => response.data)
    .catch((error) => error);
};

const postCost = (post) => {
  const dataPost = {
    origin: "114",
    destination: post.city,
    weight: 1700,
    courier: post.courier,
  };

  return instance
    .post(`/cost`, dataPost)
    .then((response) => response.data)
    .catch((error) => error);
};

module.exports = { getProvince, getCity, postCost };
