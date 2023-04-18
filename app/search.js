const searchInput = document.querySelector("#search_input");
const searchBtn = document.querySelector("#search_btn");

const searchForBook = () => {
  let searchValue = searchInput.value.toUpperCase();
  booksContainer.innerHTML = "";
  bookList.forEach((book) => {
    if (
      book.author.toUpperCase().includes(searchValue) ||
      book.title.toUpperCase().includes(searchValue) ||
      book.category.toUpperCase().includes(searchValue) ||
      book.year.includes(searchValue) ||
      book.price.includes(searchValue)
    ) {
      booksContainer.innerHTML += bookTemplate(book);
    }
  });
  searchInput.value = "";
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchForBook();
});
