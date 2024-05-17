# Webáruház

## Specifikáció


## Függvények

- init,

- kosarINIT,

- htmlOsszeallitKartyak,
Ebben a bootsrtap segítségével összeállítjuk az adatokkal teli kártyákat, a termékLista alapján, forEach függvény segítségével

- megjelenitKartya,
Ebben a korábban létrehozott kártyákat jelenítem meg az oldalon

- htmlOsszeallitNav, megjelenitNav,
A menüt állítja össze, írja ki

- kosar,
Ez a fő kosár függvény, mely kattintás eseményre a kiválasztott terméknek a megadott adatait belerakja a kosárListába
Ezzel együtt megnézi while ciklus és elágazás segítségével, hogy benne van e már a listában az adat, amelyet bele akarunk tenni, ha nincs, akkor írja csak ki újra
Használja a darab változót, amely segítségével követni tudjuk a kosárba tett adatok mennyiségét
Ezt a darab változót növeljük akkor, amikor már létezik a kosárListában az adat, amelyet bele próbálunk tenni
A kosarINIT és az összeg megjelenítésére szolgáló függvényt 

- kosarOsszeallit,
Összeállítja és kiiratáshoz felkészíti azokat az elemeket, melyek később ez alapján fognak bekerülni a kosárListába
Ez egy táblázat, forEach függvény segítségével összeállítva, kosárListát használva paraméterként

- megjelenitKosar,
Az aside elemben megjeleníti a kosárLista tartalmát

- rendezEsemeny,


- torolEsemeny,

- szuresEsemeny,
- urlapOsszeallit,
- megjelenitUrlap,
- darabEmelkedeseKattEsemeny

- kártyák létrehozása divekkel htmlben, bele bootstrap, képek, leírás, gomb- osszeallit
-- html osszeallit(lista) txt
-- megjelenit

- gombnyomásra kosárba kerül a kiválasztott termék
-- adathozzaadas(lista) -> kosarbalista

- szűrés
-- szures(lista, keresoszoveg) -> szurtlista

- rendezés
--rendezes(lista) -> rendezettlista

- kosárban: táblázat- osszeallit

- menu- osszeallit

- torles a kosarbol gombnyomasra
-- torol(lista, id) 

listák:
- termekekLista
- kosarLista
- rendezettLista
- szurtLista


fuggvenynev, arameterek, visszateresi ertek, ...