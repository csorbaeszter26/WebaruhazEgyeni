import { termekekLISTA } from "./adat.js";
import { init, kosarINIT } from "./main.js";
import {
  rendezAr,
  rendezNev,
  rendezDatum,
  torol,
  szures,
} from "./adatkezelo.js";

//*********************************************************
//menu: OK
//(amugy felesleges de ha kitorlom valami elromlik szoval itt marad:) )
export function htmlOsszeallitNav() {
  let menuLista = ["Termékeink", "Kosár", "Személyes Adatok"];
  let txtN = "";
  let jeloles = 0;
  txtN += `<div class='container-fluid'>`;
  txtN += `<ul class="navbar-nav">`;
  for (let index = 0; index < menuLista.length; index++) {
    txtN += `<li class="nav-item"><a class="${
      jeloles + 1
    } nav-link" href='index.html'>${menuLista[index]}</a></li>`;
  }
  txtN += `</ul>`;
  txtN += `</div>`;
  return txtN;
}

//megjelenit menu: OK
export function megjelenitNav(txtN) {
  const menuDivELEM = $(".menu");
  menuDivELEM.html(txtN);
}

//*********************************************************
//kartyak: OK
export function htmlOsszeallitKartyak(termekekLISTA) {
  let txt = "";
  termekekLISTA.forEach((element, i) => {
    txt += `<div class="card col-md-4 text-white bg-dark mb-3 border-danger mb-3">`;
    txt += `<div class="card-header">`;
    txt += `<h1 id=${i} class="nevClassja">${element.nev}</h1>`;
    txt += `</div>`;

    txt += `<div class="card-body">`;
    txt += `<h6 class="card-subtitle mb-2 text-muted-white">${element.hely}</h6>`;
    txt += `<h6 class="card-subtitle mb-2 text-muted-white">${element.datum}</h6>`;
    txt += `<img class="card-img-top" src="${element.kep}" alt="...">`;
    txt += `<p class="card-text">${element.leiras}</p>`;
    txt += `</div>`;

    txt += `<div class="card-footer">`;
    txt += `<h4 id="arIdje" class="card-text">${element.ar} Ft</h4>`;
    txt += `<button id=${i} type="button" class="gomb btn btn-success btn-danger">Kosárba</button>`;
    txt += `</div>`;
    txt += `</div>`;
  });

  return txt;
}

//megjelenit kartyak: OK
export function megjelenitKartya(txt) {
  const menuDivELEM = $(".kartyakEbben");
  menuDivELEM.html(txt);
}

//*********************************************************
//szures: ok
export function szuresEsemeny(lista) {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let kereseoSzoveg = keresoELEM.val();
    const szLISTA = szures(lista, kereseoSzoveg);
    console.log(szLISTA);
    init(szLISTA);
  });
}

//*********************************************************
//rendezes: OK
export function rendezEsemeny(lista) {
  const nevELEMnov = $("#nevNovekno");
  const nevELEMcsok = $("#nevCsokkeno");
  const arELEMnov = $("#arNovekvo");
  const arELEMcsok = $("#arCsokkeno");
  const datumELEMnov = $("#datumNovekvo");
  const datumELEMcsok = $("#datumCsokkeno");

  nevELEMnov.on("click", function () {
    const rLISTA = rendezNev(lista, 1, "nev");
    init(rLISTA);
  });
  nevELEMcsok.on("click", function () {
    const rLISTA = rendezNev(lista, -1, "nev");
    init(rLISTA);
  });
  arELEMnov.on("click", function () {
    const rLISTA = rendezAr(lista, 1);
    init(rLISTA);
  });
  arELEMcsok.on("click", function () {
    const rLISTA = rendezAr(lista, -1);
    init(rLISTA);
  });
  datumELEMnov.on("click", function () {
    const rLISTA = rendezNev(lista, 1, "datum");
    init(rLISTA);
  });
  datumELEMcsok.on("click", function () {
    const rLISTA = rendezNev(lista, -1, "datum");
    init(rLISTA);
  });
}

//*********************************************************
//kosar!!: OK
export function kosar(termekekLISTA, kosarLISTA) {
  const gombELEM = $(".gomb");
  //const osszesenELEM = $(".osszesenKiiras");
  gombELEM.on("click", function (event) {
    let index = event.target.id;
    //meg kell nezni, h az kivalasztott elem a kosar listaban van e mar? eldontes tetel
    //ha nincs meg benne, akor hozzaadunk egy db:1 es push a kosarhoz
    //ha benne van, akkor annak az elemnek a db kulcsat noveljuk meg
    let aktELem = termekekLISTA[index];
    let i = 0;
    console.log(aktELem);
    //let dbSzamokBe = document.getElementById(".quantity")
    //let dbSzamok = dbSzamokBe.value;
    while (i < kosarLISTA.length && aktELem.nev != kosarLISTA[i].nev) {
      i++;
    }
    if (i < kosarLISTA.length) {
      //ha már van benne
      //while (kosarLISTA[i].db < 5) {
      //ha a db ertek mar 5 akkor ne lehessen tobbet
      kosarLISTA[i].db++;
      console.log(kosarLISTA[i].db);
      //}
    } else {
      aktELem.db = 1;
      kosarLISTA.push(aktELem);
    }

    kosarINIT(kosarLISTA);
    osszegMegjelenit(kosarLISTA);

    //kiirjuk az osszarat a html elemben

    //osszesenELEM.append(` ${termekekLISTA[index].ar}, ${osszesenKI} Ft`);
  });
}

export function kosarOsszeallit(kLista) {
  let txt = "<table class='table'><tbody>";

  kLista.forEach((element, i) => {
    txt += `<tr>`;
    txt += `<td>${element.nev}: </td><td>${element.ar} Ft</td>`;
    txt += `<td><input type="number" class="mennyiDB quantity" id = "A${i}" name="quantity" min="1" value = ${element.db}><label for="quantity">db</label></td>`;
    txt += `<td><button id="${i}" type="button" class="torlesGOMB">Törlés</button></td>`;
    txt += `</tr>`;
  });
  //btn bg-white color-black
  txt += "</tbody></table>";
  return txt;
}
/* (felsorolasos elso kiserlet, elvetve mert hogynez mar ki)
export function kosarOsszeallit(kLista) {
    let txt = "<ul>";
    kLista.forEach((element, i) => {
      txt += `<li>${element.nev}: ${element.ar} Ft <button id="${i}" type="button" class="torlesGOMB" >Torles</button></li>`;
    });
    //btn bg-white color-black
    txt += "</ul>";
    console.log(txt);
    return txt;
  }*/
export function megjelenitKosar(txt) {
  const kosarDivELEM = $(".asideKosar");
  kosarDivELEM.html(txt);
}

//*********************************************************
//osszesitett ar:
export function kosarOsszeg(kLista) {
  let ennyiOsszeg = 0;
  kLista.forEach((element) => {
    ennyiOsszeg += element.db * element.ar;
  });
  return ennyiOsszeg;
}

export function osszegMegjelenit(kLista) {
  let osszar = kosarOsszeg(kLista);
  const osszesElem = $(".osszesenKiiras");
  if (osszar > 0) {
    osszesElem.html(
      "Összesen: " +
        osszar +
        " Ft" +
        `<br><button id="veszem" type="button" class="gomb veszem btn btn-success btn-danger">Megveszem</button>`
    );
  } else if (osszar === 0) {
    osszesElem.html("");
  }
}

//*********************************************************
// emeli a dbot a kosarban: NEMJO
export function darabEmelkedeseKattEsemeny(kLista) {
  const dbELEM = $(".mennyiDB");
  //const ertekeDbnak = $(".noveles");
  dbELEM.on("change", function (event) {
    let ertek = dbELEM.val();
    console.log(ertek);

    
  });
}

//*********************************************************
//torlesesemeny:
export function torolEsemeny(kLista) {
  console.log(kLista);
  const torolGOMB = $(".torlesGOMB");
  torolGOMB.on("click", function (event) {
    let id = event.target.id;
    //const LISTA = torol(termekekLISTA, id);
    console.log(kLista, id);
    torol(kLista, id);

    kosarINIT(kLista);
    osszegMegjelenit(kLista);
  });
}

//*********************************************************
// urlap megjelenik???? passz, nem kell nezni de azert megprobaltam

export function megjelenitUrlap(txt) {
  const urlapDivELEM = $(".asideKosar");
  const urlapELEM = $(".veszem");
  urlapELEM.on("click", function (event) {
    console.log("urlap");
    let i = event.target.id;
    urlapDivELEM.html(txt);
  });
}
//export function urlapEsemeny(txt){
//    const urlapELEM = $(".veszem");
//    urlapELEM.on("click", function (event) {
//        let i = event.target.id;
//        console.log("urlap")
//        megjelenitUrlap(urlapOsszeallit(txt));
//    });
//}

export function urlapOsszeallit() {
  let txt = "";

  txt += `<form>`;
  txt += `<div class="form-group"><label for="EmailBe">Email cím</label><input type="email" class="form-control" id="EmailBe" aria-describedby="emailHelp" placeholder="Email cím"></div>`;
  txt += `<div class="form-group"><label for="VezetekNevBe">Vezetéknév</label><input type="vezeteknev" class="form-control" id="VezetekNevBe" aria-describedby="emailHelp" placeholder="Vezetéknév"></div>`;
  txt += `<div class="form-group"><label for="KeresztNevBe">Keresztnév</label><input type="keresztnev" class="form-control" id="KeresztNevBe" aria-describedby="emailHelp" placeholder="Keresztnév"></div>`;
  txt += `<div data-mdb-input-init class="form-outline"><input type="tel" id="typePhone" class="form-control" /><label class="form-label" for="typePhone">Telefonszám</label></div>`;
  txt += `<div class="form-group"><input type="orszag" class="form-control" id="orszag" aria-describedby="emailHelp" placeholder="Ország"></div>`;
  txt += `<div class="form-group"><input type="iranyitoszam" class="form-control" id="iranyitoszam" aria-describedby="emailHelp" placeholder="Irányítószám"></div>`;
  txt += `<div class="form-group"><input type="varos" class="form-control" id="varos" aria-describedby="emailHelp" placeholder="Város"></div>`;
  txt += `<div class="form-group"><input type="utcaHazszam" class="form-control" id="utcaHazszam" aria-describedby="emailHelp" placeholder="Utca, házszám"></div>`;
  txt += `<div class="form-check"><input class="form-check-input" type="radio" name="fizetes" id="fizetesModszer" value="option1" checked><label class="form-check-label" for="fizetesModszer">Simple Pay</label></div>`;
  txt += `<div class="form-check"><input class="form-check-input" type="radio" name="fizetes" id="fizetesModszer" value="option2" checked><label class="form-check-label" for="fizetesModszer">SZÉP kártya</label></div>`;
  txt += `<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"><label class="form-check-label" for="defaultCheck1" required>A termék vásárlásával kijelentem, hogy elfogadom az Általános szerződési feltételeket, a Visszatérítési szabályzatot és az Adatkezelési Tájékoztatót.</label></div>`;
  txt += `<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="defaultCheck2"><label class="form-check-label" for="defaultCheck2">Szeretnék feliratkozni a hírlevélre.</label></div>`;
  txt += `</form>`;
  return txt;
}
