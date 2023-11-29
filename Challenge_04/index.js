import { readFile, writeFile } from 'fs/promises'
const archivo = await readFile(`${process.cwd()}/Challenge_04/files-quarantine.txt`, { encoding: 'utf-8' })
const lineas = archivo.split('\n')
let checksumsValidos = 0
let data = ''

// Funcion que devuelve si la letra esta repetida o no en el string
function letraRepetida (cad, letra) {
  for (let i = 0; i < cad.length; i++) {
    if (cad.charAt(i) === letra) return true
  }
  return false
}

// Funcion que pasada una linea devuelve si el checksum es valido o no
function checksumValido (linea) {
  let res = ''
  const cadenas = linea.split('-')

  for (let i = 0; i < cadenas[0].length; i++) {
    if (!letraRepetida(cadenas[0], cadenas[0].charAt(i))) res += cadenas[0].charAt(i)
  }

  if (res === cadenas[0]) return true
  else return false

}

// Recorrer todas las lineas del archivo
for (const linea of lineas) {
  checksumValido(linea)
  if (checksumValido(linea)) checksumsValidos++
  if (checksumsValidos === 33) {
    data = lineas.split('-').slice(1)
  }
}

await writeFile(`${process.cwd()}/Challenge_04/res_Challenge_04.txt`, data, { encoding: 'utf-8' })