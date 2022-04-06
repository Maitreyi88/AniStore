auth.onAuthStateChanged((user) => {
  console.log(user);
  if (user) {
    db.collection("AniMerch")
      .where("User", "==", user.email) // get the user's product data
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          renderSellerList(doc);
        });
      });
  }
});

const AniMerchSellerList = document.querySelector("#AniMerchSellerList");

//display all the product data on the page
function renderSellerList(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let brand = document.createElement("span");
  let category = document.createElement("span");
  let price = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  name.textContent = "Title :" + doc.data().Name;
  brand.textContent = "Brand  :" + doc.data().Brand;
  category.textContent = "Category :" + doc.data().Category;
  price.textContent = "Price in $ :" + doc.data().Price;

  li.appendChild(name);
  li.appendChild(brand);
  li.appendChild(category);
  li.appendChild(price);

  AniMerchSellerList.appendChild(li);
}
