import { round } from "mathjs";

export function getColorCode(color: any) {
  if (color && color.unit && color.unit.toUpperCase() === "SRM") {
    return srmToRGB(color.value);
  }
  if (color && color.unit && color.unit.toUpperCase() === "EBC") {
    return srmToRGB(color.value);
  }
  return "#ffffff";
}

export function ebcToRGB(ebc: number) {
  return srmToRGB(ebcToSrm(ebc));
}

export function srmToRGB(srm: number) {
  if (srm) {
    const colors = [
       "#FFE699",
       "#FFD878",
      "#FFCA5A",
       "#FFBF42",
       "#FBB123",
       "#F8A600",
       "#F39C00",
       "#EA8F00",
       "#E58500",
       "#DE7C00",
       "#D77200",
       "#CF6900",
       "#CB6200",
       "#C35900",
       "#BB5100",
       "#B54C00",
       "#B04500",
       "#A63E00",
       "#A13700",
       "#9B3200",
       "#952D00",
       "#8E2900",
       "#882300",
       "#821E00",
       "#7B1A00",
       "#771900",
       "#701400",
       "#6A0E00",
       "#660D00",
       "#5E0B00",
       "#5A0A02",
       "#600903",
       "#560A05",
       "#4C0505",
       "#470606",
       "#440607",
       "#3F0708",
       "#3B0607",
       "#3A070B",
       "#36080A",
    ];
    let s = round(srm);

    if (s > 40) {
      s = 40;
    }
    return colors[s];
  } else {
    return "#ffffff";
  }
}

export function ebcToSrm(ebc: number) {
  return ebc * 0.508;
}

export function srmToEbc(srm: number) {
  return srm * 1.97;
}

export function getColor(malts: any, volume: number) {
  let MCU = 0;

  malts.forEach((malt: any) => {
    let ebc = 0;
    if (
      malt.color &&
      malt.color.unit &&
      malt.color.unit.toUpperCase() === "SRM"
    ) {
      ebc = srmToEbc(malt.color.value);
    } else if (malt.color) {
      ebc = malt.color.value;
    }

    let weight = 0;
    if (malt && malt.amount) {
      weight = malt.amount.value;
    }

    MCU += (4.23 * ebc * weight) / volume;
  });

  let res = 2.939 * Math.pow(MCU, 0.6859);

  return { ebc: res, srm: ebcToSrm(res), color: ebcToRGB(res) };
}
