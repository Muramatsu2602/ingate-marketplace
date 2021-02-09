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
    // removing error message when no search result was found
    App.elements.allCardsContainer.innerHTML = null;
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
      btn.onclick = function (event) {
        // call modal to confirm purchase
        // https://www.w3schools.com/howto/howto_css_delete_modal.asp
        if (event.target == modal) {
          modal.style.display = "none";
        }
        alert("PURCHASE CONFIRMATION");
        console.log(event.target);
      };

      el.appendChild(btn);

      console.log(el);
      App.elements.cards[card.id] = el;
      App.elements.allCardsContainer.appendChild(el);
    }

    // if search return 0 results
    if (!App.elements.allCardsContainer.hasChildNodes()) {
      App.elements.allCardsContainer.innerHTML = `<div class="error-message"><span >No results for '${search}'</span><div>  <hr>`;
    }
  },
};
