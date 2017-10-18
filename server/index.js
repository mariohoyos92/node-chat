const express = require("express");
const { json } = require("body-parser");
const cors = require('cors')

const port = 3001;

const app = express();
app.use(json());
app.use(cors())
app.use(express.static(`${__dirname}/../public/build`))

const {
  create,
  read,
  update,
  deleteMess
} = require(`./controllers/message_controller`);

app.get(`/api/messages`, read);
app.post(`/api/messages`, create);
app.put(`/api/messages/:id`, update);
app.delete(`/api/messages/:id`, deleteMess);

app.listen(port, () =>
  console.log(`I'm up and running dawg, peep port: ${port}`)
);
