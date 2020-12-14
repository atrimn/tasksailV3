import firebase from 'firebase'

const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURING_ID,
}
// const FIREBASE_CONFIG = {
//   apiKey: 'AIzaSyD3IigAEH5zaXAK0IFH6abkPIbILoAx_R4',
//   authDomain: 'tasksail-9a24e.firebaseapp.com',
//   projectId: 'tasksail-9a24e',
//   storageBucket: 'tasksail-9a24e.appspot.com',
//   messagingSenderId: '105642012163',
//   appId: '1:105642012163:web:c379a44efbf668069b2836',
//   measurementId: 'G-T3C7M418TZ',
// }

// console.log(FIREBASE_CONFIG)

export default function firebaseClient() {
  if (!firebase.apps.length) {
    console.log('ran')
    return firebase.initializeApp(FIREBASE_CONFIG)
  }
}
