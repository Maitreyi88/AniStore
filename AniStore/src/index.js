// Set up our register function
function register() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        // role: role,
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);

      // DOne
      // alert("User Created!!");
      window.location.href = "role.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      // alert(error_message);
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;
      // DOne
      alert("User Logged In!!");

      auth.onAuthStateChanged((user) => {
        console.log(user);
        console.log(user.emailVerified);
        if (user.emailVerified) {
          db.collection("Seller")
            .where("User", "==", user.email)
            .get()
            .then((snapshot) => {
              snapshot.docs.forEach((doc) => {
                // renderSellerList(doc);
                // console.log("User is a seller");
                window.location.href = "seller.html";
              });
            });

          db.collection("Customer")
            .where("User", "==", user.email)
            .get()
            .then((snapshot) => {
              snapshot.docs.forEach((doc) => {
                // renderSellerList(doc);
                // console.log("User is a customer");
                window.location.href = "customer.html";
              });
            });
        } else {
          window.location.href = "role.html";
        }
      });
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      // alert(error_message);
    });
}
