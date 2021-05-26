const axios = require("axios");

function getTodo(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.data)
    .catch((err) => err.response.statusText);
}

getTodo(23).then(res => console.log(res));

module.exports = {
  getTodo,
};
