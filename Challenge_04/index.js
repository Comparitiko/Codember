import {readFile, writeFile} from 'fs/promises';

const archivo = await readFile(`${process.cwd()}/Challenge_04/files-quarantine.txt`, {encoding: 'utf-8'})

const lineas = archivo.split('\n')

for (const linea of lineas) {

  const cadenas = linea.split('-')

  for (let i = 0; i !== cadenas[0].length; i++) {

    

  }

}