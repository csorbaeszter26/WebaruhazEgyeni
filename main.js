import { termekekLISTA } from "./adat.js";
import { htmlOsszeallitKartyak, htmlOsszeallitNav, megjelenitKartya, megjelenitNav, kosar } from "./fuggvenyek.js";


//ide meghivok mindent is:
init(termekekLISTA);
export function init(lista) {
  megjelenitNav(htmlOsszeallitNav(lista));
  megjelenitKartya(htmlOsszeallitKartyak(lista));
  //rendezEsemeny();
  //szuresEsemeny();
  //torolEsemeny();
}

kosar(termekekLISTA);
console.log(termekekLISTA);


//rendezes:


//szures:

