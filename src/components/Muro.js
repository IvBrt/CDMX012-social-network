// Importaciones

// eslint-disable-next-line import/no-cycle
// import { navegador } from '../Router.js';
// eslint-disable-next-line import/no-cycle
import { cerrarSesion } from '../lib/FuncionesFirebase.js';
import {
  guardarPublicaciones,
  obtencionDePublicaciones,
  onBtenerPublicaciones,
  eliminarPublicaciones,
} from '../lib/InstalacionFirebase.js';
// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';

// Imprimir todo en el Muro
export const Muro = () => {
  // Seccion que genera el área del header, donde abarcamos el logo y el boton de cerrar sesion

  // Contenedor
  document.body.style.backgroundColor = 'aliceblue';
  const container = document.createElement('body');

  // Seccion azul del Menu con el logo y cerrar sesion - HEADER
  const seccionMuro = document.createElement('header');

  // Div para insertar el logo
  // const logoVistaMuroDiv = document.createElement('div');
  // logoVistaMuroDiv.setAttribute('id', ' logoVistaMuroDiv');
  const logoVistaMuroImagen = document.createElement('img');
  logoVistaMuroImagen.src = '../images/logo-horizontal.png';
  logoVistaMuroImagen.setAttribute('id', 'logoVistaMuro');

  // Div para insertar el boton de cerrar sesion
  const cerrarSesionDiv = document.createElement('div');
  cerrarSesionDiv.className = 'cerrarSesionDiv';
  const botonCerrarSesion = document.createElement('button');
  botonCerrarSesion.setAttribute('id', 'botonCerrarSesion');
  botonCerrarSesion.textContent = 'Cerrar sesión';
  botonCerrarSesion.addEventListener('click', () => {
    // Lleva al navegador('/'), se encuentra en el rooter
    // eslint-disable-next-line no-unused-expressions
    cerrarSesion(), textoDeLaPublicacion.reset();
    console.log('cerrar sesión');
  });

  // Seccion blanca del cuerpo - MAIN
  const areaParaEscribirPublicaciones = document.createElement('main'); // Aquí empieza el color blanquito
  areaParaEscribirPublicaciones.setAttribute('id', 'areaParaEscribirPublicaciones');
  // area de escribir el texto a publicar - ¿A donde estas pensando viajar?
  const bloqueParaEscribirLaPublicacion = document.createElement('section');
  bloqueParaEscribirLaPublicacion.setAttribute('id', 'bloqueParaEscribirLaPublicacion');
  // Input Caja de texto para escribir tu publicaciones
  const inputCajaDeCreacionDePublicaciones = document.createElement('input');
  inputCajaDeCreacionDePublicaciones.setAttribute('type', 'text');
  inputCajaDeCreacionDePublicaciones.setAttribute(
    'id',
    'inputCajaDeCreacionDePublicaciones',
  );
  inputCajaDeCreacionDePublicaciones.setAttribute(
    'placeholder',
    '¿A dónde estás pensando viajar?',
  );
  inputCajaDeCreacionDePublicaciones.className = 'inputCajaDeCreacionDePublicaciones';

  const resetearDivPrincipal = () => {
    // eslint-disable-next-line no-use-before-define
    if (textoDeLaPublicacion.childNodes.length > 0) {
      // console.log('div que almacena tiene hijos');
      // eslint-disable-next-line no-use-before-define
      textoDeLaPublicacion.innerText = '';
    }
  };

  // Icono/Boton para publicar
  const botonDePublicaciones = document.createElement('button');
  // botonDePublicaciones.setAttribute('type', 'image');
  botonDePublicaciones.setAttribute('id', 'botonDePublicaciones');
  botonDePublicaciones.src = '../images/enter-post.png';
  botonDePublicaciones.addEventListener('click', (e) => {
    e.preventDefault();
    guardarPublicaciones(inputCajaDeCreacionDePublicaciones.value);
    resetearDivPrincipal();
    inputCajaDeCreacionDePublicaciones.value = '';
    console.log("prueba#6253453276")
  });
  // Aqui termina area de escribir el texto a publicar - ¿A donde estas pensando viajar?

  // T odo donde se acomodan el los textos publicados
  // mas boton editar, mas boton borrar, mas boton chido

  const areaTextoEdicionChidoMasBorrado = document.createElement('section'); // Borde rosita - Revisar Imagen
  areaTextoEdicionChidoMasBorrado.className = 'areaTextoEdicionChidoMasBorrado';

  // seccion negra de texto y edicion
  const seccionDeTextoMasEdicion = document.createElement('section');
  seccionDeTextoMasEdicion.className = 'seccionDeTextoMasEdicion'; // Bordes Negros -Revisar Imagen
  // Div para imprimir
  let textoDeLaPublicacion = document.createElement('div');
  textoDeLaPublicacion.setAttribute('id', 'muroDePublicaciones');
  // eslint-disable-next-line max-len

  onBtenerPublicaciones(async () => {
    // querySnapshot: datos del momento
    const querySnapshot = await obtencionDePublicaciones();
    // si divquealamcena las publicaciones ya tiene  contenido borrar el contenido
    // de lo contrario , proceder con el códgio que ya existe que se encuentra aqui abajo
    let botonesDeBasura = '';
    querySnapshot.forEach((doc) => {
      const publicacion = doc.data();
      // console.log(doc.id);
      
      const tituloPublicacion = document.createElement('p');
      tituloPublicacion.setAttribute('id', 'tituloPublicacion');
      tituloPublicacion.innerText = publicacion.text;

      // Input borrar
      const inputBasuraPublicaciones = document.createElement('input');
      inputBasuraPublicaciones.setAttribute('type', 'image');
      inputBasuraPublicaciones.setAttribute('id', 'inputBasuraPublicaciones');
      inputBasuraPublicaciones.setAttribute('data-id', doc.id);
      inputBasuraPublicaciones.src = '../images/sombrero-basura.png';

      botonesDeBasura = document.querySelectorAll('#inputBasuraPublicaciones');
        
      tituloPublicacion.append(inputBasuraPublicaciones);
      textoDeLaPublicacion.append(tituloPublicacion);
    });
    botonesDeBasura.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        eliminarPublicaciones(dataset.id);
        console.log(dataset.id);
      });
    });
    });

  // Boton de editar

  // Area donde se acomodan el boton de likes y el boton de borrar
  const areaDondeSeAcomodaChidoMasBorrar = document.createElement('section'); // Borde azul - Revisar Imagen
  areaDondeSeAcomodaChidoMasBorrar.className = 'areaDondeSeAcomodaChidoMasBorrar';

  // Hasta aqui termina el main

// ++++++++++++++++++++++++++++++ Nodos que se imprimen en el DOM
  seccionMuro.append(
    // logoVistaMuroDiv,
    logoVistaMuroImagen,
    botonCerrarSesion,
  );

// ++++++++++++++++++++++++++++++Esto es el main
  areaParaEscribirPublicaciones.append(
    bloqueParaEscribirLaPublicacion,
    areaTextoEdicionChidoMasBorrado,
  );
// ++++++++++++++++++++++++++++++Junta los 4 elementos a publicar
  areaTextoEdicionChidoMasBorrado.append(
    textoDeLaPublicacion,
  );
// ++++++++++++++++++++++++++++++Esto es para enviar el mensaje
  bloqueParaEscribirLaPublicacion.append(
    inputCajaDeCreacionDePublicaciones,
    botonDePublicaciones,
  );

  // eslint-disable-next-line max-len
  container.append(seccionMuro, areaParaEscribirPublicaciones);

  return container;
};
