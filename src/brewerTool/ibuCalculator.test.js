import { beerTypeCarbo } from '../beerType';
import { calculateIbu } from './ibuCalculator';
import recipe from '../dataSet';
import { round } from 'mathjs';

/*test('Null IBU', () => {
  expect(
    calculateIbu(
      [
        {
          amount: { value: 35, unit: 'g' },
          _id: '5da1de901da13a0a61c5cfe6',
          name: 'Goldings',
          time: '0',
          use: 'Aroma',
          alpha: 12,
        },
      ],
      1.04,
      12,
    ).ibu,
  ).toEqual(0);
  expect(
    calculateIbu(
      [
        {
          amount: { value: 35, unit: 'g' },
          _id: '5da1de901da13a0a61c5cfe6',
          name: 'Goldings',
          time: '0',
          use: 'Dry Hop',
          alpha: 12,
        },
      ],
      1.04,
      12,
    ).ibu,
  ).toEqual(0);
});


test('Simplue IBU', () => {
  expect(
    calculateIbu(
      [
        {
          amount: { value: 0.2, unit: 'oz' },
          _id: '5da1de901da13a0a61c5cfe6',
          name: 'Goldings',
          time: 60,
          use: 'Boil',
          alpha: 5.0,
        },
      ],
      1.05,
      18.93,
    ).ibu,
  ).toEqual(34.54419752845652);
});*/

test('Complex IBU', () => {
  expect(
    round(calculateIbu(recipe.ingredients.hops, recipe.fg, recipe.batch_size.value)
      .ibu),
  ).toEqual(11);
});

test('Complex IBU', () => {
  expect(
    round(calculateIbu([
      { "id": 4, "name": "test", "amount": { "value": 1.5, "unit": "oz" }, "alpha": "6.4", "time": "45", "form": "Pellet", "use": "Boil" },
      { "id": 4, "name": "test", "amount": { "value": 1, "unit": "oz" }, "alpha": "5", "time": "15", "form": "Pellet", "use": "Boil" },

    ], 1.05, 18.93)
      .ibu),
  ).toEqual(39);
});

test('Full cascade IBU', () => {
  expect(
    round(calculateIbu([
      { "id": 4, "name": "test", "amount": { "value": 5, "unit": "g" }, "alpha": "6.1", "time": "60", "form": "Pellet", "use": "Boil" },
    ], 1.05, 20)
      .ibu),
  ).toEqual(4);
});
