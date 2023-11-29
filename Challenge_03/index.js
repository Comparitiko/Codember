import { readFile, writeFile } from 'fs/promises'

const archivo = await readFile(`${process.cwd()}/Challenge_03/encryption_policies.txt`, { encoding: 'utf-8' })

// Funcion que cuenta las letras que son las mismas que la pasada por parametros y devuelve el numero de veces que se repite
function contarLetras (palabra, letraABuscar) {
  let contador = 0

  const letras = palabra.split('')

  for (const letra of letras) {
    if (letra === letraABuscar) contador++
  }

  return contador
}

let contadorInvalidas = 0
let contadorPalabras = 0

// Splitear el archvio en lineas
const lineas = archivo.split('\n')

// Recorrer linea por linea
for (const linea of lineas) {
  const posLetra = linea.indexOf(':') - 1
  const posGuion = linea.indexOf('-')
  let numMinString = ''
  let numMaxString = ''

  // Meter los numeros de la izquierda del guion en numMin
  for (let i = 0; i < posGuion; i++) {
    numMinString += linea[i]
  }

  // Sacar el numero maximo/minimo de veces que debe salir la letra
  for (let i = posGuion + 1; i < linea.indexOf(' '); i++) {
    numMaxString += linea[i]
  }

  // Convertir el numero en entero
  const numMin = parseInt(numMinString)
  const numMax = parseInt(numMaxString)
  const palabra = linea.split(' ').slice(2).toString()

  const numLetras = contarLetras(palabra, linea[posLetra])

  // Contar las palabra comprobadas y las palabras mal cifradas
  if (numLetras < numMin || numLetras > numMax) contadorInvalidas++
  if (contadorInvalidas === 42) {
    break
  }
  contadorPalabras++
}

// Sacar la palabra mal cifrada numero 42
const palabra = lineas[contadorPalabras].split(' ').slice(2).toString()

// Escribir la palabra en el archivo
await writeFile(`${process.cwd()}/Challenge_03/res_Challenge_03.txt`, palabra, { encoding: 'utf-8' })
