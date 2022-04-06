const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    alert("User logged out");
    window.location.href = "index.html";
  });
});
