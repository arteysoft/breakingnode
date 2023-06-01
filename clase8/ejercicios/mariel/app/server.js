"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mysql2_1 = require("mysql2");
var faker_1 = require("@faker-js/faker");
var app = (0, express_1.default)();
var port = 4000;
app.listen(port, function () {
    console.log("Servidor Express escuchando en el puerto ".concat(port));
});
var connection = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "alumnos",
});
app.post("/inventarAlumno", function (req, res) {
    var newUser = {
        name: faker_1.faker.person.firstName(),
        email: faker_1.faker.internet.email(),
        username: faker_1.faker.internet.userName(),
        password: faker_1.faker.internet.password(),
    };
    var query = "INSERT INTO usuarios SET ?";
    connection.query(query, newUser, function (error, results) {
        if (error) {
            console.error(error);
            res
                .status(500)
                .json({ message: "Error al insertar el usuario en la base de datos" });
            return;
        }
        res.status(201).json({ message: "Usuario insertado correctamente" });
    });
});
app.get("/usuario", function (req, res) {
    var query = "SELECT * FROM usuarios";
    connection.query(query, function (error, results) {
        if (error) {
            console.error("Error al obtener los alumnos:", error);
            res.sendStatus(500);
        }
        else {
            console.log("Alumnos obtenidos correctamente");
            res.json(results);
        }
    });
});
