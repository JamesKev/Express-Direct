//imports firebase functions module and you can use it by leveraging this functions identifier
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions



exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log('Hello')
 response.send("Hello from express-direct");
});
