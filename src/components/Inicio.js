// eslint-disable-next-line import/no-cycle
import {
  botonGoogleFirebase,
} from '../lib/FuncionesFirebase.js';
// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';

// Vista ROSA

// nuestro botón de registro de nuestra primera vista
export const inicio = () => {
  document.body.style.backgroundColor = '#E8098A';
  const seccionVistaInicio = document.createElement('section');
  seccionVistaInicio.setAttribute('id', 'seccionVistaInicio');

  const logoVistaInicioDiv = document.createElement('div');
  const logoVistaInicioImagen = document.createElement('img');
  logoVistaInicioImagen.src = '../images/logo-principal.png';
  logoVistaInicioImagen.setAttribute('id', 'logoVistaInicio');

  const yaTengoCuentaDiv = document.createElement('div');
  const botonYaTengoCuenta = document.createElement('button');
  botonYaTengoCuenta.setAttribute('id', 'botonInicioTengoCuenta');

  botonYaTengoCuenta.textContent = 'Ya tengo cuenta';
  botonYaTengoCuenta.addEventListener('click', () => {
    navegador('/iniciarSesion'); // PREGUNTAR!!!
  });
  // este boton es el de registro
  const registroDiv = document.createElement('div');
  const botonRegistro = document.createElement('button');
  botonRegistro.setAttribute('id', 'botonInicioRegistro');
  const nodoH3 = document.createElement('h3');
  const nodoH2 = document.createElement('h2');

  botonRegistro.textContent = 'Registro';
  botonRegistro.addEventListener('click', () => {
    navegador('/registro'); // PREGUNTAR!!!
    console.log('aceptamiscambisGitHub');
  });

  nodoH3.textContent = '-o-';
  nodoH2.textContent = 'Registrate con: ';

  // aquí va a ir el registro con el logo de google

  const googleDiv = document.createElement('div');
  const botonGoogle = document.createElement('input');
  botonGoogle.setAttribute('type', 'image');
  botonGoogle.setAttribute('id', 'botonGoogle');
  botonGoogle.src = '../images/logo-google.png';
  botonGoogle.addEventListener('click', () => {
    botonGoogleFirebase();
  });

  seccionVistaInicio.append(
    logoVistaInicioDiv,
    logoVistaInicioImagen,
    yaTengoCuentaDiv,
    botonYaTengoCuenta,
    registroDiv,
    botonRegistro,
    nodoH3,
    nodoH2,
    googleDiv,
    botonGoogle,
  );

  return seccionVistaInicio;
};
