import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot,
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'First Expense',
//   note: '',
//   amount: 156545,
//   createdAt: 6656510351,
// });

// database.ref('expenses').push({
//   description: 'Second Expense',
//   note: '',
//   amount: 65651,
//   createdAt: 515165165,
// });

// database.ref('expenses').push({
//   description: 'Third Expense',
//   note: 'This is a note',
//   amount: 515165151,
//   createdAt: 1520335153,
// });

// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     const value = snapshot.val();

//     console.log(
//       `${value.name} is a ${value.job.title} at ${value.job.company}`
//     );
//   },
//   (e) => {
//     console.error(e);
//   }
// );

// setTimeout(() => {
//   database.ref('name').set('Ahmed');
// }, 3000);
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 3000);
// setTimeout(() => {
//   database.ref('name').set('mohamed');
// }, 3000);

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot);
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// database
//   .ref()
//   .set({
//     name: 'mohamed',
//     age: 22,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'google',
//     },
//     location: {
//       city: 'boston',
//       country: 'united states',
//     },
//   })
//   .then((data) => {
//     console.log('Success', data);
//   })
//   .catch((e) => console.log(e));

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// });

// database
//   .ref('isSingle')
//   .remove() // ===  set(null)
//   .then(() => console.log('Data was removed'))
//   .catch((e) => console.error(e));
