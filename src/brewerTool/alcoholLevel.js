export function getAlcohoLevel(di, df, sucre, newFormula = true) {
  let DI = parseFloat(di);
  let DF = parseFloat(df);
  if (DI > 3) {
    DI /= 1000;
  }
  if (DF > 3) {
    DF /= 1000;
  }

  const attenuation = (DI - DF) * 1000;
  let levelBeforeBottle = 0;
  if (newFormula) {
    levelBeforeBottle = ((76.08 * (DI - DF)) / (1.775 - DI)) * (DF / 0.794);
  } else {
    levelBeforeBottle = attenuation / 7.642;
  }
  const level = levelBeforeBottle + parseFloat(sucre) / 15.486;

  return { attenuation, levelBeforeBottle, level };
}
