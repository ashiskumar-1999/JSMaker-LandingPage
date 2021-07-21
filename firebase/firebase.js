import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyC9znn1_iEyvQf93G9YIQOaytJH-MbDoic',
  authDomain: 'fir-app-d3d69.firebaseapp.com',
  databaseURL: 'https://fir-app-d3d69.firebaseio.com',
  projectId: 'fir-app-d3d69',
  storageBucket: 'fir-app-d3d69.appspot.com',
  messagingSenderId: '628329700837',
  appId: '1:628329700837:web:ad930ee140606bef23a30c',
  measurementId: 'G-FB0SMGPRVR'
};

// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const addUsers = async (email) => {
  const userRef = await db.collection('users').doc();

  const usersCollectionsQuery = await db.collection('users').get();

  const dbUsersCollection = await usersCollectionsQuery.docs.map((user) => {
    const dbUser = user.data().email;

    return dbUser;
  });

  const userExists = dbUsersCollection.includes(email);
  console.log({ userExists });

  if (userExists) {
    throw new Error('User already exists');
  }

  await userRef.set({ email: email, createdAt: Date() });

  userRef.onSnapshot((snapShot) => {
    console.log(snapShot.data());
  });
};

export const getTotalCount = async () => {
  const query = await db.collection('users').get();

  return query.docs.length + 50;
};
