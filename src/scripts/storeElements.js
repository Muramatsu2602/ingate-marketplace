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

    // container
    this.app.style.postion = "absolute";
    this.app.style.height = "100%";
    this.app.style.width = "100%";
    this.app.style.border = "1px solid black";
  },

  createHeader: function () {
    // header
    this.header.innerHTML = "Ich bin ein Header";
    this.header.style.height = "50px";
    this.header.style.border = "1px solid blue";
    this.app.appendChild(this.header);
  },

  createBody: function () {
    // body
    this.body.innerHTML = "Eu sou body";
    this.body.style.border = " 1px solid green";

    // this.allCards.style.border = "1px solid green";

    this.app.appendChild(this.body);
  },

  createFooter: function () {
    // footer
    this.footer.innerHTML = "Eu sou footer";
    this.footer.style.border = " 1px solid purple";
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
