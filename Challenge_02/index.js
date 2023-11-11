import { readFile, writeFile } from 'fs/promises';

// Leer el mensaje del archivo
const archivo = await readFile(`${process.cwd()}/Challenge_02/message_02.txt`, {encoding: 'utf-8'})

// Splitear el archivo por cada caracter que haya
const simbolos = archivo.split("")

// Variable string que guardara el resultado
let resString = ''

// Variable que se va a ir imprimiendo, sumando, restando o multiplicando
let res = 0

// por cada simbolo hacer lo que pida el problema
for (const simbolo of simbolos) {
  if (simbolo === '#') res++
  else if (simbolo === '@') res--
  else if (simbolo === '*') res *= res
  else if (simbolo === '&') resString += res
}

// Escribir el resultado en un archivos del directorio de este challenge
await writeFile(`${process.cwd()}/Challenge_02/res_Challenge_02.txt`, resString, {encoding: 'utf-8'})