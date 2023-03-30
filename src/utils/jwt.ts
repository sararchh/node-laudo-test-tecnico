import bcrypt from "bcrypt";
import { jwtSignProps } from "@/types/jwtTypes"
import authConfig from "@/config/auth"
import { sign, verify } from "jsonwebtoken"

export function jwtGenerate(dataUser: jwtSignProps) {
    return sign(dataUser, authConfig.secret, { expiresIn: authConfig.expiresIn });
}

export function jwtDecode(token: string) {
    return verify(token, authConfig.secret);
}

export async function passwordEncrypted(pass: string) {
    return await bcrypt.hash(pass, 12);
}

export async function checkPassword(password: string, password_hash: string) {
    return await bcrypt.compare(password, password_hash);
}