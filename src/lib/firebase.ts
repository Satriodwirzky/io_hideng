import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: 'AIzaSyACJvFwltqux5gJSiZr8Dr_Za_zkEp4iEU',
  authDomain: 'satrio-1e941.firebaseapp.com',
  projectId: 'satrio-1e941',
  storageBucket: 'satrio-1e941.firebasestorage.app',
  messagingSenderId: '882528372077',
  appId: '882528372077:web:4786ec79fdc528b0eec664',
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

