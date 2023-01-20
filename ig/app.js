import { initializeApp } from 'firebase/app'
import {
  getFirestore
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAO0NIUAvSCPAHZvNE05fiV_QHo8g0SJ2s",
    authDomain: "login-with-firebase-data-500b0.firebaseapp.com",
    projectId: "login-with-firebase-data-500b0",
    storageBucket: "login-with-firebase-data-500b0.appspot.com",
    messagingSenderId: "177008284848",
    appId: "1:177008284848:web:bcf5801848b3a172d05775"
  };


// init firebase
initializeApp(firebaseConfig)

// init services
const auth = getAuth()

// Login user
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
      loginForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})


// signing users up
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user)
      signupForm.reset()
    })
    .catch(err => {
      console.log(err.message)
    })
})