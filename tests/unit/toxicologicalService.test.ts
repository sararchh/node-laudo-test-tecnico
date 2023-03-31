import { describe, expect, it, jest } from '@jest/globals';

import { listAll, createRegister } from "@/services/toxicological/toxicologicalService";
import toxicologicalRepository from "@/repositories/toxicologicalRepository";

describe("validate  toxicologicalService tests", () => {
  it("validate  function listAll when send data", async () => {

    jest.spyOn(toxicologicalRepository, "findAll").mockImplementationOnce((): any => {
      return [
        {
          "_id": "642615df92c9e18ecef32a6b",
          "result": "negativo",
          "userId": "642615c492c9e18ecef32a68",
          "codigo_amostra": "02383322",
          "Cocaína": 0.678,
          "Anfetamina": 0.1,
          "Metanfetamina": 0.1,
          "MDA": 0.1,
          "MDMA": 0,
          "THC": 0.1,
          "Morfina": 0.1,
          "Codeína": 0.1,
          "Heroína": 0.1,
          "Benzoilecgonina": 0,
          "Cocaetileno": 0,
          "Norcocaína": 0,
          "createdAt": "2023-03-30T23:06:07.666Z",
          "__v": 0
        },
      ]
    });

    const promisse = await listAll();
    expect(promisse).toEqual([{
      _id: expect.any(String),
      result: expect.any(String),
      userId: expect.any(String),
      codigo_amostra: expect.any(String),
      Cocaína: expect.any(Number),
      Anfetamina: expect.any(Number),
      Metanfetamina: expect.any(Number),
      MDA: expect.any(Number),
      MDMA: expect.any(Number),
      THC: expect.any(Number),
      Morfina: expect.any(Number),
      Codeína: expect.any(Number),
      Heroína: expect.any(Number),
      Benzoilecgonina: expect.any(Number),
      Cocaetileno: expect.any(Number),
      Norcocaína: expect.any(Number),
      createdAt: expect.any(String),
      __v: expect.any(Number),
    }]);

  });

  it("validate  function listAll when not sending data", async () => {

    jest.spyOn(toxicologicalRepository, "findAll").mockImplementationOnce((): any => {
      return [];
    });

    const promisse = await listAll();
    expect(promisse).toEqual([]);

  });

  it("validate  function createRegister", async () => {

    const obj = {
      "_id": "642615df92c9e18ecef32a6b",
      "result": "negativo",
      "userId": "642615c492c9e18ecef32a68",
      "codigo_amostra": "02383322",
      "Cocaína": 0.678,
      "Anfetamina": 0.1,
      "Metanfetamina": 0.1,
      "MDA": 0.1,
      "MDMA": 0,
      "THC": 0.1,
      "Morfina": 0.1,
      "Codeína": 0.1,
      "Heroína": 0.1,
      "Benzoilecgonina": 0,
      "Cocaetileno": 0,
      "Norcocaína": 0,
      "createdAt": "2023-03-30T23:06:07.666Z",
      "__v": 0
    }

    jest.spyOn(toxicologicalRepository, "create").mockImplementationOnce((): any => {
      return [
        obj
      ]
    });

    const promisse = await createRegister(obj);
    expect(promisse).toEqual([obj]);
  });
});