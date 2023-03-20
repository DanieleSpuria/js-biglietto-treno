const km = prompt('Inserire numero km da percorrere');

const età = prompt('Inserire età del passeggero');

const prezzoKm = 0.21;

const parziale = prezzoKm * km;

let totale = "";

if (età < 18){
  totale = ( parziale - ((parziale / 100) * 20 ));
}else if (età > 65){
  totale = ( parziale - ((parziale / 100) * 40 ));
}else{
  totale = parziale;
}



console.log(km, età, parziale, totale);