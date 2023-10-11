fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else if (res.status === 404) {
      throw new Error("Percorso non trovato (404)");
    } else {
      throw new Error("Errore generico");
    }
  })
  .then((booksData) => {
    console.log("booksData", booksData);
    const immaginiLibri = document.querySelectorAll(".card-img-top");
    const testoLibri = document.querySelectorAll(".card-title");
    for (let i = 0; i < booksData.length; i++) {
      immaginiLibri[i].src = booksData[i].img;
      testoLibri[i].innerText = booksData[i].title;
    }
  })
  .catch((err) => {
    console.log(err);
  });

const pulsanti = document.querySelectorAll(".btn");

pulsanti.forEach(function (button) {
  button.innerText = "scarta";
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    card.remove();
  });
});
