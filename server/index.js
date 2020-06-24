// reqs
const express = require("express");
const cntrl = require("./controllers")

// app
const app = express();

// parsing
app.use(express.json());

// endpoints
const messURL = "api/messages";
app.post(messURL, cntrl.create);
app.get(messURL, cntrl.read);
app.put(`${messURL}/:id`, cntrl.update);
app.delete(`${messURL}/:id`, cntrl.delete);

// port
const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});