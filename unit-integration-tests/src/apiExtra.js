const axios = require('axios');

async function loadUsers() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}

module.exports = loadUsers;
