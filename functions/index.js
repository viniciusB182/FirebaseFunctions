const functions = require('firebase-functions');
const admin = require('firebase-admin');

//Inicializa Instância Admin da Aplicação para as alterações no RealTime Database serem permitidas
admin.initializeApp(functions.config().firebase);

// Function a ser adicionada no Firebase
// Recupera parâmetro Text e insere nó Messages no RealTime Database do Firebase
exports.addMessage = functions.https.onRequest((req, res) => {
    const original = req.query.text;
    return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
      return res.redirect(303, snapshot.ref);
    });
});
  
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
