// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyABpdg7_30D5ApZFnP2gBJKNZqiP51GJXw',
	authDomain: 'instagram-clone-app-935bf.firebaseapp.com',
	projectId: 'instagram-clone-app-935bf',
	storageBucket: 'instagram-clone-app-935bf.appspot.com',
	messagingSenderId: '740976340511',
	appId: '1:740976340511:web:6e1d607e03dfe783eaef2a',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
