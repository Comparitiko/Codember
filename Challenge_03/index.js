import {readFile, writeFile} from 'fs/promises';

const archivo = await readFile(`${process.cwd()}/Challenge_03/encryption_policies.txt`, {encoding: 'utf-8'})

// Funcion que cuenta las letras que son las mismas que la pasada por parametros y devuelve el numero de veces que se repite
function contarLetras (palabra, letraABuscar) {
  let contador = 0

  let letras = palabra.split('')

  for (const letra of letras) {
    if (letra === letraABuscar) contador++
  }

  return contador
}

// Splitear el archvio en lineas
const lineas = archivo.split('\n')

// Recorrer linea por linea
for (const linea of lineas) {
  let posLetra = linea.indexOf(':') - 1
  let posGuion = linea.indexOf('-')
  let numMinString = ''
  let numMaxString = ''

  // Meter los numeros de la izquierda del guion en numMin
  for (let i = 0; i < posGuion; i++) {
    numMinString += linea[i]
  }

  for (let i = posGuion + 1; i < linea.indexOf(' '); i++) {
    numMaxString += linea[i]
  }

  const numMin = parseInt(numMinString)
  const numMax = parseInt(numMaxString)
  const palabra = linea.split(' ').slice(2).toString()

  let numLetras = contarLetras(palabra, linea[posLetra])
  console.log(palabra)
  console.log(`${palabra}: ${numMin}-${numMax}`)
}