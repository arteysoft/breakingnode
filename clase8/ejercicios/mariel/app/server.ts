import express from "express";
import mysql from "mysql2";
import { faker } from "@faker-js/faker";

const app = express();
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alumnos",
});

app.post("/inventarAlumno", (req, res) => {
  const newUser = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
  };

  const query = "INSERT INTO usuarios SET ?";
  connection.query(query, newUser, (error, results) => {
    if (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error al insertar el usuario en la base de datos" });
      return
    }
    res.status(201).json({ message: "Usuario insertado correctamente" });
  });
});

app.get("/usuario", (req, res) => {
  const query = "SELECT * FROM usuarios";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error al obtener los alumnos:", error);
      res.sendStatus(500);
    } else {
      console.log("Alumnos obtenidos correctamente");
      res.json(results);
    }
  });
});
