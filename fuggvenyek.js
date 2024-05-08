import { termekekLISTA } from "./adat.js";
import { init } from "./main.js";
import { rendezAr, rendezNev, rendezDatum, torol, szures } from "./adatkezelo.js";
const kosarLISTA = [];

//*********************************************************
//menu: OK
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

//megjelenit kartyak: OK
export function megjelenitKartya(txt) {
  const menuDivELEM = $(".kartyakEbben");
  menuDivELEM.html(txt);
}

//*********************************************************
//szures: ??????????????
export function szuresEsemeny() {
  const keresoELEM = $("#szuro");
  keresoELEM.on("keyup", function () {
    let kereseoSzoveg = keresoELEM.val();
    const szLISTA = szures(termekekLISTA, kereseoSzoveg);
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
export function kosar(termekekLISTA) {
  const gombELEM = $(".gomb");
  //const osszesenELEM = $(".osszesenKiiras");
  gombELEM.on("click", function (event) {
    let index = event.target.id;
    kosarLISTA.push(termekekLISTA[index]);
    console.log(kosarLISTA);
    //osszesenKI += termekekLISTA[index].ar;
    megjelenitKosar(kosarOsszeallit(kosarLISTA));
  //return kosarLISTA
    
    //osszesenELEM.append(` ${termekekLISTA[index].ar}, ${osszesenKI} Ft`);
    // !!!!!!!!!!!!!! hogy legyenek egymas mellett...?:(
  });
}

export function kosarOsszeallit(kLista) {
  let txt = "<table class='table'><tbody>";
  kLista.forEach((element, i) => {
    txt += `<tr>`
    txt += `<td>${element.nev}: ${element.ar} Ft</td>`;
    txt += `<td><button id="${i}" type="button" class="torlesGOMB">Törlés</button></td>`
    txt += `</tr>`;
  });
  //btn bg-white color-black
  txt += "</tbody></table>";
  console.log(txt);
  return txt;
}
/*export function kosarOsszeallit(kLista) {
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
/*
export function osszesitesMegjelenit(kosarLISTA) {
    
    let osszesen = 0;
  const osszesenELEM = $(".osszesenKiiras");
  const gombELEM = $(".gomb");
  gombELEM.on("click", function (event) {
    let index = event.target.id;
    console.log(osszesenKI);
    for (index = 0; index < kosarLISTA.length; index++) {
        osszesenKI += kosarLISTA.ar;
        return osszesenKI
    }
    //lista.forEach(element => {
    //    osszesenKI += ;
    //});
    console.log(osszesenKI);

    //for (index = 0; index < lista.length; i++){
      //  osszesenKI += lista[i].ar;
    //}
    
      
    });

    //osszesenKI.push(termekekLISTA[index].ar);
    
  
}
*/
export function osszeadas(kosarLISTA) {
    let osszesTomb = [];
    let osszeg = 0;
    const gombELEM = $(".gomb");
    gombELEM.on("click", function (event) {
        let index = event.target.id;
        osszesTomb.push(index.ar);
        console.log(osszesTomb);
    });

}



//*********************************************************
//torlesesemeny:
//termekekLISTA, kosarLISTA
export function torolEsemeny() {
  const torolGOMB = $(".torlesGOMB");
  torolGOMB.on("click", function (event) {
    let id = event.target.id;
    //const LISTA = torol(termekekLISTA, id);
    torol(kosarLISTA, id);
    console.log(kosarLISTA)
    init(termekekLISTA, kosarLISTA);
    console.log(kosarLISTA)
  });
}

//tablazatosszeallit: (adminbol kimasolom)
