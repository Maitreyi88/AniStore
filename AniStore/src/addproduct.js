// add a new product (seller)
const addMerchForm = document.querySelector(".add");
addMerchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var user = auth.currentUser;
  db.collection("AniMerch")
    .add({
      Brand: addMerchForm.brand.value,
      Category: addMerchForm.category.value,
      Name: addMerchForm.name.value,
      Price: addMerchForm.price.value,
      User: user.email,
    })
    .then((docRef) => {
      // console.log("Document written with ID: ", docRef.id);
      alert("Product added ");
      addMerchForm.reset();
    })
    .catch((error) => {
      // alert("error in operation");
      // console.error("Error adding document: ", error);
    });
});
