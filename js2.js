let numeros = []; 
let i = 1;
while (i <= 20) {
  numeros.push(i);
  i++;
}


for (let j = 0; j < numeros.length; j++) {
  console.log(numeros[j]);
}

for (let j = 0; j < numeros.length; j++) {
  if (numeros[j] % 2 === 0) {
    continue;
  }
  console.log(numeros[j]);
}

for (let j = 0; j < numeros.length; j++) {
  if (numeros[j] === 10) {
    break;
  }
  console.log(numeros[j]);
}

