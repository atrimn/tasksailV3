import admin from 'firebase-admnin'
const serviceAccount = require('../tasksail-secret.json')

export const verifyIdToken = (id) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error
    })
}
