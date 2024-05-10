import { termekekLISTA } from "./adat.js";
import { init, kosarINIT } from "./main.js";
import { rendezAr, rendezNev, rendezDatum, torol, szures } from "./adatkezelo.js";



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
    //meg kell nezni, h az kivalasztott elem a kosar listaban van e meóar? eldontes
    //ha nincs mg benne, aakor hozzadaunk egy db:1 s ush a kosrhoz
    //ha benne van, akkor annak az elemnek a db kulcst nveljk meg
    let aktELem = termekekLISTA[index];
    let i = 0;
    console.log(aktELem)
    //let dbSzamokBe = document.getElementById(".quantity")
    //let dbSzamok = dbSzamokBe.value;
    while (i < kosarLISTA.length && aktELem.nev != kosarLISTA[i].nev) {
        i++;
    }
    if (i < kosarLISTA.length) {
        //ha már van benne 
        while (kosarLISTA[i].db < 5) {
            //ha a db ertek mar 5 akkor ne lehessen tobbet
            //dbSzamok = 
            kosarLISTA[i].db ++;
        }
      } else {
        aktELem.db = 1;
        kosarLISTA.push(aktELem);
      }

    
    kosarINIT(kosarLISTA)
    let osszar=kosarOsszeg(kosarLISTA)
    const osszesElem = $(".osszesenKiiras");
    osszesElem.html(osszar);
    //kiirjuk az osszarat a html elemben

    //console.log(kosarLISTA);
    //osszesenKI += termekekLISTA[index].ar;
    //megjelenitKosar(kosarOsszeallit(kosarLISTA), termekekLISTA, kosarLISTA);
  //return kosarLISTA
    
    //osszesenELEM.append(` ${termekekLISTA[index].ar}, ${osszesenKI} Ft`);
    // !!!!!!!!!!!!!! hogy legyenek egymas mellett...?:(
  });
}

export function kosarOsszeallit(kLista) {
  let txt = "<table class='table'><tbody>";
  
  kLista.forEach((element, i) => {
    txt += `<tr>`
    txt += `<td>${element.nev}: </td><td>${element.ar} Ft</td>`;
    txt += `<td><input type="number" class="quantity" id = "A${i}" name="quantity" min="1" max="5" value = ${element.db}><label for="quantity">db</label></td>`;
    //hogy rendelem hozza a dbot az elementhez??
    txt += `<td><button id="${i}" type="button" class="torlesGOMB">Törlés</button></td>`
    txt += `</tr>`;
  });
  //btn bg-white color-black
  txt += "</tbody></table>";
  //console.log(txt);
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
/*export function kosarOsszeg(kosarLISTA){
    let osszesseg = 0;

    kLista.forEach((element, i) => {
        osszesseg = osszesseg + element[db];
    });
    console.log(osszesseg)
    return osszesseg;
    //for (let index = 0; index < kosarLISTA.length; index++) {
    //    osszesseg ++ index.db;
    //    const element = array[index];
    //    kosarLISTA
    //}

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
/*export function osszeadas(kosarLISTA) {
    let osszesTomb = [];
    let osszeg = 0;
    const gombELEM = $(".gomb");
    gombELEM.on("click", function (event) {
        let index = event.target.id;
        osszesTomb.push(index.ar);
        console.log(osszesTomb);
    });

}*/



//*********************************************************
//torlesesemeny:
//termekekLISTA, kosarLISTA
export function torolEsemeny( kLista) {
    console.log(kLista)
  const torolGOMB = $(".torlesGOMB");
  torolGOMB.on("click", function (event) {
    let id = event.target.id;
    //const LISTA = torol(termekekLISTA, id);
    console.log(kLista, id)
    torol(kLista, id);
    //let osszar=kosarOsszeg(kLista)
    //const osszesElem = $(".osszesenKiiras");
    //osszesElem.html(osszar);
    kosarINIT(kLista);
  
  });
}

//tablazatosszeallit: (adminbol kimasolom)
