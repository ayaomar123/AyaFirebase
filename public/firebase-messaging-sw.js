 // Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
  apiKey: "AIzaSyDzl-Vt7hVXOESa6uYmJeerEs-bCRU4Y9o",
  authDomain: "realtime-laravel-chat-4b4b7.firebaseapp.com",
  projectId: "realtime-laravel-chat-4b4b7",
  storageBucket: "realtime-laravel-chat-4b4b7.appspot.com",
  messagingSenderId: "558172532129",
  appId: "1:558172532129:web:9f8db7ea15c47725406fe0"
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });