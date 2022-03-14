console.log("Hello world from editBook");

const deleteButton = document.getElementById("book-delete-button");

deleteButton.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("hello from button");
  console.log(window.location.href);
  const newURL = new URL(window.location.href);
  console.log(newURL);
  console.log(newURL.pathname);
  await fetch(newURL.pathname + "/delete", { method: "DELETE" });
  window.location.replace("/books");
});

const editButton = document.getElementById("book-edit-button");
editButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const editForm = document.getElementById("bookEditForm");
  editForm.classList.toggle("hidden");

  const details = document.getElementById("bookDetails");
  details.classList.toggle("hidden");
  editButton.classList.toggle("hidden");

  console.log("Edit button was clicked");
});
