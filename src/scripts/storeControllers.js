var storeControllers = {
  /**
   * removing cards from store page
   */
  removeAllCards: function () {
    // ERASING STORE CARDS
    var els = App.elements.cards;
    var keys = Object.keys(els);

    for (let i = 0; i < keys.length; i++) {
      var key = keys[i];
      var el = els[key];
      el.remove();
    }
    App.elements.cards = {};

    // ERASING MY CARDS
    var myEls = App.elements.myCards;
    var myKeys = Object.keys(myEls);

    for (let j = 0; j < myKeys.length; j++) {
      var myKey = myKeys[j];
      var myEl = myEls[myKey];
      myEl.remove();
    }
    App.elements.myCards = {};
  },

  /**
   * rendering card and its visual attributes
   */
  renderStoreCardComponent: function (card) {
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
  },

  /**
   * rendering personal card and its visual attributes
   */
  renderInventoryCardComponent: function (card) {
    // TODO:
    // maybe include wallet and stuff
    // change visuals a little
    // css classes change too!

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
    btn.innerHTML = "Sell me!";
    el.onclick = function (event) {
      // https://www.w3schools.com/howto/howto_css_delete_modal.asp
      alert("SOLD CARD CONFIRMATION");
      var id = Math.floor(this.id);
      var c = App.store.state.myCards.find((x) => {
        return x.id === id;
      });

      App.controllers.sellCard(c);
    };

    el.appendChild(btn);

    // console.log(el);
    App.elements.myCards[card.id] = el;
    App.elements.myCardsContainer.appendChild(el);
  },

  /**
   * read all cards from storeCards.js
   */
  renderAllCards: function () {
    var search = App.store.state.search;
    var cards = App.store.state.cards;
    var myCards = App.store.state.myCards;

    console.log("STORE CARDS: ", cards);
    console.log("MY CARDS: ", myCards);

    // removing all old cards before rendering new ones
    // removing error message when no search result was found
    App.elements.allCardsContainer.innerHTML = null;
    this.removeAllCards();

    if (App.store.state.isStore) {
      // iterating through all STORE CARDS
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        // console.log(`CARD[${i}]: `, card);
        // rendering card on screen

        // filtrar caso tenha algo no state.search
        if (card.name.toLowerCase().search(search) === -1) {
          continue;
        }
        // filtering already-sold cards
        if (App.controllers.ownCard(card)) {
          continue;
        }

        //! Essa linha no seu código esta antes dos filtros
        App.controllers.renderStoreCardComponent(card);
      }
    } else {
      // iterating through all INVENTORY CARDS
      for (var i = 0; i < myCards.length; i++) {
        var card = myCards[i];

        // filtrar caso tenha algo no state.search
        if (card.name.toLowerCase().search(search) === -1) {
          continue;
        }

        // rendering card on screen
        App.controllers.renderInventoryCardComponent(card);
      }
    }

    // if search return 0 results
    if (
      App.store.state.isStore &&
      !App.elements.allCardsContainer.hasChildNodes()
    ) {
      App.elements.allCardsContainer.innerHTML = `<div class="error-message"><span >No results for '${search} in the Store'</span><div>  <hr>`;
    }

    if (
      !App.store.state.isStore &&
      search !== "" &&
      !App.elements.myCardsContainer.hasChildNodes()
    ) {
      App.elements.myCardsContainer.innerHTML = `<div class="error-message"><span >No results for '${search} in Inventory'</span><div>  <hr>`;
    }
    // if either store or inventory are empty
    if (
      !App.elements.allCardsContainer.hasChildNodes() &&
      App.store.state.isStore
    ) {
      App.elements.myCardsContainer.innerHTML = `<div class="error-message"><span >There's nothing to see here</span><div>  <hr>`;
    }

    if (
      !App.elements.myCardsContainer.hasChildNodes() &&
      !App.store.state.isStore
    ) {
      App.elements.myCardsContainer.innerHTML = `<div class="error-message"><span >There's nothing to see here</span><div>  <hr>`;
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
   * selling a card
   * @param {*} card
   */
  sellCard: function (card) {
    console.log("vendi o card", card);

    var newMyCards = [];
    // filtering the card we're selling
    for (var i = 0; i < App.store.state.myCards.length; i++) {
      var myCard = App.store.state.myCards[i];

      if (myCard.id !== card.id) {
        newMyCards.push(myCard);
      }
    }

    // my cards now doesnt have that sold card
    App.store.state.myCards = newMyCards;
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

    return false;
  },
};
