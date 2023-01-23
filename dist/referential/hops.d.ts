declare const hops: ({
    id: number;
    aroma: string;
    brewingUsage: number;
    name: string;
    pedigree: string;
    alphaMax: number;
    alphaMin: number;
    betaMax: number;
    betaMin: number;
    coHumuloneMax: number;
    coHumuloneMin: number;
    info: string;
    styles: string;
    totalOilMax: number;
    totalOilMin: number;
    trade: string;
} | {
    id: number;
    aroma: string;
    brewingUsage: number;
    name: string;
    pedigree: string;
    alphaMax: number;
    alphaMin: number;
    betaMax: number;
    betaMin: number;
    coHumuloneMax: number;
    coHumuloneMin: number;
    info: string;
    styles: string;
    totalOilMax: number;
    totalOilMin: number;
    trade: null;
} | {
    id: number;
    aroma: string;
    brewingUsage: number;
    name: string;
    pedigree: string;
    alphaMax: number;
    alphaMin: number;
    betaMax: number;
    betaMin: number;
    coHumuloneMax: number;
    coHumuloneMin: number;
    info: string;
    styles: null;
    totalOilMax: number;
    totalOilMin: number;
    trade: null;
} | {
    id: number;
    aroma: string;
    brewingUsage: number;
    name: string;
    pedigree: string;
    alphaMax: number;
    alphaMin: number;
    betaMax: number;
    betaMin: number;
    coHumuloneMax: number;
    coHumuloneMin: number;
    info: null;
    styles: null;
    totalOilMax: number;
    totalOilMin: number;
    trade: string;
} | {
    id: number;
    aroma: string;
    brewingUsage: number;
    name: string;
    pedigree: string;
    alphaMax: number;
    alphaMin: number;
    betaMax: number;
    betaMin: number;
    coHumuloneMax: number;
    coHumuloneMin: number;
    info: string;
    styles: null;
    totalOilMax: number;
    totalOilMin: number;
    trade: string;
} | {
    id: number;
    aroma: null;
    brewingUsage: number;
    name: string;
    pedigree: null;
    alphaMax: number;
    alphaMin: number;
    betaMax: number;
    betaMin: number;
    coHumuloneMax: number;
    coHumuloneMin: number;
    info: string;
    styles: null;
    totalOilMax: number;
    totalOilMin: number;
    trade: string;
})[];
export default hops;
