// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzl-Vt7hVXOESa6uYmJeerEs-bCRU4Y9o",
  authDomain: "realtime-laravel-chat-4b4b7.firebaseapp.com",
  projectId: "realtime-laravel-chat-4b4b7",
  storageBucket: "realtime-laravel-chat-4b4b7.appspot.com",
  messagingSenderId: "558172532129",
  appId: "1:558172532129:web:9f8db7ea15c47725406fe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BF9lSqvpuvL9QgW8i8mY_p8K_-PVVDnxvCRJANwb0ccD6mskrzndLnqQJm4v-UDU7hW49_K4NsWRR5ui_vgkQf0' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
    
    $.post('/api/device-tokens', {
        token: currentToken,
        //device: 'chrome',
        _token: $('[name="csrf-token"]').attr('content')
    });

  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    alert(payload.notification.body)
  });