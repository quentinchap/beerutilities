import { round } from "mathjs";

export function ebcToRGB(ebc) {
    return srmToRGB(ebcToSrm(ebc));
}

export function srmToRGB(srm) {
    const colors = {
        1: "#FFE699",
        2: "#FFD878",
        3: "#FFCA5A",
        4: "#FFBF42",
        5: "#FBB123",
        6: "#F8A600",
        7: "#F39C00",
        8: "#EA8F00",
        9: "#E58500",
        10: "#DE7C00",
        11: "#D77200",
        12: "#CF6900",
        13: "#CB6200",
        14: "#C35900",
        15: "#BB5100",
        16: "#B54C00",
        17: "#B04500",
        18: "#A63E00",
        19: "#A13700",
        20: "#9B3200",
        21: "#952D00",
        22: "#8E2900",
        23: "#882300",
        24: "#821E00",
        25: "#7B1A00",
        26: "#771900",
        27: "#701400",
        28: "#6A0E00",
        29: "#660D00",
        30: "#5E0B00",
        31: "#5A0A02",
        32: "#600903",
        33: "#560A05",
        34: "#4C0505",
        35: "#470606",
        36: "#440607",
        37: "#3F0708",
        38: "#3B0607",
        39: "#3A070B",
        40: "#36080A",
    }
    let s = round(srm);

    if (s > 40) {
        s = 40;
    }
    return colors[s];
}



export function ebcToSrm(color) {
    return color * 0.508;
}

export function srmToEbc(color) {
    return color * 1.970;
}

export function getColor(malts, volume) {

    let MCU = 0;

    malts.forEach(malt => {
        let ebc = 0;
        if (malt.color && malt.color.unit && malt.color.unit.toUpperCase() === "SRM") {
            ebc = srmToEbc(malt.color.value);
        }
        else if (malt.color) {
            ebc = malt.color.value;
        }

        let weight = 0;
        if (malt && malt.amount) {
            weight = malt.amount.value;
        }

        console.log(ebc, weight, volume);
        MCU += (4.23 * ebc * weight) / parseFloat(volume);
    });

    let res = 2.939 * Math.pow(MCU, 0.6859);

    return { ebc: res, srm: ebcToSrm(res), color: ebcToRGB(res) };
}
