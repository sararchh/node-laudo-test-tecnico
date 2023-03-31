import { describe, expect, it, jest } from '@jest/globals';

import authRepository from "@/repositories/authRepository";
import { createUser, autenticatedUser } from "@/services/auth/authService";

describe("validate  authService tests", () => {
  it("validate function autenticatedUser", async () => {

    const email = 'teste@mail.com';
    const password = '123456';

    jest.spyOn(authRepository, "findByEmail").mockImplementationOnce((): any => {
      return {
        _id: "new ObjectId(642632131eb6ee0ae67f4cfe)",
        name: 'Usuário teste',
        password: '$2b$12$eAFcM4VW4QqlifO8JYHkb.ZEroOQDdRKnd6x0Rmv3yyCxZp3WlvIC',
        email: email,
        createdAt: "2023-03-31T01:06:27.069Z",
        __v: 0
      }
    });

    const promisse = await autenticatedUser(email, password);
    expect(promisse).toEqual({
      _id: expect.any(String),
      name: expect.any(String),
      password: expect.any(String),
      email: expect.any(String),
      createdAt: expect.any(String),
      __v: expect.any(Number)
    });

  });


  it("validate function createUser new user", async () => {

    const email = 'teste@mail.com';
    const password = '123456';
    const name = 'Usuário teste';


    jest.spyOn(authRepository, "findByEmail").mockImplementationOnce((): any => {
      return null;
    });

    jest.spyOn(authRepository, "create").mockImplementationOnce((): any => {
      return {
        _id: "new ObjectId(642632131eb6ee0ae67f4cfe)",
        name: name,
        password: '$2b$12$eAFcM4VW4QqlifO8JYHkb.ZEroOQDdRKnd6x0Rmv3yyCxZp3WlvIC',
        email: email,
        createdAt: "2023-03-31T01:06:27.069Z",
        __v: 0
      }
    });

    const promisse = await createUser(email, name, password);
    expect(promisse).toEqual({
      _id: expect.any(String),
      name: expect.any(String),
      password: expect.any(String),
      email: expect.any(String),
      createdAt: expect.any(String),
      __v: expect.any(Number)
    });

  });
});