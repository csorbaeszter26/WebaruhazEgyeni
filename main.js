import { termekekLISTA } from "./adat.js";
import { htmlOsszeallitKartyak, htmlOsszeallitNav, megjelenitKartya, megjelenitNav, kosar, rendezEsemeny, torolEsemeny, kosarOsszeallit, megjelenitKosar, osszeadas } from "./fuggvenyek.js";
import { rendezAr, rendezDatum, rendezNev, torol } from "./adatkezelo.js";


//ide meghivok mindent is:
init(termekekLISTA);
export function init(lista) {
  //megjelenitNav(htmlOsszeallitNav(lista));
  megjelenitKartya(htmlOsszeallitKartyak(lista));
  //kosar(termekekLISTA);
  kosar(termekekLISTA);
  //osszesitesMegjelenit(lista);
  osszeadas(lista);
  //szuresEsemeny();
  torolEsemeny();
}
rendezEsemeny(termekekLISTA);

//console.log(termekekLISTA);


//rendezes:


//szures:

