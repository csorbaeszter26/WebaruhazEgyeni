import { termekekLISTA } from "./adat.js";
import {
  htmlOsszeallitKartyak,
  htmlOsszeallitNav,
  megjelenitKartya,
  megjelenitNav,
  kosar,
  rendezEsemeny,
  torolEsemeny,
  kosarOsszeallit,
  megjelenitKosar,
  szuresEsemeny,
} from "./fuggvenyek.js";
import { rendezAr, rendezDatum, rendezNev, torol } from "./adatkezelo.js";

const kosarLISTA = [];
//ide meghivok mindent is:
init(termekekLISTA, kosarLISTA);
export function init(lista) {
  // csak a termkek megjelenitesevel kacsolats fuggvenyeket

  //megjelenitNav(htmlOsszeallitNav(lista));
  megjelenitKartya(htmlOsszeallitKartyak(lista));

  kosar(lista, kosarLISTA);

  //osszesitesMegjelenit(lista);
  //osszeadas(lista);
}

rendezEsemeny(termekekLISTA);
szuresEsemeny(termekekLISTA);

//kosarINIT(kosarLISTA)
export function kosarINIT(kLISTA) {
  megjelenitKosar(kosarOsszeallit(kLISTA));
  torolEsemeny(kLISTA);
}

//console.log(termekekLISTA);

//rendezes:

//szures:
