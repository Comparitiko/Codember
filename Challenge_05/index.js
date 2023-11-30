import {readFile, writeFile} from 'fs/promises';
const archivo = await readFile(`${process.cwd()}/Challenge_05/database-attacked.txt`, {encoding: 'utf-8'})
const usuarios = archivo.split('\n')
let res = ''

// Funcion que devuelve la primera letra del userName
function sacarPrimeraLetra (usuario) {
  const datosUsuario = usuario.split(',')
  return datosUsuario[0].chartAt(0)
}

function idValido (id) {
  if (typeof id === 'string') return true
  else return false
}

function nombreUsuarioValido (nombreUsuario) {
  if (typeof nombreUsuario === 'string') return true
  else return false
}

function emailValido (email) {
  if (email.indexOf('@') !== - 1 && email.indexOf('.com')) return true
  else return false
}

function edadValidaONula (edad) {
  if (edad === '') return true
  let edadNum = parseInt(edad)
  if (typeof edadNum === 'number') return true
  else return false
}

function localidadValidaoNula (localidad) {
  if (typeof id === 'string' || '') return true
  else return false
}

function esUsuarioValido (usuario) {
  const datosUsuario = usuario.replace('\r', '').split(',')
  console.log(edadValidaONula(datosUsuario[3]))
  //if (idValido(datosUsuario[0]) && nombreUsuarioValido(datosUsuario[1]) && emailValido(datosUsuario[2]) && edadValida(datosUsuario[3]) && localidadValida(datosUsuario[4])) return true
  //else return false
}

for (const usuario of usuarios) {
  if (esUsuarioValido(usuario)) res += sacarPrimeraLetra(usuario)
}

await writeFile(`${process.cwd()}/Challenge_05/res_Challenge_05.txt`, res, {encoding: 'utf-8'})