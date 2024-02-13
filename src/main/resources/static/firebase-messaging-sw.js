// resources/static/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBClgyGn-RQOH-NUqD-jcaHt9jd1Cwsfwk",
    authDomain: "handsome-potato.firebaseapp.com",
    projectId: "handsome-potato",
    storageBucket: "handsome-potato.appspot.com",
    messagingSenderId: "837963282020",
    appId: "1:837963282020:web:75753d7d9926ded9689171",
    measurementId: "G-7PY800LPHB"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const title = "Hello World";
    const options = { body: payload.data.status };
    return self.registration.showNotification(title, options); }
);

