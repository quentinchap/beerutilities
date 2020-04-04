import math from './mathjs';

export function getTheoricalDenity(rendement, volume, fermentables) {
  let E = 0;
  fermentables.forEach(f => {
    let weight = 0;
    if (f.weight) {
      weight = parseFloat(f.weight);
    } else if (f && f.amount) {
      let fWeigth = math.unit(
        f.amount ? parseFloat(f.amount.value) : 0,
        f.amount ? f.amount.unit : 'kg',
      );
      weight = math.number(fWeigth, 'kg');
    }
    console.log('weight ' + weight, 'yield ' + f.yield);

    E +=
      (((parseFloat(weight) * parseFloat(f.yield)) / 100) *
        parseFloat(rendement)) /
      100;
  });

  let DI = 1 + (383 * E) / volume / 1000;

  return {
    di: {
      value: DI,
      label: 'Densité initiale',
      suffix: '',
    },
  };
}
