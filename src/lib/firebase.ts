// Инициализация Firebase (App, Auth, Firestore)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Конфигурация вашего приложения Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBBdvB93cSJqOul488TiJmJ-zAtB9O93DQ',
  authDomain: 'dear-dairy-edd5b.firebaseapp.com',
  projectId: 'dear-dairy-edd5b',
  storageBucket: 'dear-dairy-edd5b.firebasestorage.app',
  messagingSenderId: '186302017368',
  appId: '1:186302017368:web:c605dbcc0f9386c7b7bf2d'
};

// Инициализация
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };


