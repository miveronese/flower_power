
//Aqui vamos gerenciar das Browser Actions.
// Um exemplo de Browser Action: colocar um ícone ao lado da address bar, de modo que nosso
// código responda a cliques dados ali.
// Primeiro, temos de add uma imagem (icon.png) e inclui-la no arquivo 
//manifest.jo.
// O script content.js tem limitações e só gerencia ações na página atual.
// Assim, outro tipo de script  precisa ser adicionado e que, em vez da página atual, acesse
// outras coisas. Esse script será o background.js
// Adicionar a Message passing é necessario pq o "content script" nao responde a clicks no Browser Action.
// O Google tem a opção "message passing", que permite que os scritps enviem mensagens e respondam a elas.
// Desse modo, content.js e background.js poderão interegir

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
)
