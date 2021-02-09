var storeElements = {
  app: document.createElement("app"),
  header: document.createElement("div"),
  body: document.createElement("div"),
  footer: document.createElement("div"),
  allCardsContainer: document.createElement("div"),
  cards: {},
  searchContainer: document.createElement("div"),
  searchInput: document.createElement("input"),

  createApp: function () {
    // document contains the app
    document.getElementById("app").appendChild(this.app);
    this.app.className = "app-container";
  },

  createHeader: function () {
    this.header.innerHTML = "Super Trunfo: Scientist";
    this.header.className = "header-container";
    this.app.appendChild(this.header);

    //
    this.searchInput.placeholder = "pesquisar por nome...";
    this.searchInput.onkeyup = function (e) {
      console.log("keyup", e.target.value);
      App.store.state.search = e.target.value.toLowerCase();
      App.controllers.renderAllCards();
    };
    this.searchContainer.appendChild(this.searchInput);
    this.header.appendChild(this.searchContainer);
  },

  createBody: function () {
    this.body.innerHTML = "Eu sou body, ola";
    this.body.className = "body-container";
    this.app.appendChild(this.body);

    this.allCardsContainer.className = "all-cards-container";
    this.body.appendChild(this.allCardsContainer);
  },

  createFooter: function () {
    this.footer.innerHTML = "Eu sou footer";
    this.body.className = "footer-container";
    this.app.appendChild(this.footer);
  },

  createElements: function () {
    console.log("Iniciando a criacao dos elementos");

    this.createApp();
    this.createHeader();
    this.createBody();
    this.createFooter();

    console.log(App.store.cards);
    console.log("Elementos criados");
  },
};
