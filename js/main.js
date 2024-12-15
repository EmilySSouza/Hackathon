fetch('books.json')
 .then(response => response.json())
 .then( data => {
    const booksList = document.getElementById("booksList");
    const ul = booksList.querySelector("ul");

    data.books.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `<h2>${book.title}</h2>
        <p><strong>Autor: </strong>${book.author}</p>
        <img src="${book.photo}" alt="${book.title}">
        <p><strong>Gênero: </strong>${book.genre}</p>
        <p><strong>Ano: </strong>${book.year}</p>
        <p>${book.description}</p>`;
        ul.appendChild(li);
    })
 })