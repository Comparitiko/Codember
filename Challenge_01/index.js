import { readFile } from 'fs/promises'

const archivo = await readFile(`${process.cwd()}/Challenge_01/message_01.txt`, { encoding: 'utf-8' })

const palabras = archivo.split(' ')
const animales = []
let coincidencia = false

for (const palabra of palabras) {
  for (const animal of animales) {
    if (palabra.match(animal)) {
      coincidencia = true
    }
  }
  if (coincidencia) animales.push(palabra)
}

console.log(animales)
