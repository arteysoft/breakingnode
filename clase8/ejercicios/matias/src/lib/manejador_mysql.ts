import mysql2 from "mysql2";
import { User } from "../interfaces/User";

export const insertarUsuarioEnDB = (user: User, onFinish: CallableFunction) => {
  const connection = mysql2.createConnection({
    host: "localhost",
    user: "matias",
    password: "matias",
    database: "breakingnode",
  });

  connection.connect((err) => {
    if (err) {
      onFinish(err, null);
      return;
    }

    connection.query(
      "INSERT INTO users (id, firstName, lastName, city, streetName, country, accountName, account, amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.id,
        user.firstName,
        user.lastName,
        user.city,
        user.streetName,
        user.country,
        user.accountName,
        user.account,
        user.amount,
      ],
      (err) => {
        if (err) {
          onFinish(err, null);
          return;
        }

        connection.end((err) => {
          if (err) {
            onFinish(err, null);
            return;
          }
          onFinish(null, user);
          return;
        });
      }
    );
  });
  return;
};

export const traerUsuariosDeDB = (onFinish: CallableFunction) => {
  let user: User | null;
  const connection = mysql2.createConnection({
    host: "localhost",
    user: "matias",
    password: "matias",
    database: "breakingnode",
  });

  connection.connect((err) => {
    if (err) {
      onFinish(err, null);
      return;
    }

    connection.query("SELECT * FROM users", (err, rows) => {
      if (err) {
        onFinish(err, null);
        return;
      }

      connection.end((err) => {
        if (err) {
          onFinish(err, null);
          return;
        }
        onFinish(null, rows);
        return;
      });
    });
  });
  return;
};
