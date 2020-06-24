const express = require("express");
const cntrl = require("./controllers")

const app = express();

app.use(express.json());

const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});