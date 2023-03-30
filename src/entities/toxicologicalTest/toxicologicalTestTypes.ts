import mongoose from 'mongoose';

export interface IToxicologicalTest extends mongoose.Document {
    _id?: string;
    result: string;
    userId: string;
    codigo_amostra: string;
    Cocaína: number;
    Anfetamina: number;
    Metanfetamina: number;
    MDA: number;
    MDMA: number;
    THC: number;
    Morfina: number;
    Codeína: number;
    Heroína: number;
    Benzoilecgonina: number;
    Cocaetileno: number;
    Norcocaína: number;
    createdAt: string;
}