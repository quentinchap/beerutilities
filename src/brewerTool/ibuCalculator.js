import math from './mathjs';

function convertHopParam(hop) {
  let w = 0;
  let duration = 0;
  let al = 0;

  if (hop.weight) {
    w = parseFloat(hop.weight);
  } else if (hop && hop.amount) {
    let hopWeigth = math.unit(
      hop.amount ? hop.amount.value : 0,
      hop.amount ? hop.amount.unit : 'g',
    );
    w = math.number(hopWeigth, 'g');
  }

  if (hop.alpha) {
    al = parseFloat(hop.alpha) / 100;
  } else if (hop.alphaMin && hop.alphaMax) {
    al = (parseFloat(hop.alphaMin) + parseFloat(hop.alphaMax) / 2) / 100;
  }

  duration = parseFloat(hop.time);
  return {w, duration, al};
}

export function calculateIbu(hops, gravity, volume) {
  let res = 0;
  let usages = [];
  let vol = parseFloat(volume);
  let grav = parseFloat(gravity);
  let ibu = 0;
  let usage = 0;
  let cDensity = 0;

  hops.map(h => {
    let {w, duration, al} = convertHopParam(h);
    usage = 0;
    ibu = 0;
    if (h.use === 'First Wort') {
      duration = duration * 1.1;
    }
    if (h.use !== 'Dry Hop' && h.use !== 'Aroma') {
      usage =
        1.65 *
        Math.pow(0.000125, grav - 1) *
        ((1 - Math.exp(-0.04 * duration)) / 4.15);

      cDensity = 1 + (grav - 1.05) / 0.2;

      ibu = (w * usage * al * 1000) / (vol * cDensity);
    }
    res += ibu;

    usages.push({name: h.name, usage});
    return;
  });

  return {ibu: res, usages};
  /*
  IBU 111.26
  Usage 23.07 %
  L'estimation de l'indice d'amertume totale de la bière est de 111.26 IBU
  IBUs = [1.65 * 0.000125(densité -1) ] * [ ( 1- exp(-0.04 x durée) ) /4.15 ] * (% d'acides alpha * masse du houblon * 1000) / volume de moût*/
}
