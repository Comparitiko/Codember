import { readFile, writeFile } from 'fs/promises'
const archivo = await readFile(`${process.cwd()}/Challenge_05/database-attacked.txt`, { encoding: 'utf-8' })
const usuarios = archivo.split('\n')
let res = ''
const abecedario = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('')
const numeros = '1234567890'.split('')

// Funcion que devuelve la primera letra del userName
function sacarPrimeraLetra (usuario) {
  const datosUsuario = usuario.split(',')
  return datosUsuario[0].chartAt(0)
}

function idValido (id) {
  const letras = id.split('')
  for (const letra of letras) {
    if (!(letra in abecedario) || !(letra in numeros)) return false
  }
  return true
}

function nombreUsuarioValido (nombreUsuario) {
  if (typeof nombreUsuario === 'string') return true
  else return false
}

function emailValido (email) {
  if (email.indexOf('@') !== -1 && email.indexOf('.com') !== -1) return true
  else return false
}

function edadValidaONula (edad) {
  const digitosEdad = edad.split('-')
  for (const digitoEdad of digitosEdad) {
    if (digitoEdad !== '' || !(digitoEdad in numeros)) return false
  }
  return true
}

function localidadValidaoNula (localidad) {
  if (typeof id === 'string' || '') return true
  else return false
}

function esUsuarioValido (usuario) {
  const datosUsuario = usuario.replace('\r', '').split(',')
  // console.log(idValido(datosUsuario[0]))
  // console.log(nombreUsuarioValido(datosUsuario[1]))
  // console.log(emailValido(datosUsuario[2]))
  console.log(edadValidaONula(datosUsuario[3]))
  // console.log(localidadValidaoNula(datosUsuario[4]))
}

for (const usuario of usuarios) {
  if (esUsuarioValido(usuario)) res += sacarPrimeraLetra(usuario)
}

await writeFile(`${process.cwd()}/Challenge_05/res_Challenge_05.txt`, res, { encoding: 'utf-8' })
