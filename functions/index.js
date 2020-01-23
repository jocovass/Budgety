const functions = require('firebase-functions');

exports.modifyUser = functions.firestore
    .document('users/{userID}')
    .onWrite((change, context) => {
      // Get an object with the current document value.
      // If the document does not exist, it has been deleted.
      const document = change.after.exists ? change.after.data() : null;

      // Get an object with the previous document value (for update or delete)
      const oldDocument = change.before.data();

      // perform desired operations ...
      console.log(change.before.data());
      console.log(change.after.data());
      return change.after.ref.update({totalIncome: 4000});
    }); 