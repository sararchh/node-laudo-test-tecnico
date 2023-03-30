import { Request, Response } from "express";
import httpStatus from "http-status";
import { cutOffValues } from "@/utils/cutoffValues";

import { createRegister, listAll } from "@/services/toxicological/toxicologicalService";

export async function getAll(req: Request, res: Response) {
  try {
    const data = await listAll();

    return res.status(httpStatus.OK).json(data);

  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send("Ocorreu um erro, verifique e tente novamente.");
  }
}


export async function testStore(req: Request, res: Response) {
  try {
    const dataBody = req.body;
    let resultTest = "negativo";

    for (let index = 0; index < cutOffValues.length; index++) {
      const element = cutOffValues[index];
      const valueToValidate = dataBody[element?.name];

      if (valueToValidate >= element?.value) {
        if (element?.name == "Cocaína") {
          const { Benzoilecgonina, Cocaetileno, Norcocaína } = dataBody;
          if (Benzoilecgonina >= 0.05 || Cocaetileno >= 0.05 || Norcocaína >= 0.05) {
            resultTest = "positivo";
          }
          resultTest = "negativo";
        } else {
          resultTest = "positivo";
        }
      } else {
        resultTest = "negativo";
      }

    }

    await createRegister({ ...dataBody, result: resultTest, userId: req.userId });

    const dataSend = {
      "Código da Amostra": dataBody?.codigo_amostra,
      "Resultado": resultTest
    }

    return res.status(httpStatus.OK).json(dataSend);

  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send("Ocorreu um erro, verifique e tente novamente.");
  }
}
