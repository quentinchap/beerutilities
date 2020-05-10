import {residual_co2} from '../referential/co2';

export function getSugarToBottling(carbonatation, volume, temperature) {
  let cflatbeer = residual_co2[Math.round(temperature)];

  return Math.round((carbonatation * 2 - cflatbeer * 2) * 2 * 100) / 100;
}


