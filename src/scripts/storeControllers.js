var storeControllers = {
  removeAllCards: function () {
    var els = App.elements.cards;
    var keys = Object.keys(els);

    for (let i = 0; i < keys.length; i++) {
      var key = keys[i];
      var el = els[key];
      el.remove();
    }

    App.elements.cards = {};
  },
  renderAllCards: function () {
    var search = App.store.state.search;
    var cards = App.store.state.cards;
    console.log("Let's render all the cards...", cards);

    // removing all old cards before rendering new ones
    this.removeAllCards();

    // iterating through all cards
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      // console.log(`CARD[${i}]: `, card);

      // filtrar caso tenha algo no state.search
      console.log("SEARCH:", card.name, search, card.name.search(search));
      if (card.name.toLowerCase().search(search) === -1) {
        continue;
      }

      // creating card container
      var el = document.createElement("div");
      el.className = "card-container";

      // card's image
      var img = document.createElement("img");
      img.src = card.url;
      el.appendChild(img);

      // card's info
      var info = document.createElement("div");
      info.innerHTML = card.name + "<br>" + card.price;
      el.appendChild(info);

      console.log(el);
      App.elements.cards[card.id] = el;
      App.elements.allCardsContainer.appendChild(el);
    }
  },
};
