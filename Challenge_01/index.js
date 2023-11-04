import { readFile, writeFile } from 'fs/promises'

// Leer archivo message_01.txt
const archivo = await readFile(`${process.cwd()}/Challenge_01/message_01.txt`, { encoding: 'utf-8' })

// Separar el archivo por palabras
const palabras = archivo.split(' ')

// Declarar un array vacio de animales y uno para el resultado
const animales = []
const res = []

// Declaracion de un contador de veces que se repite el animal y un boolean
let contador = 0
let coincidencia = false

// Bucle que recorre el array generado a partir del archivo
for (let i = 0; i < palabras.length; i++) {
  // Bucle que comprueba si hay coincidencias entre la palabra del palabra del archivo con alguna del array animales
  for (let j = 0; j < animales.length; j++) {
    if (palabras[i] === animales[j]) {
      coincidencia = true
    }
  }

  // Si no hay coincidencia mete en el array de animales la palabra del archivo actual
  if (!coincidencia) {
    animales.push(palabras[i])

    // Bucle que cuenta cuantas veces se repite la palabra
    for (let j = 0; j < palabras.length; j++) {
      if (palabras[i] === palabras[j]) {
        contador++
      }
    }

    // Pushear al array resultado el animal y la cantidad de veces que sale
    res.push(`${animales[i]}${contador}`)

    // Devolver el contador a 0 y coincidencia a falso
    contador = 0
    coincidencia = false
  }
}

// Escribir el archivo con el resultado
await writeFile(`${process.cwd()}/Challenge_01/res_Challenge_01.txt`, res, { encoding: 'utf-8' })

console.log(res)
