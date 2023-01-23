import { residual_co2 } from "../referential/co2";

export function getSugarToBottling(
  carbonatation: any,
  volume: any,
  temperature: any
) {
  let cflatbeer = residual_co2.get(Math.round(temperature));
  if (cflatbeer) {
    return Math.round((carbonatation * 2 - cflatbeer * 2) * 2 * 100) / 100;
  }
  return -1;
}
