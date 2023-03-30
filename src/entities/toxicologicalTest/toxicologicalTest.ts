import mongoose from 'mongoose';
import { IToxicologicalTest } from './toxicologicalTestTypes';

const ToxicologicalTestSchema = new mongoose.Schema({
    result: { type: String, enum: ["positivo", "negativo"], default: "negativo", required: true, select: true },
    userId: { type: String, required: true, select: true },
    codigo_amostra: { type: String, required: true, select: true },
    Cocaína: { type: Number, required: true, select: true },
    Anfetamina: { type: Number, required: true, select: true },
    Metanfetamina: { type: Number, required: true, select: true },
    MDA: { type: Number, required: true, select: true },
    MDMA: { type: Number, required: true, select: true },
    THC: { type: Number, required: true, select: true },
    Morfina: { type: Number, required: true, select: true },
    Codeína: { type: Number, required: true, select: true },
    Heroína: { type: Number, required: true, select: true },
    Benzoilecgonina: { type: Number, required: true, select: true },
    Cocaetileno: { type: Number, required: true, select: true },
    Norcocaína: { type: Number, required: true, select: true },
    createdAt: { type: Date, default: Date.now }
});


export default mongoose.model<IToxicologicalTest>('toxicologicaltests', ToxicologicalTestSchema);
