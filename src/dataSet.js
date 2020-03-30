const recipe = {
  boil_volume: {value: null, unit: 'L'},
  ingredients: {
    hops: [
      {
        amount: {value: 14, unit: 'g'},
        _id: '5da1de901da13a0a61c5cfe9',
        name: 'Magnum',
        time: '60',
        use: 'Boil',
        alpha: 9,
      },
      {
        amount: {value: 20, unit: 'g'},
        _id: '5da1de901da13a0a61c5cfe8',
        name: ' Goldings ',
        time: '10',
        use: 'Boil',
        alpha: 12,
      },
      {
        amount: {value: 25, unit: 'g'},
        _id: '5da1de901da13a0a61c5cfe7',
        name: ' Goldings ',
        time: '25',
        use: 'Aroma',
        alpha: 20,
      },
      {
        amount: {value: 35, unit: 'g'},
        _id: '5da1de901da13a0a61c5cfe6',
        name: 'Goldings',
        time: '0',
        use: 'Dry Hop',
        alpha: 12,
      },
      {
        amount: {value: 0, unit: 'g'},
        _id: '5e80acbf07903e3282fe7e47',
        name: 'Ahtanum',
        use: 'Dry Hop',
        time: '0',
        alpha: 0,
      },
    ],
    fermentables: [
      {
        amount: {unit: 'kg', value: 2.5},
        _id: '5da1de901da13a0a61c5cfec',
        name: 'Pilsen 2RP ',
        notes: null,
        addAfterBoil: false,
      },
      {
        amount: {unit: 'kg', value: 0.25},
        _id: '5da1de901da13a0a61c5cfeb',
        name: 'Cara Gold (BTB-CM)',
        notes: null,
        addAfterBoil: false,
      },
      {
        amount: {unit: 'kg', value: 0.2},
        _id: '5da1de901da13a0a61c5cfea',
        name: 'Orge, flocons',
        notes: null,
        addAfterBoil: false,
      },
    ],
    yeasts: [
      {
        amount: {unit: 'kg', value: null},
        _id: '5da1de901da13a0a61c5cfed',
        name: ' New World Strong Ale',
        amountIsWeight: null,
        notes: null,
        inventory: null,
        cultureDate: null,
      },
    ],
    miscs: [],
  },
  fermentation: {
    fermentation: {
      duration: {value: null, unit: 'days'},
      temp: {value: null, unit: '°C'},
    },
    second_fermentation: {
      duration: {value: null, unit: 'days'},
      temp: {value: null, unit: '°C'},
    },
    third_fermentation: {duration: {value: null, unit: 'days'}},
    refinement: {
      duration: {value: null, unit: 'days'},
      temp: {value: null, unit: '°C'},
    },
    bottling: {carbonatation: '', carbonatationUsed: null},
    fermentation_stage: null,
    mash_temp: [],
  },
  batch_volume: {unit: 'L', value: 11},
  author: {
    ref: '5c2a3f57c940dd423b555cc6',
    sub: 'google-oauth2|104916313062605251453',
    name: 'Chapelle',
    firstname: 'Quentin',
  },
  food_pairing: [],
  waters: [],
  styles: [
    {
      abv_max: '7.5',
      abv_min: '5.0',
      og_min: '1.050',
      og_max: '1.075',
      fg_min: '1.010',
      fg_max: '1.018',
      ibu_min: '40',
      ibu_max: '60',
      color_min: '6',
      color_max: '14',
      category_number: '12C',
      style_guide: 'BJCP',
      name: 'English IPA',
      version: '1',
    },
  ],
  _id: '5da1de901da13a0a61c5cfe4',
  created_at: '2019-10-12T14:09:20.701Z',
  updated_at: '2019-10-12T14:09:20.701Z',
  isValid: true,
  abv: null,
  estAbv: null,
  name: 'B13 IPA V4',
  efficiency: '57',
  version: '1',
  type: 'All Grain',
  ibu: null,
  ibu_method: null,
  srm: null,
  ebc: null,
  brewer: 'TEst',
  asst_brewer: null,
  src: 'beerXML',
  og: 1.047,
  fg: 1.009,
  target_fg: null,
  target_og: null,
  boil_time: 60,
  mashs: [
    {
      grainTemp: {unit: 'C', value: 20},
      spargeTemp: {unit: 'C', value: 78},
      tunTemp: {unit: 'C', value: null},
      tunWeight: {unit: 'kg', value: null},
      mashSteps: [
        {
          name: 'EmpÃ¢tage',
          version: '1',
          type: 'Infusion',
          infuseAmount: {unit: 'kg', value: 0},
          stepTime: '90',
          stepTemp: {unit: 'C', value: 68},
          rampTime: null,
          endTime: null,
          description: null,
          waterGrainRatio: null,
          decoctionAmt: null,
          infuseTemp: null,
          displayStepTemp: null,
          displayInfuseAmt: null,
        },
        {
          name: 'Mash Out',
          version: '1',
          type: 'Temperature',
          infuseAmount: {unit: 'kg', value: 0},
          stepTime: '10',
          stepTemp: {unit: 'C', value: 75},
          rampTime: null,
          endTime: null,
          description: null,
          waterGrainRatio: null,
          decoctionAmt: null,
          infuseTemp: null,
          displayStepTemp: null,
          displayInfuseAmt: null,
        },
      ],
      _id: '5da1de901da13a0a61c5cfe5',
      name: 'Infusion simple, beaucoup de corps',
      version: '1',
      ph: '5.4',
      equipAdjust: null,
      notes: null,
      displayGrainTemp: null,
      displayTunTemp: null,
      displaySpargeTemp: null,
      displayTunWeight: null,
    },
  ],
  isPublic: false,
  proGroups: [],
  __v: 13,
};

export default recipe;
