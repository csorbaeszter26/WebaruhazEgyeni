export function rendezNev(lista, irany,kulcs) {
  lista.sort(function (e1, e2) {
    let eredmeny = 1;
    if (e1[kulcs] < e2[kulcs]) {
      eredmeny = -1;
    }
    return eredmeny * irany;
  });
  return lista;
}

export function rendezAr(lista, irany) {
  lista.sort(function (e1, e2) {
    
    return (e1.ar - e2.ar)  * irany;
  });
  return lista;
}

// datumra van kulon valami mas????
export function rendezDatum(lista, irany) {
  lista.sort(function (e1, e2) {
    let eredmeny = 1;
    if (e1.datum < e2.datum) {
      eredmeny = -1;
    }
    return eredmeny * irany;
  });
  return lista;
}

export function szures(lista, keresoSzoveg) {
  // hogy keresek nem csak nevre???

  const szurtLISTA = lista.filter(function (koncert) {
    for (let i = 0; i < lista.length; i++) {
      for (let j = 0; j < koncert.nev.length; j++) {
        if (koncert.nev[j] == "á") {
          koncert.nev[j] == "a";
        } else if (koncert.nev[j] == "é") {
          koncert.nev[j] == "e";
        } else if (koncert.nev[j] == "í") {
          koncert.nev[j] == "i";
        } else if (
          koncert.nev[j] == "ó" ||
          koncert.nev[j] == "ö" ||
          koncert.nev[j] == "ő"
        ) {
          koncert.nev[j] == "o";
        } else if (
          koncert.nev[j] == "ú" ||
          koncert.nev[j] == "ü" ||
          koncert.nev[j] == "ű"
        ) {
          koncert.nev[j] == "u";
        }
      }
    }
    return koncert.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLISTA;
}

export function torol(lista, id) {
  lista.splice(id, 1);
  return lista;
  /* splice adott indextől eltávolít annyit, amennyit akarunk, itt egyet */
}
