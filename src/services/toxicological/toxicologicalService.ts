import toxicologicalRepository from "@/repositories/toxicologicalRepository";
import { toxicologicalTestProps } from "@/types/toxicologicalTypes";

export async function listAll() {

  return await toxicologicalRepository.findAll();

}
export async function createRegister(values: toxicologicalTestProps) {

  const data = await toxicologicalRepository.create(values);

  return data;
}
