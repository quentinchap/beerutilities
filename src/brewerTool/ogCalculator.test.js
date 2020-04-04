import {beerTypeCarbo} from '../beerType';

import recipe from '../dataSet';
import {getTheoricalDenity} from './theoricalDenity';

test('Simple OG', () => {
  expect(
    getTheoricalDenity(80.0, 20, [
      {
        amount: {value: 3, unit: 'kg'},
        _id: '5da1de901da13a0a61c5cfe6',
        yield: 80.5,
      },
    ]).di.value,
  ).toEqual(1.0369978);
});

test('Complex og', () => {
  expect(
    getTheoricalDenity(80.0, 20, recipe.ingredients.fermentables).di.value,
  ).toEqual(1.0373347634);
});
