// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-unresolved
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  getDoc,
  doc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
// eslint-disable-next-line no-unused-vars
import { firebaseConfig } from './apiKey.js';

// TO TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// export default function inicializarApp() {

// addDoc crea/genera id de firestore de las publicaciones
// (se pueden ver en el ejemplo de firestore: 77q57vx7eRqfnik8TZue)

// db es la conexión a la base de datos
const db = getFirestore();

// FIRESTORE (publicaciones)
export const guardarPublicaciones = (inputCajaDeCreacionDePublicaciones) => {
  addDoc(collection(db, 'guardarPublicaciones'), { text: inputCajaDeCreacionDePublicaciones});
};

// Obtención de publicaciones
export const obtencionDePublicaciones = () => getDocs(collection(db, 'guardarPublicaciones'));

// para que no actualices la página y se vean las publicaciones al momento (evento ON)
export const onBtenerPublicaciones = (callback) => onSnapshot(collection(db, 'guardarPublicaciones'), callback);

// Eliminación de la publicación
export const eliminarPublicaciones = (id) => deleteDoc(doc(db, 'guardarPublicaciones', id));

// Editar la publicación
export const editarPublicaciones = (id) => getDoc(doc(db, 'guardarPublicaciones', id));
