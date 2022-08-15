const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

app.post("/subscriptions", (req, res) => {
  const { name, email } = req.body;

  const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "slack",
  });

  db.query(
    "SELECT * FROM subscriptions WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        db.query(
          "INSERT INTO subscriptions (name, email) VALUE (?,?)",
          [name, email],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );

        // se não houver resultado
      } else {
        res.send({ msg: "Email já cadastrado" });
      }
    }
  );
});
