var storeControllers = {
  /**
   * removing cards from store page
   */
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

  /**
   * read all cards from storeCards.js
   */
  renderAllCards: function () {
    var search = App.store.state.search;
    var cards = App.store.state.cards;
    console.log("Let's render all the cards...", cards);

    // removing all old cards before rendering new ones
    // removing error message when no search result was found
    App.elements.allCardsContainer.innerHTML = null;
    this.removeAllCards();

    // iterating through all cards
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      // console.log(`CARD[${i}]: `, card);

      // filtrar caso tenha algo no state.search
      if (card.name.toLowerCase().search(search) === -1) {
        continue;
      }

      // filtering already-sold cards
      if (App.controllers.ownCard(card)) {
        continue;
      }

      // creating card container
      var el = document.createElement("div");
      el.className = "card-container";
      el.id = card.id;

      // card's image
      var img = document.createElement("img");
      img.src = card.url;
      el.appendChild(img);

      // card's info
      var info = document.createElement("div");
      info.innerHTML =
        "<h3>" +
        card.name +
        "</h3>" +
        "ATK: " +
        +card.attack +
        " DFE: " +
        card.defence +
        " HP: " +
        card.life +
        "<br>" +
        "R$ " +
        card.price;
      el.appendChild(info);

      // confirmation modal called upon clicking the button
      var modal = document.getElementById("id01");

      // car's 'buy me' button
      var btn = document.createElement("button");
      btn.className = "card-btn";
      btn.innerHTML = "Buy me!";
      el.onclick = function (event) {
        // https://www.w3schools.com/howto/howto_css_delete_modal.asp

        alert("PURCHASE CONFIRMATION");

        var id = Math.floor(this.id);
        var c = App.store.state.cards.find((x) => {
          return x.id === id;
        });

        App.controllers.buyCard(c);
      };

      el.appendChild(btn);

      // console.log(el);
      App.elements.cards[card.id] = el;
      App.elements.allCardsContainer.appendChild(el);
    }

    // if search return 0 results
    if (!App.elements.allCardsContainer.hasChildNodes()) {
      App.elements.allCardsContainer.innerHTML = `<div class="error-message"><span >No results for '${search}'</span><div>  <hr>`;
    }
  },

  /**
   * buying a card function
   */
  buyCard: function (card) {
    console.log("comprei o card", card);

    App.store.state.myCards.push(card);

    App.controllers.renderAllCards();
  },

  /**
   * auxiliary method to deal with cards moving from store to Inventory
   * it filters already-sold cards
   * @param {*} card
   */
  ownCard(card) {
    var myCards = App.store.state.myCards;

    for (let i = 0; i < myCards.length; i++) {
      var myCard = myCards[i];
      if (myCard.id === card.id) {
        return true;
      }
    }
  },
};
