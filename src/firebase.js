import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyA8YdZQ97vh1KpnzGz8LUNHvV0SdHReUZY',
  authDomain: 'time-mgmt.firebaseapp.com',
  databaseURL: 'https://time-mgmt.firebaseio.com',
  projectId: 'time-mgmt',
  storageBucket: 'time-mgmt.appspot.com',
  messagingSenderId: '834766376949',
  appId: '1:834766376949:web:1dac5f4e6c842dc855dabc',
  measurementId: 'G-MSGTVY4231',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const cardsRef = db.collection('cards')
cardsRef.add({
  category: 'Personal Time',
  name: 'To do',
  hours: 8,
})
