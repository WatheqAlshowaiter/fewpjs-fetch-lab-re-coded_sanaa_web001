// fetch('http://api.open-notify.org/astros.json')
// .then(function(response) {
//   return response.json();
// })
// .then(function(json) {
//   console.log(json)
// });

// function fetchBooks() {
//   fetch("https://anapioficeandfire.com/api/books/")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       console.log(json);
//       renderBooks(json);
//     });
// }

const urlApi = "https://anapioficeandfire.com/api/books/";

async function fetchBooks() {
  const reponse = await fetch(urlApi);
  const data = await reponse.json();

  // const { name, characters, numberOfPages } = data;
  // console.log(data);
  renderBooks(data);
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    if (book.name === "A Feast for Crows") {
      const h2 = document.createElement("h2");
      h2.innerHTML = book.name;
      main.appendChild(h2);
    }

    // let char1031 = characters(book.characters);

    // console.log(char1031);

    // const p = document.createElement("p");
    // p.innerText = char1031;
    // main.appendChild(p);
  });
}

// function characters(bookChars) {
//   bookChars.forEach((bookChar) => {
//     // bookChar["https://anapioficeandfire.com/api/characters/1031"];
//     // if(bookChar[0] == 1){
//     if (bookChar === "https://anapioficeandfire.com/api/characters/1031") {
//       console.log(bookChar);
//       return bookChar;
//     }

//     // }
//     // if(bookChar.characters === "https://anapioficeandfire.com/api/characters/1031"){
//     //   console.log(bookChar);
//     // }
//   });
// }

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
