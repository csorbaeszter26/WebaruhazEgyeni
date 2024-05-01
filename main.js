import { termekekLISTA } from "./adat.js";
import { htmlOsszeallitKartyak, htmlOsszeallitNav, megjelenitKartya, megjelenitNav, kosar, kosarMegjelenit, rendezEsemeny, torolEsemeny } from "./fuggvenyek.js";
import { rendezAr, rendezDatum, rendezNev } from "./adatkezelo.js";


//ide meghivok mindent is:
init(termekekLISTA);
export function init(lista) {
  megjelenitNav(htmlOsszeallitNav(lista));
  megjelenitKartya(htmlOsszeallitKartyak(lista));
  //kosar(termekekLISTA);
  kosarMegjelenit(kosar(termekekLISTA));
  rendezEsemeny();
  //szuresEsemeny();
  torolEsemeny();
}
rendezEsemeny();

//console.log(termekekLISTA);


//rendezes:


//szures:

