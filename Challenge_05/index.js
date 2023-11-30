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

}

function nombreUsuarioValido (nombreUsuario) {
  
}

function emailValido (email) {

}

function edadValida (edad) {

}

function localidadValida (localidad) {

}

function esUsuarioValido (usuario) {
  const datosUsuario = usuario.replace('\r', '').split(',')
  if (idValido(datosUsuario[0]) && nombreUsuarioValido(datosUsuario[1]) && emailValido(datosUsuario[2]) && edadValida(datosUsuario[3]) && localidadValida(datosUsuario[4])) console.log('asd')
}

for (const usuario of usuarios) {
  esUsuarioValido(usuario)
}

await writeFile(`${process.cwd()}/Challenge_05.txt`, res, {encoding: 'utf-8'})