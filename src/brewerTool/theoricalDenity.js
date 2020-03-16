export function getTheoricalDenity(rendement, volume, fermentables) {
  let E = 0;
  fermentables.forEach(f => {
    E +=
      (((parseFloat(f.weight) * parseFloat(f.yield)) / 100) *
        parseFloat(rendement)) /
      100;
  });

  let DI = 1 + (383 * E) / volume / 1000;

  return {
    di: {
      value: DI,
      label: "Densité initiale",
      suffix: ""
    }
  };
}
