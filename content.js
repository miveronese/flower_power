
//alert( "olaaaaaa");

// Acessar a primeira url e printa-la no console. 
// Note que nao precisa checar se o dom está carregado, pq o chrome so
// injeta os plugins depois que a pagina já carregou.

var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log( "bloo");
console.log(firstHref);

// Abaixo, respondemos à ação enviada por background.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");
      console.log("blaaaa");
      //console.log(firstHref);
    }
  }
);
