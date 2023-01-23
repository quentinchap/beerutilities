export declare function getColorCode(color: any): string;
export declare function ebcToRGB(ebc: number): string;
export declare function srmToRGB(srm: number): string;
export declare function ebcToSrm(ebc: number): number;
export declare function srmToEbc(srm: number): number;
export declare function getColor(malts: any, volume: number): {
    ebc: number;
    srm: number;
    color: string;
};
