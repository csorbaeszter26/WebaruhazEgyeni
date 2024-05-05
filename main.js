import { termekekLISTA } from "./adat.js";
import { htmlOsszeallitKartyak, htmlOsszeallitNav, megjelenitKartya, megjelenitNav, kosar, rendezEsemeny, torolEsemeny, kosarOsszeallit, megjelenitKosar } from "./fuggvenyek.js";
import { rendezAr, rendezDatum, rendezNev, torol } from "./adatkezelo.js";


//ide meghivok mindent is:
init(termekekLISTA);
export function init(lista) {
  //megjelenitNav(htmlOsszeallitNav(lista));
  megjelenitKartya(htmlOsszeallitKartyak(lista));
  //kosar(termekekLISTA);
  kosar(termekekLISTA);
  //osszesitesMegjelenit();
  
  //szuresEsemeny();
  torolEsemeny();
}
rendezEsemeny(termekekLISTA);

//console.log(termekekLISTA);


//rendezes:


//szures:

