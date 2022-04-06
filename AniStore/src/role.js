auth.onAuthStateChanged((user) => {
  console.log(user);
  console.log(user.emailVerified);

  const addRole = document.querySelector("#role");

  // if(user.emailVerified){}
  addRole.addEventListener("click", (e) => {
    e.preventDefault();
    var user = auth.currentUser;
    role = document.getElementById("selectedrole").value;

    // console.log("Role" + role);
    // alert("working");
    if ((role == "Customer") & user.emailVerified) {
      db.collection("Customer")
        .add({
          Role: role,
          User: user.email,
        })
        .then((docRef) => {
          // alert("success  " + user.email + role);
          window.location.href = "login.html";
          role.reset();
        })
        .catch((error) => {
          // alert("error in operation");
          // console.error("Error adding role: ", error);
        });
    } else if ((role == "Seller") & user.emailVerified) {
      db.collection("Seller")
        .add({
          Role: role,
          User: user.email,
        })
        .then((docRef) => {
          // alert("success  " + user.email + role);
          window.location.href = "login.html";
          role.reset();
        })
        .catch((error) => {
          // alert("error in operation");
          // console.error("Error adding role: ", error);
        });
    }
  });
});
