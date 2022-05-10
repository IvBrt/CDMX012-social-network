import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
// eslint-disable-next-line import/no-cycle
import { navegador } from '../Router.js';
import { firebaseConfig } from './apiKey.js';

// Todas las importaciones de firebase
// import inicializarApp from './InstalacionFirebase.js';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-console
console.log(app);
// }
// Registrar usuarios nuevos-la morada
// inicializarApp();

export async function registroFirebase(correo, contrasena) {
  const auth = getAuth();

  await createUserWithEmailAndPassword(auth, correo, contrasena)
    .then((userCredential) => {
      navegador('/iniciarSesion');
      // eslint-disable-next-line no-unused-vars
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      // eslint-disable-next-line no-unused-vars
      const errorCode = error.code;
      // eslint-disable-next-line no-unused-vars
      const errorMessage = error.message;
      // ..
    });
}

//   inicio de usuarios con cuenta-la azul
export async function iniciarSesionFirebase(email, password) {
  // eslint-disable-next-line no-console
  console.log(email, password);
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // eslint-disable-next-line no-unused-expressions
      user;
      navegador('/muro');

      // eslint-disable-next-line no-undef
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido a Mochileando Ando',
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-unused-vars
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.log(errorMessage);
    });
}

// Inicio de sesion con google
export async function botonGoogleFirebase() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // eslint-disable-next-line no-unused-vars
      const token = credential.accessToken;
      // The signed-in user info.
      // eslint-disable-next-line no-unused-vars
      const user = result.user;
      navegador('/muro');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // eslint-disable-next-line no-alert
      alert(errorCode || errorMessage || email || credential);
    });
}

// Cierre de sesion
export const cerrarSesion = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // eslint-disable-next-line no-undef
    Swal.fire({
      text: 'Sesión cerrada con éxito',
      imageUrl: 'https://c.tenor.com/Ie086ZPnQzYAAAAC/tacos-nyan.gif',
      imageWidth: 400,
      imageAlt: 'Custom image',
    });
    navegador('/');
  }).catch((error) => {
    // eslint-disable-next-line no-alert
    alert(error);
  });
};
