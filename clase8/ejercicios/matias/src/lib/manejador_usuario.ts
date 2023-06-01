const faker = require("faker");
import { v4 as uuid } from "uuid";
import { User } from "../interfaces/User";

export default function crearUsuario(): User {
  return {
    id: uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    streetName: faker.address.streetName(),
    country: faker.address.country(),
    accountName: faker.finance.accountName(),
    account: faker.finance.account(),
    amount: faker.finance.amount(),
  };
}
