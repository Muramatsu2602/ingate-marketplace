var storeElements = {
  app: document.createElement("app"),
  header: document.createElement("div"),
  body: document.createElement("div"),
  footer: document.createElement("div"),
  allCardsContainer: document.createElement("div"),
  cards: {},
  logoContainer: document.createElement("div"),
  searchContainer: document.createElement("div"),
  searchInput: document.createElement("input"),

  createApp: function () {
    // document contains the app
    document.getElementById("app").appendChild(this.app);
    this.app.className = "app-container";
  },

  createHeader: function () {
    this.header.className = "header-container";
    this.app.appendChild(this.header);

    // img
    var img = document.createElement("img");
    img.src = "img/website/scientist.svg";
    img.className = "header-logo";
    this.logoContainer.appendChild(img);

    // Title
    var title = document.createElement("a");
    title.href = "";
    title.innerHTML = "Super Trunfo: Scientist";
    this.logoContainer.appendChild(title);

    // searchbar
    this.searchInput.placeholder = "pesquisar por nome...";
    this.searchInput.onkeyup = function (e) {
      console.log("keyup", e.target.value);
      App.store.state.search = e.target.value.toLowerCase();
      App.controllers.renderAllCards();
    };

    // adding children to header-container
    this.searchContainer.appendChild(this.searchInput);
    this.header.appendChild(this.logoContainer);
    this.header.appendChild(this.searchContainer);
  },

  createBody: function () {
    this.body.innerHTML = "<h2>Welcome to our Store!</h2>";
    this.body.className = "body-container";
    this.app.appendChild(this.body);

    this.allCardsContainer.className = "all-cards-container";
    this.body.appendChild(this.allCardsContainer);
  },

  createFooter: function () {
    this.footer.innerHTML = "<p>Programmed with ♡ by @Muramatsu2602";
    this.footer.className = "footer-container";
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
