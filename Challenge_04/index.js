import { readFile, writeFile } from 'fs/promises'
const archivo = await readFile(`${process.cwd()}/Challenge_04/files-quarantine.txt`, { encoding: 'utf-8' })
const lineas = archivo.split('\n')
let data

// Funcion que devuelve si la letra esta repetida o no en el string
function letraRepetida (cad, letra) {
  let repeticiones = 0
  for (let i = 0; i < cad.length; i++) {
    if (cad.charAt(i) === letra) repeticiones++
    if (repeticiones === 2) return true
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
  if (res.trim() === cadenas[1].trim()) return true
  else return false
}

let checksumsValidos = 0

// Recorrer todas las lineas del archivo
for (const linea of lineas) {
  if (checksumValido(linea)) checksumsValidos++
  if (checksumsValidos === 34) {
    data = linea.split('-').slice(1).toString().replace('\r', '')
    break
  }
}

await writeFile(`${process.cwd()}/Challenge_04/res_Challenge_04.txt`, data, { encoding: 'utf-8' })
