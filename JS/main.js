
let distance = prompt ("Quanti chilometri vuoi percorrere ?");
let age = prompt("Inserisci la tua età");
let km_price = 0.21 ;
let finalprice = distance * km_price;

if(!isNaN(distance) && Number(age)<18){
 
    
       let sconto = finalprice * 0.20;

        alert(`Hai diritto a uno sconto del 20%! Il prezzo finale è €${finalprice.toFixed(2)}`);

    }else if (!isNaN(distance) && Number(age)>65){

        let sconto = finalprice * 0.40;

        alert(`Hai diritto a uno sconto del 40%! Il prezzo finale è €${finalprice.toFixed(2)}`);
    }else{
        console.log(finalprice)
}
