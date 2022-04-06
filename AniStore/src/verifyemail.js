// send verification email
function send_Verification() {
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function () {
      alert("Verification sent");
      //   window.location.reload();
    })
    .catch(function (error) {
      alert("Retry");
    });
}
