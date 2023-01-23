"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheoricalDF = exports.getTheoricalDenity = void 0;
const mathjs_1 = __importDefault(require("mathjs"));
function getTheoricalDenity(rendement, volume, fermentables) {
    let E = 0;
    fermentables.forEach((f) => {
        let weight = 0;
        if (f.weight) {
            weight = parseFloat(f.weight);
        }
        else if (f && f.amount) {
            let fWeigth = mathjs_1.default.unit(f.amount.value ? parseFloat(f.amount.value) : 0, f.amount.unit ? f.amount.unit : 'kg');
            weight = fWeigth.toNumber('kg');
        }
        E += (((weight * parseFloat(f.yield)) / 100) * parseFloat(rendement)) / 100;
    });
    let DI = 1 + (383 * E) / volume / 1000;
    return {
        di: {
            value: DI,
            label: 'Densité initiale',
            suffix: '',
        },
    };
}
exports.getTheoricalDenity = getTheoricalDenity;
function getTheoricalDF(di, yeasts) {
    //DF = DI * (1 - A)
    let mmDI = (di - 1) * 1000;
    let DF = 0;
    let ratio = 0;
    yeasts.forEach((y) => {
        let weight = 0;
        if (y.weight) {
            weight = parseFloat(y.weight);
        }
        else if (y && y.amount) {
            let fWeigth = mathjs_1.default.unit(y.amount ? parseFloat(y.amount.value) : 0, y.amount ? y.amount.unit : 'kg');
            weight = fWeigth.toNumber('kg');
        }
        DF += mmDI * (1 - parseFloat(y.attenuation) / 100) * weight;
        ratio += weight;
    });
    DF = DF / ratio;
    return {
        df: {
            value: 1 + DF / 1000,
            label: 'Densité finale',
            suffix: '',
        },
    };
}
exports.getTheoricalDF = getTheoricalDF;
