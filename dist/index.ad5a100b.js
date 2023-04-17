const booksContainer = document.querySelector("#books_container");
const bookTemplate = (book)=>{
    return `
  <div id=${book.id}>
    <img src=${book.image}>
    <ul>
      <li class="title">${book.title}</li>
      <li>${book.author}</li>
      <li>${book.category}</li>
      <li>${book.year}</li>
      <li>${book.price}</li>
    </ul>
    <div class="buttons">
      <button onclick="editBook(${book.id})">Edit</button>
      <button onclick="deleteBook(${book.id})">Delete</button>
    </div>
  </div>`;
};
window.onload = (e)=>{
    e.preventDefault();
    bookList.forEach((book)=>{
        booksContainer.innerHTML += bookTemplate(book);
        console.log(book);
    });
    showAuthorList();
    showCategoriesList();
};

//# sourceMappingURL=index.ad5a100b.js.map
