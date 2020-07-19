import * as firebase from 'firebase';

const firebaseConfig = {
  /* 
  1: Create a firebase project and put your fibaseConfig here 
  2: import db.json file to your Realtime database
  All Done!
  */
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference collections
const databaseRef = firebase.database().ref();
export const productsRef = databaseRef.child('products');
export const productCommentsRef = databaseRef.child('productComments');
export const postsRef = databaseRef.child('posts');
export const postCommentsRef = databaseRef.child('postComments');
export const adminAccRef = databaseRef.child('adminAccount');

// Setup provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoggle = () => {
  auth.signInWithPopup(googleProvider);
};

// export const signInWithFacebook = () => {
//   auth.signInWithPopup(facebookProvider);
// };

export const generateUserDocument = async user => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  const { uid, email, displayName } = user;
  if (!snapshot.exists) {
    // signup
    try {
      await userRef.set({
        displayName,
        email,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  return getUserDocument(uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};
