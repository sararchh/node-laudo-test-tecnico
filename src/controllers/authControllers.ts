import { Request, Response } from "express";
import httpStatus from "http-status";
import { createUser, autenticatedUser } from "@/services/auth/authService";
import { jwtGenerate } from "@/utils/jwt";
import { userProps } from "@/types/userTypes";

export async function signUp(req: Request, res: Response) {
  try {
    const { email, password, name } = req.body;

    const user = await createUser(email, password, name);

    return res.status(httpStatus.CREATED).json({
      id: user._id,
      name: user.name,
      email: user.email,
      token: jwtGenerate({ userId: user?.id })
    });
  } catch (error) {
    if (error.name === "duplicateRegisterError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send("Ocorreu um erro, verifique e tente novamente.");
  }
}

export async function signIn(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user: userProps = await autenticatedUser(email, password);
    user.password = undefined;

    return res.status(httpStatus.OK).json({
      id: user?._id,
      name: user?.name,
      email: user?.email,
      token: jwtGenerate({ userId: user?._id })
    });
  } catch (error) {
    if (error.name === "emailDoNotExistsError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    if (error.name === "passwordIncorrectError") {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send("Ocorreu um erro, verifique e tente novamente.");
  }
}