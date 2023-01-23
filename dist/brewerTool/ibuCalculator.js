"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateIbu = void 0;
const mathjs_1 = __importDefault(require("mathjs"));
function convertHopParam(hop) {
    let w = 0;
    let duration = 0;
    let al = 0;
    if (hop.weight) {
        w = parseFloat(hop.weight);
    }
    else if (hop && hop.amount) {
        let hopWeigth = mathjs_1.default.unit(hop.amount ? hop.amount.value : 0, hop.amount ? hop.amount.unit : 'g');
        w = hopWeigth.toNumber('oz');
    }
    if (hop.alpha) {
        al = parseFloat(hop.alpha) / 100;
    }
    else if (hop.alphaMin && hop.alphaMax) {
        al = (parseFloat(hop.alphaMin) + parseFloat(hop.alphaMax) / 2) / 100;
    }
    duration = parseFloat(hop.time);
    return { w, duration, al };
}
function calculateIbu(hops, gravity, volume) {
    let res = 0;
    let usages = [];
    let grav = parseFloat(gravity);
    let ibu = 0;
    let usage = 0;
    let cDensity = 1;
    let vol = mathjs_1.default.unit(parseFloat(volume), 'l');
    let galVol = vol.toNumber("gal");
    hops.forEach((h) => {
        let { w, duration, al } = convertHopParam(h);
        usage = 0;
        ibu = 0;
        if (h.use === 'First Wort') {
            duration = duration * 1.1;
        }
        if (h.use !== 'Dry Hop' && h.use !== 'Aroma' && h.use !== 'Hop Stand') {
            console.log("Boil Case");
            const boilTimeFactor = (1 - Math.exp(-0.04 * duration)) / 4.15;
            const bignessFactor = 1.65 * Math.pow(0.000125, grav - 1);
            const addedAlpha = (al * w * 7490) / galVol;
            usage = bignessFactor * boilTimeFactor;
            res += addedAlpha * usage;
        }
        usages.push({ name: h.name, usage });
        return;
    });
    return { ibu: res, usages };
}
exports.calculateIbu = calculateIbu;
