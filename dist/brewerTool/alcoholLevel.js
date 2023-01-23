"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlcohoLevel = void 0;
function getAlcohoLevel(di, df, sucre = 0, newFormula = true) {
    if (di > 3) {
        di /= 1000;
    }
    if (df > 3) {
        df /= 1000;
    }
    const attenuation = ((di - df) / df) * 1000;
    let levelBeforeBottle = 0;
    if (newFormula) {
        levelBeforeBottle = ((76.08 * (di - df)) / (1.775 - di)) * (df / 0.794);
    }
    else {
        levelBeforeBottle = di - df * 131.25;
    }
    const level = levelBeforeBottle + sucre / 15.486;
    return { attenuation, levelBeforeBottle, level };
}
exports.getAlcohoLevel = getAlcohoLevel;
