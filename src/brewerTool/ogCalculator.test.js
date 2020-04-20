import {beerTypeCarbo} from '../beerType';

import recipe from '../dataSet';
import {getTheoricalDenity, getTheoricalDF} from './theoricalDenity';

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
test('Simple OG 2', () => {
  expect(
    getTheoricalDenity(80.0, 20, [
      {
        id: 3,
        name: 'Aromatic Malt',
        ftype: 'Grain',
        amount: {value: 2, unit: 'kg'},
        yield: 78,
        color: 26,
        add_after_boil: false,
        origin: 'Belgium',
        supplier: '',
        notes: 'Used at rates of up to 10%',
        coarse_fine_diff: 'Aromatic malt will lend a distinct',
        moisture:
          'almost exaggerated malt aroma and flavor to the finished Ales and Lagers. Aromatic malt also has a rich color and is high in diastatic power for aid in starch conversion. D/C Aromatic malt. As the name suggests',
        diastatic_power: 'adds aromatics to a beer.',
        protein: 0,
        max_in_batch: 0,
        recommend_mash: 0,
        is_mashed: 0,
        ibu_gal_per_lb: 10,
        display_unit: true,
        display_scale: true,
        deleted: 0,
        display: -1,
        folder: -1,
        type: 'Grain',
        tableData: {id: 0},
      },
    ]).di.value,
  ).toEqual(1.0238992);
});

test('Complex og', () => {
  expect(
    getTheoricalDenity(80.0, 20, recipe.ingredients.fermentables).di.value,
  ).toEqual(1.0373347634);
});

test('Bug MBF og', () => {
  expect(
    getTheoricalDenity(80, 22, [
      {
        id: 1,
        name: 'Acid Malt',
        ftype: 'Grain',
        amount: {value: 5, unit: 'kg'},
        yield: 58.7,
        color: 3,
        add_after_boil: false,
        origin: 'Germany',
        supplier: '',
        notes: '',
        coarse_fine_diff: 0,
        moisture: 0,
        diastatic_power: 0,
        protein: 0,
        max_in_batch: 10,
        recommend_mash: true,
        is_mashed: true,
        ibu_gal_per_lb: 0,
        display_unit: -1,
        display_scale: -1,
        deleted: 0,
        display: 1,
        folder: ');  2',
        type: 'Grain',
        tableData: {id: 0},
      },
      {
        id: 5,
        name: 'Barley',
        ftype: 'Flaked',
        amount: 'Grain',
        yield: 0,
        color: 70,
        add_after_boil: 2,
        origin: false,
        supplier: 'US',
        notes: '',
        coarse_fine_diff:
          'Adds proteins to promote hean retention and mouth feel. Commonly used Dry Stouts.',
        moisture: 0,
        diastatic_power: 0,
        protein: 0,
        max_in_batch: 0,
        recommend_mash: 20,
        is_mashed: true,
        ibu_gal_per_lb: true,
        display_unit: 0,
        display_scale: -1,
        deleted: -1,
        display: 0,
        folder: 1,
        tableData: {id: 3},
        type: 'Flaked',
      },
    ]).di.value,
  ).toEqual(1.0408765454545454);
});

test('Simple fg', () => {
  expect(
    getTheoricalDF(1.05, [
      {
        amount: {value: 11.5, unit: 'g'},
        productID: 'US-05',
        laboratory: 'Fermentis',
        name: 'SafAle',
        from: 'Dry',
        attenuation: '75',
        tableData: {id: 0},
      },
    ]).df.value,
  ).toEqual(1.0125);
});

test('Complex fg', () => {
  expect(
    getTheoricalDF(1.05, [
      {
        amount: {value: 11.5, unit: 'g'},
        productID: 'US-05',
        laboratory: 'Fermentis',
        name: 'SafAle',
        from: 'Dry',
        attenuation: '75',
        tableData: {id: 0},
      },
      {
        amount: {value: 11.5, unit: 'g'},
        productID: 'US-06',
        laboratory: 'test',
        name: 'test',
        attenuation: '80',
        from: 'Dry',
        tableData: {id: 1},
      },
    ]).df.value,
  ).toEqual(1.01125);
});
