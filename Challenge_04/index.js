import { readFile, writeFile } from 'fs/promises'

const archivo = await readFile(`${process.cwd()}/Challenge_04/files-quarantine.txt`, { encoding: 'utf-8' })

const lineas = archivo.split('\n')

let data = ''

// Recorrer todas las lineas del archivo
for (const linea of lineas) {
  const cadenas = linea.split('-')
  let checksumValido = ''; let coincidencias = false; let nCheckSumsValidos = 0

  for (let i = 0; i !== cadenas[0].length; i++) {
    for (let j = 0; j !== cadenas[0].length; j++) {
      if (cadenas[0].charAt(j) === cadenas[0].charAt(i)) coincidencias = true
    }

    if (!coincidencias) checksumValido += cadenas[0].charAt(i)
  }

  console.log(checksumValido)

  if (checksumValido === cadenas[1]) nCheckSumsValidos++
  if (nCheckSumsValidos === 33) data = checksumValido

  coincidencias = false
}

await writeFile(`${process.cwd()}/Challenge_04/res_Challenge_04.txt`, data, { encoding: 'utf-8' })
