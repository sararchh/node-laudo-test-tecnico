import * as Yup from "yup";

export const userSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email().required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatório'),
});

export const signInSchema = Yup.object().shape({
    email: Yup.string().email().required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatório'),
});
