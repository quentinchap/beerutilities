"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.literToCl = exports.literToGal = exports.literToOz = void 0;
/* Liter to X */
function literToOz(l) {
    return l * 33.814;
}
exports.literToOz = literToOz;
function literToGal(l) {
    return l * 0.26417;
}
exports.literToGal = literToGal;
function literToCl(l) {
    return l * 100;
}
exports.literToCl = literToCl;
