//npm init
//npm install express

const express = require('./express');
const app = express();
const port = 8080;

app.listen(port, () => {
    let date = new Date();
    console.log("Server initiated at port" + port + "on" + date);
});
