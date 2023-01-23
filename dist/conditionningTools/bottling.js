"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSugarToBottling = void 0;
const co2_1 = require("../referential/co2");
function getSugarToBottling(carbonatation, volume, temperature) {
    let cflatbeer = co2_1.residual_co2.get(Math.round(temperature));
    if (cflatbeer) {
        return Math.round((carbonatation * 2 - cflatbeer * 2) * 2 * 100) / 100;
    }
    return -1;
}
exports.getSugarToBottling = getSugarToBottling;
