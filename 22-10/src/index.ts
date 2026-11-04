
import { Cachorro } from "./Cachorro";
const cachorro:Cachorro = new Cachorro ("Pepe", "vira-lata", 8)
const outroCachorro:Cachorro = new Cachorro("Margarida", "vira-lata", 14)
const maisCachorro:Cachorro = new Cachorro("Baby", "Kokoni", 10)

console.log(cachorro.getNome());
console.log(cachorro.getRaca());
console.log(cachorro.getPeso());

console.log(outroCachorro.getNome());
console.log(outroCachorro.getRaca());
console.log(outroCachorro.getPeso());

console.log(maisCachorro.getNome());
console.log(maisCachorro.getRaca());
console.log(maisCachorro.getPeso());