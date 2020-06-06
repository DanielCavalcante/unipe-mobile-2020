import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyAzENW_0ONxCJh_yaL-1KH0bt7IaYOshBw",
  authDomain: "back-end-as-service.firebaseapp.com",
  databaseURL: "https://back-end-as-service.firebaseio.com",
  projectId: "back-end-as-service",
  storageBucket: "back-end-as-service.appspot.com",
  messagingSenderId: "981593524298"
};
let app = Firebase.initializeApp(config);
export const db = app.database();