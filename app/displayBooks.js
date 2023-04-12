const bookList = JSON.parse(localStorage["book-list"]);

const bookTemplate = (bookList) => {
  return `
  <div id=${bookList.id}>
    <img src=${bookList.image}>
    <ul>
      <li>${bookList.title}</li>
      <li>${bookList.author}</li>
      <li>${bookList.category}</li>
      <li>${bookList.year}</li>
      <li>${bookList.price}</li>
    </ul>
    <button onclick="editBook(${bookList.id})">Edit</button>
    <button onclick="deleteBook(${bookList.id})">Delete</button>
  </div>`;
};
