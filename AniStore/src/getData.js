const AniMerchList = document.querySelector("#AniMerchList");

//display all data
function renderList(doc) {
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

  AniMerchList.appendChild(li);
}

// getting all data
db.collection("AniMerch")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderList(doc);
    });
  });
