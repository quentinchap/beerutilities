

/*this.state.malts.forEach(malt => {
    MCU +=
      (4.23 * malt.ebc * malt.poids) / parseFloat(this.state.volume.value);
  });
  
  let ebc = 2.939 * Math.pow(MCU, 0.6859);
  */

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

        console.log(ebc,weight,volume);
        MCU += (4.23 * ebc * weight) / parseFloat(volume);
    });

    let res = 2.939 * Math.pow(MCU, 0.6859);

    return { ebc: res, srm: ebcToSrm(res) };
}
