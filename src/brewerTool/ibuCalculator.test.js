import {beerTypeCarbo} from '../beerType';
import {calculateIbu} from './ibuCalculator';
import recipe from '../dataSet';

test('Null IBU', () => {
  expect(
    calculateIbu(
      [
        {
          amount: {value: 35, unit: 'g'},
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
          amount: {value: 35, unit: 'g'},
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

test('Complex IBU', () => {
  expect(
    calculateIbu(recipe.ingredients.hops, recipe.fg, recipe.batch_volume.value)
      .ibu,
  ).toEqual(81.21972918546811);
});
