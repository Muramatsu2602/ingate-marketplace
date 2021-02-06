var storeElements = {
  app: document.createElement("app"),
  header: document.createElement("div"),
  body: document.createElement("div"),
  footer: document.createElement("div"),
  allCardsContainer: document.createElement("div"),
  cards: {},

  createApp: function () {
    // document contains the app
    document.getElementById("app").appendChild(this.app);
    this.app.className = "app-container";
  },

  createHeader: function () {
    this.header.innerHTML = "Ich bin ein Header";
    this.header.className = "header-container";
    this.app.appendChild(this.header);
  },

  createBody: function () {
    this.body.innerHTML = "Eu sou body";
    this.body.className = "body-container";
    this.app.appendChild(this.body);
  },

  createFooter: function () {
    // footer
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
