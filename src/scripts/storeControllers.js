var storeControllers = {
  renderAllCards: function () {
    var cards = App.store.state.cards;
    console.log("Let's render all the cards...", cards);

    // iterating through all cards
    for (var i = 0; i < cards.length; i++) {
    
      var card = cards[i];

      console.log(`CARD[${i}]: `, card);

      // filtrar caso tenha algo no state.search
      console.log("Search:", App.store.state.search);

      // creating card container
      var el = document.createElement("div");
      el.className = "card-container";

      // card's image
      var img = document.createElement("img");
      img.src = card.url;
      el.appendChild(img);

      // card's info
      var info = document.createElement("div");
      info.innerHTML = card.name  + "<br>" + card.price;
      el.appendChild(info);

      console.log(el);
      App.elements.cards[card.id] = el;
      App.elements.allCardsContainer.appendChild(el);
    }
  },
};
