import { termekekLISTA } from "./adat.js";
import { init } from "./main.js";
import { rendezAr, rendezNev, rendezDatum } from "./adatkezelo.js";

//menu:
export function htmlOsszeallitNav() {
  let menuLista = ["Termékeink", "Kosár", "Személyes Adatok"];
  let txtN = "";
  txtN += `<div class='container-fluid'>`;
  txtN += `<ul class="navbar-nav">`;
  for (let index = 0; index < menuLista.length; index++) {
    txtN += `<li class="nav-item"><a class="nav-link" href='index.html'>${menuLista[index]}</a></li>`;
  }
  txtN += `</ul>`;
  txtN += `</div>`;
  return txtN;
}

//megjelenit menu:
export function megjelenitNav(txtN) {
  const menuDivELEM = $(".menu");
  menuDivELEM.html(txtN);
}

//kartyak:
export function htmlOsszeallitKartyak(termekekLISTA) {
  let txt = "";
  termekekLISTA.forEach((element, i) => {
    txt += `<div class="card col-md-4 text-white bg-dark mb-3 border-danger mb-3">`;
    txt += `<div class="card-header">`;
    txt += `<h1 id="nevIdje">${element.nev}</h1>`;
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
    //txt += `<h5 class="card-link">${element.ar} Ft</h5>`;
    txt += `</div>`;
    txt += `</div>`;
  });

  return txt;
}

//megjelenit kartyak:
export function megjelenitKartya(txt) {
  const menuDivELEM = $(".kartyakEbben");
  menuDivELEM.html(txt);
}

//szures: ??????????????
export function szuresEsemeny() {
  const keresoELEM = $("#szures");
  keresoELEM.on("keyup", function () {
    let kereseoSzoveg = keresoELEM.val();
    const szLISTA = szures(emberekLISTA, kereseoSzoveg);
    console.log(szLISTA);
    init(szLISTA);
  });
}

//rendezes: ???????
let irany = 1;
export function rendezEsemeny() {
  const nevELEMnov = $("#nevNovekno");
  const nevELEMcsok = $("#nevCsokkeno");
  const arELEMnov = $("#arNovekvo");
  const arELEMcsok = $("#arCsokkeno");
  const datumELEMnov = $("#datumNovekvo");
  const datumELEMcsok = $("#datumCsokkeno");

  nevELEMnov.on("click", function () {
    const rLISTA = rendezNev(emberekLISTA, irany);
    init(rLISTA);
  });
  nevELEMcsok.on("click", function () {
    const rLISTA = rendezNev(emberekLISTA, irany);
    init(rLISTA);
    irany *= -1;
  });
  arELEMnov.on("click", function () {
    const rLISTA = rendezAr(emberekLISTA, irany);
    init(rLISTA);
  });
  arELEMcsok.on("click", function () {
    const rLISTA = rendezNev(emberekLISTA, irany);
    init(rLISTA);
    irany *= -1;
  });
  datumELEMnov.on("click", function () {
    const rLISTA = rendezNev(emberekLISTA, irany);
    init(rLISTA);
  });
  datumELEMcsok.on("click", function () {
    const rLISTA = rendezNev(emberekLISTA, irany);
    init(rLISTA);
    irany *= -1;
  });
}

//kosar!!:
export function kosar(termekekLISTA) {
  const kosarLISTA = [];
  const gombELEM = $(".gomb");
  const asideKosar = $(".asideKosar");
  gombELEM.on("click", function (event) {
    let index = event.target.id;
    kosarLISTA.push(termekekLISTA[index]);
    console.log(kosarLISTA);
    // asideKosar.append(termekekLISTA[index].nev,termekekLISTA[index].ar);
  });
  return kosarLISTA;
}
//const gombELEM = $(".gomb");

//gombELEM.on("click", function () {
//kosarMegjelenit(kosarLISTA);
//console.log(lista);
//});

export function kosarMegjelenit(lista) {
  //html listat osszeallitok es azt jelenitem
}
//kosar:
export function kosarr(lista) {
  //const kosarLISTA = [];

  const nevELEM = $("#nevIdje");
  const arELEM = $("#arIdje");
  const gombELEM = $("#gomb");
  const adatOBJ = {
    nev: "",
    ar: 0,
  };

  gombELEM.on("click", function (event) {
    event.preventDefault();

    adatOBJ.nev = nevELEM.val();
    adatOBJ.ar = Number(arELEM.val());

    console.log(adatOBJ);

    const validELEM = $(".valid-feedback");
    const nevValidE = validELEM.eq(0).css("display") !== "none";
    const arValidE = validELEM.eq(1).css("display") !== "none";
    console.log(nevValidE, arValidE);
    if (nevValidE && arValidE) {
      lista.push(adatOBJ);
      init(lista);
    } else {
      console.log("Hibás adatok");
    }
  });
}

//kosaresemeny
//kosarbatesz fuggveny, kosarlista

//torlesesemeny:
export function torolEsemeny() {
  const torolGOMB = $(".kuka");
  torolGOMB.on("click", function (event) {
    let id = event.target.id;
    const LISTA = torol(emberekLISTA, id);
    init(LISTA);
  });
}

//tablazatosszeallit: (adminbol kimasolom)
