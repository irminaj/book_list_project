const authorList = document.querySelector("#authors_list");
const categoriesList = document.querySelector("#categories_list");
const authorListArray = JSON.parse(localStorage.getItem("author-list"));
const categoriesListArray = JSON.parse(localStorage.getItem("category-list"));
const highestToLowestPrice = document.querySelector("#highest_to_lowest_price");
const lowestTHighestPrice = document.querySelector("#lowest_to_highest_price");
const backToNormal = document.querySelector("#back_to_normal");
const authorListTemplate = (author)=>{
    return `
  <a onclick="filterAuthor(\`` + author + `\`)">${author}</a>`;
};
const showAuthorList = ()=>{
    authorListArray.forEach((author)=>{
        authorList.innerHTML += authorListTemplate(author);
    });
};
const categoryListTemplate = (category)=>{
    return `
  <a onclick="filterCategory(\`` + category + `\`)">${category}</a>`;
};
const showCategoriesList = ()=>{
    categoriesListArray.forEach((category)=>{
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
        booksContainer.innerHTML += bookTemplate(book);
    });
};
highestToLowestPrice.addEventListener("click", (e)=>{
    e.preventDefault();
    highestToLowest();
});
const lowestToHighest = ()=>{
    bookList.sort((a, b)=>{
        return a.price - b.price;
    });
    booksContainer.innerHTML = "";
    bookList.forEach((book)=>{
        booksContainer.innerHTML += bookTemplate(book);
    });
};
lowestTHighestPrice.addEventListener("click", (e)=>{
    e.preventDefault();
    lowestToHighest();
});
const backToNormalFiltering = ()=>{
    bookList.sort((a, b)=>{
        return a.id - b.id;
    });
    booksContainer.innerHTML = "";
    bookList.forEach((book)=>{
        booksContainer.innerHTML += bookTemplate(book);
    });
};
backToNormal.addEventListener("click", (e)=>{
    e.preventDefault();
    backToNormalFiltering();
});

//# sourceMappingURL=index.1caaeb74.js.map
