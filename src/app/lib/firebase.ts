import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: "AIzaSyAEbwazyc7GxD1Qt1rCovJl7eNtPngrGEA",
  authDomain: "satriolagi-4d3da.firebaseapp.com",
  projectId: "satriolagi-4d3da",
  storageBucket: "satriolagi-4d3da.firebasestorage.app",
  messagingSenderId: "432338769038",
  appId: "1:432338769038:web:0f9919c340218a47d825df",
  measurementId: "G-D7ZYM34J0P"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

