const authorList = document.querySelector("#authors_list");
const categoriesList = document.querySelector("#categories_list");
const authorListArray = JSON.parse(localStorage.getItem("author-list"));
const categoriesListArray = JSON.parse(localStorage.getItem("category-list"));
const highestToLowestPrice = document.querySelector("#highest_to_lowest_price");
const lowestTHighestPrice = document.querySelector("#lowest_to_highest_price");
const authorListTemplate = (author)=>{
    return `
  <a onclick="filterAuthor(\`` + author + `\`)">${author}</a>`;
};
const showAuthorList = ()=>{
    authorListArray.forEach((author)=>{
        console.log(author);
        authorList.innerHTML += authorListTemplate(author);
    });
};
const categoryListTemplate = (category)=>{
    return `
  <a onclick="filterCategory(\`` + category + `\`)">${category}</a>`;
};
const showCategoriesList = ()=>{
    categoriesListArray.forEach((category)=>{
        console.log(category);
        categoriesList.innerHTML += categoryListTemplate(category);
    });
};
const filterAuthor = (bookAuthor)=>{
    booksContainer.innerHTML = "";
    bookList.map((book)=>{
        if (book.author === bookAuthor) booksContainer.innerHTML += bookTemplate(book);
    });
};
const filterCategory = (bookCategory)=>{
    booksContainer.innerHTML = "";
    bookList.map((book)=>{
        if (book.category === bookCategory) booksContainer.innerHTML += bookTemplate(book);
    });
};
const highestToLowest = ()=>{
    bookList.sort((a, b)=>{
        return b.price - a.price;
    });
    booksContainer.innerHTML = "";
    bookList.forEach((book)=>{
        console.log(book);
        booksContainer.innerHTML += bookTemplate(book);
    });
};
highestToLowestPrice.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Hello");
    highestToLowest();
});
const lowestToHighest = ()=>{
    bookList.sort((a, b)=>{
        return a.price - b.price;
    });
    booksContainer.innerHTML = "";
    bookList.forEach((book)=>{
        console.log(book);
        booksContainer.innerHTML += bookTemplate(book);
    });
};
lowestTHighestPrice.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Hello");
    lowestToHighest();
});

//# sourceMappingURL=index.1caaeb74.js.map
