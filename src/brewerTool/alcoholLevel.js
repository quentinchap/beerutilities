export function getAlcohoLevel(di, df, sucre) {
  let DI = parseFloat(di);
  let DF = parseFloat(df);
  if (DI > 3) {
    DI /= 1000;
  }
  if (DF > 3) {
    DF /= 1000;
  }

  const attenuation = (DI - DF) * 1000;
  const levelBeforeBottle = attenuation / 7.642;
  const level = levelBeforeBottle + parseFloat(sucre) / 15.486;
  return {attenuation, levelBeforeBottle, level};
}
