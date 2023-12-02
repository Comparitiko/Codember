import { readFile, writeFile } from 'fs/promises'
const archivo = await readFile(`${process.cwd()}/Challenge_05/database-attacked.txt`, { encoding: 'utf-8' })
const usuarios = archivo.split('\n')
let res = ''
const abecedario = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('')
const numeros = '0123456789'.split('')

// Funcion que te devuelve un booleano si es una letra o no
function letraEnAbecedario (letra) {
  for (const caracter of abecedario) {
    if (caracter === letra) return true
  }
  return false
}

// Funcion que te devuelve booleano si es un numero o no
function esUnNumero (num) {
  for (const caracter of numeros) {
    if (caracter === num) return true
  }
  return false
}

// Funcion que devuelve si es un id valido o no
function idValido (id) {
  const letras = id.split('')
  for (const letra of letras) {
    if (!letraEnAbecedario(letra) && !esUnNumero(letra)) return false
  }
  return true
}

// Funcion que devuelve si es un nombre de usuario valido o no
function nombreUsuarioValido (nombreUsuario) {
  const letras = nombreUsuario.split('')
  for (const letra of letras) {
    if (!letraEnAbecedario(letra) && !esUnNumero(letra)) return false
  }
  return true
}

// Funcion que devuelve si es un email valido o no
function emailValido (email) {
  if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') === 0) return false
  for (let i = 0; i < email.indexOf('@'); i++) {
    if (!letraEnAbecedario(email.charAt(i)) && !esUnNumero(email.charAt(i))) return false
  }
  for (let i = email.indexOf('@') + 1; i < email.indexOf('.'); i++) {
    if (!letraEnAbecedario(email.charAt(i))) return false
  }
  for (let i = email.indexOf('.') + 1; i < email.length; i++) {
    if (!letraEnAbecedario(email.charAt(i))) return false
  }
  return true
}

// Funcion que devuelve si la edad es valida o no
function edadValidaONula (edad) {
  const digitosEdad = edad.split('')
  if (digitosEdad[0] === '') return true
  for (const digitoEdad of digitosEdad) {
    if (!esUnNumero(digitoEdad)) return false
  }
  return true
}

// Funcion que devuelve si una localidad es valida o no
function localidadValidaONula (localidad) {
  const letras = localidad.split('')
  if (letras[0] === '') return true
  for (const letra of letras) {
    if (!letraEnAbecedario(letra)) return false
  }
  return true
}

let nUsuarios = 0

// Funcion que devuelve si un usuario es valido o no
function esUsuarioValido (usuario) {
  const datosUsuario = usuario.replace('\r', '').split(',')
  nUsuarios++
  if (idValido(datosUsuario[0]) && nombreUsuarioValido(datosUsuario[1]) && emailValido(datosUsuario[2]) && edadValidaONula(datosUsuario[3]) && localidadValidaONula(datosUsuario[4])) return true
  else {
    console.log(`Usuario: ${datosUsuario}: Numero: ${nUsuarios} = false`)
    return false
  }
}

// Bucle para recorrer los usuarios de uno en uno pasandolos a la funcion de usuarios validos
for (const usuario of usuarios) {
  if (!esUsuarioValido(usuario)) res += usuario.split(',').slice(1, 2).toString().charAt(0)
}

await writeFile(`${process.cwd()}/Challenge_05/res_Challenge_05.txt`, res, { encoding: 'utf-8' })
