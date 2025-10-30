let nombre = "Luis Felipe Sierra";
let nota1 = 4.0;
let nota2 = 3.5;
let nota3 = 3.0;

let promedio = (nota1 + nota2 + nota3) / 3;

console.log("Estudiante: " + nombre);
console.log("Notas: ", nota1, nota2, nota3);
console.log("Promedio: " + promedio.toFixed(2));

if (promedio >= 3.5) {
  console.log("Resultado: Aprobó ✅");
} else {
  console.log("Resultado: No aprobó ❌");
}
