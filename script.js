/* 
Snack 1
Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array.
 */
const cars = [
  { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
  { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
  { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
  { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
  { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
  { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
  { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel: 'gpl' },
  { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
  { brand: 'Peugeot', model: '208', fuel: 'metano' }
];

const benzina = [];
const diesel = [];
const rimanenti = [];

// senza metodi

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if(car.fuel === "benzina"){
    benzina.push(car);
  } else if(car.fuel === "diesel"){
    diesel.push(car);
  } else{
    rimanenti.push(car);
  }
}

console.log(benzina);
console.log(diesel);
console.log(rimanenti);

// metodo filter
const autoBenzina = cars.filter((car) => car.fuel === "benzina");
const autoDiesel = cars.filter((car) => car.fuel === "diesel");
const autoRimanenti = cars.filter((car) => car.fuel !== "benzina" && car.fuel !== "diesel");
console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoRimanenti);