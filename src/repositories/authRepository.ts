import users from "@/entities/users/users";
import { userProps } from "@/types/userTypes";

async function findByEmail(email: string) {
  return users.findOne({ email: email });
}

async function create(data: userProps) {
  return users.create(data);
}

const authRepository = {
  findByEmail,
  create,
};

export default authRepository;
