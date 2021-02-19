var storeElements = {
  app: document.createElement("app"),
  header: document.createElement("div"),
  body: document.createElement("div"),
  footer: document.createElement("div"),
  allCardsContainer: document.createElement("div"),
  myCardsContainer: document.createElement("div"),
  cards: {},
  myCards: {},
  logoContainer: document.createElement("div"),
  searchContainer: document.createElement("div"),
  searchInput: document.createElement("input"),
  inventoryContainer: document.createElement("div"),
  confirMmodal: document.createElement("div"),

  createApp: function () {
    // document contains the app
    document.getElementById("app").appendChild(this.app);
    this.app.className = "app-container";
  },

  createHeader: function () {
    this.header.className = "header-container";
    this.app.appendChild(this.header);

    // logo-container
    this.logoContainer.className = "logo-container";

    // img
    var img = document.createElement("img");
    img.src = "img/website/atom.svg";
    img.className = "header-logo";

    // Inventory button
    this.inventoryContainer.className = "inventory-container";
    this.inventoryContainer.innerHTML = "Inventory";
    var treasureImg = document.createElement("img");
    treasureImg.src = "img/website/treasure.svg";
    this.inventoryContainer.onclick = function (e) {
      alert("You clicked on the inventory");
      // TODO:
      App.store.state.isStore = false;
      App.controllers.renderAllCards();
    };

    // Title
    var title = document.createElement("a");
    title.href = "";
    title.innerHTML = "Super Trunfo: Scientist";
    title.onclick = function (e) {
      alert("you clicked on the logo!");
      App.store.state.isStore = true;
      App.controllers.renderAllCards();
    };

    // searchbar
    this.searchInput.placeholder = "pesquisar por nome...";
    this.searchInput.onkeyup = function (e) {
      console.log("keyup", e.target.value);
      App.store.state.search = e.target.value.toLowerCase();
      App.controllers.renderAllCards();
    };

    // adding children to header-container
    this.logoContainer.appendChild(img);
    this.logoContainer.appendChild(title);
    this.inventoryContainer.appendChild(treasureImg);
    this.searchContainer.appendChild(this.searchInput);
    this.header.appendChild(this.logoContainer);
    this.header.appendChild(this.inventoryContainer);
    this.header.appendChild(this.searchContainer);
  },

  createBody: function () {
    if (App.store.state.isStore) {
      this.body.innerHTML = "<h2>Welcome to our Store!</h2>";
    } else {
      this.body.innerHTML = "<h2> Welcome to your Inventory!</h2>";
    }
    this.body.className = "body-container";
    this.app.appendChild(this.body);

    this.myCardsContainer.className = "my-cards-container";
    this.body.appendChild(this.myCardsContainer);

    this.allCardsContainer.className = "all-cards-container";
    this.body.appendChild(this.allCardsContainer);
  },

  createFooter: function () {
    this.footer.innerHTML = "<p>Programmed with ♡ by @Muramatsu2602";
    this.footer.className = "footer-container";
    this.body.appendChild(this.footer);
  },

  createConfirmModal: function () {
    // use this -> https://www.w3schools.com/howto/howto_css_delete_modal.asp
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
