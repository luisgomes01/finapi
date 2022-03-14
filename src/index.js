const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

customers = [];

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return response.status(400).json({ error: "Customer already exists!" });
  }

  const id = uuidv4();

  customers.push({
    cpf,
    id,
    name,
    statement: [],
  });

  return res.status(201).send();
});

app.listen(3001);
