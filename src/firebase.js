import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

import { getAuth } from 'firebase/auth'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDFup2CMpFzNpPpheVLhmxHzMTrCVSHm4U",
  authDomain: "sclothes-fe708.firebaseapp.com",
  projectId: "sclothes-fe708",
  storageBucket: "sclothes-fe708.appspot.com",
  messagingSenderId: "457395851528",
  appId: "1:457395851528:web:8882f5959d527312239cbd",
  measurementId: "G-13LKNBN9D0"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)

// here we can export reusable database references
