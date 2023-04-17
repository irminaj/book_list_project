const searchInput = document.querySelector("#search_input");
const searchBtn = document.querySelector("#search_btn");

const searchForBook = () => {
  const searchValue = searchInput.value;
  console.log(searchValue);
  booksContainer.innerHTML = "";
  bookList.forEach((book) => {
    if (book.author.includes(searchValue) || book.title.includes(searchValue) || book.category.includes(searchValue)) {
      booksContainer.innerHTML += bookTemplate(book);
    }
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchForBook();
});
