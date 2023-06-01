import express from "express";
import { insertarUsuarioEnDB, traerUsuariosDeDB } from "./lib/manejador_mysql";
import crearUsuario from "./lib/manejador_usuario";
import { User } from "./interfaces/User";

export const Server = () => {
  const app = express();

  app.post("/inventarUsuario", (req, res) => {
    const user = crearUsuario();
    insertarUsuarioEnDB(user, (err: Error, user: User) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(user);
      }
    });
  });

  app.get("/alumno", (req, res) => {
    traerUsuariosDeDB((err: Error, users: User) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(users);
      }
    });
  });

  app.listen(3000, () => {
    console.log("escuchando puerto 3000");
  });
};
