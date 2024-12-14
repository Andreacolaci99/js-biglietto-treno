
let distance = prompt ("Quanti chilometri vuoi percorrere ?");
let age = prompt("Inserisci la tua età");
let km_price = 0.21 ;
let finalprice = distance * km_price;
const scontogiovani = finalprice - (finalprice * 0.20);
const scontoanziani = finalprice - (finalprice * 0.40);

if (!isNaN(distance)){

     if (Number(age)<18){
 
    alert(`Hai diritto a uno sconto del 20%! Il prezzo finale è € ${scontogiovani.toFixed(2)}`);

    }else if (!isNaN(distance) && Number(age)>65){

    alert(`Hai diritto a uno sconto del 40%! Il prezzo finale è € ${scontoanziani.toFixed(2)}`);

    }else {
        alert(`Pagherai tariffa intera di € ${finalprice.toFixed(2)}`);
    }
}
 