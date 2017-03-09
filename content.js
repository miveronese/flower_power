
$(document).ready(function() { 
  checkContainer();
});

var wordsToChange = [ /tech/g, /app/g, /chat/g, /tools/g ]

function checkContainer() { 
  if($("body").is(':visible')) {
    for (i =0; i < wordsToChange.length; i++) {
      $('body')[0].innerHTML = $('body')[0].innerHTML.replace(wordsToChange[i], "hhaaaaa")
    } 
  }
  else {
     console.log("setTimeout");
     setTimeout(checkContainer, 1000);
  }
}
