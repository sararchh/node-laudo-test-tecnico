import authRepository from "@/repositories/authRepository";
import { userProps } from "@/types/userTypes";
import { checkPassword, passwordEncrypted } from "@/utils/jwt";
import { duplicateRegisterError, emailDoNotExistsError, passwordIncorrectError } from "./erros";

export async function createUser(email: string, password: string, name: string) {

  await validateUniqueEmailOrFail(email);

  const hashedPassword = await passwordEncrypted(password);

  const user = await authRepository.create({
    name,
    password: hashedPassword,
    email
  });

  return user;
}

export async function autenticatedUser(email: string, password: string) {

  const user: userProps = await findUserByMail(email);

  if (!await checkPassword(password, user.password)) {
    throw passwordIncorrectError();
  }

  return user;
}



async function findUserByMail(email: string) {
  const userExists = await authRepository.findByEmail(email);

  if (!Boolean(userExists)) {
    throw emailDoNotExistsError();
  }

  return userExists
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await authRepository.findByEmail(email);

  if (Boolean(userWithSameEmail)) {
    throw duplicateRegisterError();
  }
}