import { ApplicationError } from "@/protocols";

export function duplicateRegisterError(): ApplicationError {
    return {
        name: "duplicateRegisterError",
        message: "already exists register with this email",
    };
}

export function emailDoNotExistsError(): ApplicationError {
    return {
        name: "emailDoNotExistsError",
        message: "do not exists register with this email",
    };
}

export function passwordIncorrectError(): ApplicationError {
    return {
        name: "passwordIncorrectError",
        message: "password is incorrect",
    };
}