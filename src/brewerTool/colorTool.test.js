
import { getColor, ebcToRGB, srmToRGB } from './colorTool';


test('Simple case (EBC)', () => {
  expect(
    getColor(
      [
        {
          id: 3,
          name: 'Aromatic Malt',
          ftype: 'Grain',
          amount: { value: 2, unit: 'kg' },
          yield: 78,
          color: { value: 26, unit: "ebc" },
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
          tableData: { id: 0 },
        },
      ], 20

    ).ebc,
  ).toEqual(15.220771402421512);
});
test('Simple case (SRM)', () => {
  expect(
    getColor(
      [
        {
          id: 3,
          name: 'Aromatic Malt',
          ftype: 'Grain',
          amount: { value: 2, unit: 'kg' },
          yield: 78,
          color: { value: 13.21, unit: "srm" },
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
          tableData: { id: 0 },
        },
      ], 20

    ).ebc,
  ).toEqual(15.230286435717307);
});

test('SRM to color', () => {
  expect(
    srmToRGB(1),
  ).toEqual("#FFE699");
  expect(
    srmToRGB(1.1),
  ).toEqual("#FFE699");
  expect(
    srmToRGB(1.5),
  ).toEqual("#FFD878");
  expect(
    srmToRGB(50),
  ).toEqual("#36080A");
  expect(
    ebcToRGB(50),
  ).toEqual("#7B1A00");
});