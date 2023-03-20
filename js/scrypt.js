const km = prompt('Inserire numero km da percorrere');

const eta = prompt('Inserire età del passeggero');

const prezzoKm = 0.21;

const parziale = prezzoKm * km;

let totale = parziale;

if (eta < 18){
  totale = ( parziale - ((parziale / 100) * 20 ));
}else if (eta > 64){
  totale = ( parziale - ((parziale / 100) * 40 ));
}

let message = `
Il costo totale del viaggio sarà di ${totale.toFixed(2)}€
`

document.getElementById('output').innerHTML = message;

console.log(km, eta, parziale, totale);