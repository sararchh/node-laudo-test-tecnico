import toxicologicalTest from "@/entities/toxicologicalTest/toxicologicalTest";
import { toxicologicalTestProps } from "@/types/toxicologicalTypes";


async function findAll() {
  return toxicologicalTest.find();
}

async function create(data: toxicologicalTestProps) {
  return toxicologicalTest.create(data);
}

const toxicologicalRepository = {
  findAll,
  create,
};

export default toxicologicalRepository;
