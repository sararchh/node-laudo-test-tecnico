import * as Yup from "yup";

export const toxicologicalTestSchema = Yup.object().shape({
    codigo_amostra: Yup.string().required('Código da amostra é obrigatório'),
    Cocaína: Yup.number().typeError("Valor Cocaína deve ser um número ex.: 0.123").required('Valor Cocaína é obrigatório'),
    Anfetamina: Yup.number().typeError("Valor Anfetamina deve ser um número ex.: 0.123").required('Valor Anfetamina é obrigatório'),
    Metanfetamina: Yup.number().typeError("Valor Metanfetamina deve ser um número ex.: 0.123").required('Valor Metanfetamina é obrigatório'),
    MDA: Yup.number().typeError("Valor MDA deve ser um número ex.: 0.123").required('Valor MDA é obrigatório'),
    MDMA: Yup.number().typeError("Valor MDMA deve ser um número ex.: 0.123").required('Valor MDMA é obrigatório'),
    THC: Yup.number().typeError("Valor THC deve ser um número ex.: 0.123").required('Valor THC é obrigatório'),
    Morfina: Yup.number().typeError("Valor Morfina deve ser um número ex.: 0.123").required('Valor Morfina é obrigatório'),
    Codeína: Yup.number().typeError("Valor Codeína deve ser um número ex.: 0.123").required('Valor Codeína é obrigatório'),
    Heroína: Yup.number().typeError("Valor Heroína deve ser um número ex.: 0.123").required('Valor Heroína é obrigatório'),
    Benzoilecgonina: Yup.number().typeError("Valor Benzoilecgonina deve ser um número ex.: 0.123").required('Valor Benzoilecgonina é obrigatório'),
    Cocaetileno: Yup.number().typeError("Valor Cocaetileno deve ser um número ex.: 0.123").required('Valor Cocaetileno é obrigatório'),
    Norcocaína: Yup.number().typeError("Valor Norcocaína deve ser um número ex.: 0.123").required('Valor Norcocaína é obrigatório'),
});
