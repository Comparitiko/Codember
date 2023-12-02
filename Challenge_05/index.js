import { readFile, writeFile } from 'fs/promises'
const archivo = await readFile(`${process.cwd()}/Challenge_05/database-attacked.txt`, { encoding: 'utf-8' })
const usuarios = archivo.split('\n')
let res = ''

const abecedario = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('')
const numeros = '0123456789'.split('')
function letraEnDiccionario (letra) {
  for (const caracter of abecedario) {
    if (caracter === letra) return true
  }
  for (const caracter of numeros) {
    if (caracter === letra) return true
  }
  return false
}

function idValido (id) {
  const letras = id.split('')
  for (const letra of letras) {
    if (!letraEnDiccionario(letra)) return false
  }
  return true
}

function nombreUsuarioValido (nombreUsuario) {
  const letras = nombreUsuario.split('')
  for (const letra of letras) {
    if (!letraEnDiccionario(letra)) return false
  }
  return true
}

function emailValido (email) {
  console.log(email)
  if (email.indexOf('@') !== -1 && email.indexOf('.com') !== -1) {
    const letrasAntesArroba = email.split('@').slice(0, 1)
    console.log(letrasAntesArroba.toString())
    for (const letra of letrasAntesArroba) {
      if (!letraEnDiccionario(letra)) return false
    }
    return false
  }
  return false
}

function edadValidaONula (edad) {
  const digitosEdad = edad.split('')
  for (const digitoEdad of digitosEdad) {
    if (digitoEdad !== '' || !(digitoEdad in numeros)) return true
  }
  return false
}

function localidadValidaONula (localidad) {
  if (localidad === '') return true
  const letras = localidad.split('')
  for (const letra of letras) {
    if (!letraEnDiccionario(letra)) return false
  }
  return true
}

function esUsuarioValido (usuario) {
  const datosUsuario = usuario.replace('\r', '').split(',')
  // console.log(idValido(datosUsuario[0]))
  // console.log(nombreUsuarioValido(datosUsuario[1]))
  // console.log(emailValido(datosUsuario[2]))
  // console.log(edadValidaONula(datosUsuario[3]))
  // console.log(localidadValidaoNula(datosUsuario[4]))
  if (idValido(datosUsuario[0]) && nombreUsuarioValido(datosUsuario[1]) && emailValido(datosUsuario[2]) && edadValidaONula(datosUsuario[3]) && localidadValidaONula(datosUsuario[4])) return true
  else return false
}

for (const usuario of usuarios) {
  if (!esUsuarioValido(usuario)) res += usuario.split(',').slice(1, 2).toString().charAt(0)
}

await writeFile(`${process.cwd()}/Challenge_05/res_Challenge_05.txt`, res, { encoding: 'utf-8' })
