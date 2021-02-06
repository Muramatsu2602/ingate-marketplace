// Jogo de cartas
//  1. Criar uma pagina onde poderemos
//  1.1 listar todos os cards
//  1.2 listar todos os cards do usuario
//  1.3 comprar cartas
//  1.4 vender cartas
// 2. Obj da carta: id, name, life, attack, defence, price e img
// 3. pode escolher as cartas que quiser da internet

var App = {
  // CONSTRUCTOR!
  init: function () {
    console.log("inicio do APP");

    // basic settings
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    this.elements.createElements();
    this.controllers.renderAllCards();

    console.log("Fim do App");
  },
  store: {
    state: {
      isDropdownOpen: false,
    },
    cards: storeCards,
  },
  controllers: storeControllers,
  elements: storeElements,
};

App.init();
