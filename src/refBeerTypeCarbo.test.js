import {beerTypeCarbo} from './beerType';

test('Verify beerTypeCarbo', () => {
  expect(beerTypeCarbo.length).toBe(28);
  expect(beerTypeCarbo[0].name).toBe("Ales Britanniques");
});
