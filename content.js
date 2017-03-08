

// Acessar a primeira url e printa-la no console. 
// Note que nao precisa checar se o dom está carregado, pq o chrome so
// injeta os plugins depois que a pagina já carregou.

// var firstHref = $("a[href^='http']").eq(0).attr("href");
// console.log( "bloo");
// console.log(firstHref);

// Abaixo, respondemos à ação enviada por background.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      console.log("blaaaa");
      //console.log(firstHref);
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

// Para que a url desejada seja aberta, e como apenas o backround.js pode abrir urls, é preciso
// o seguinte:
// background.js nota que ouve um click no icone, envia uma msg pra content.js informando
// que ouve um clique em x link; content.js pega esse link e manda de volta pra background.js,
// mandando-o abrir o tal link.
//