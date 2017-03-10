$(document).ready(function() { 
  checkContainer();
});

var replacers = {
  flower1: "&#10048;",
  flower2: "&#10047; ",
  flower3: "&#10049; ",
  flower4: "&#9752; ",
  flower5: "&#127799;",
  elvis: "&#128378;",
  sad: " &#9785;",
  trevo: "  &#9752;",
  skull: " &#9760; ",
  coffee: " &#9749;  ",
  whiteflower: " &#128174; ",
  Flower: " &#128174; ",
  rose: " &#129344; ",
  prettyflower: " &#127989; ",
  fallenleaf: " &#127810; ",
  mapleleaf: " &#127809; ",
  fourleafclover: " &#127808; ",
  palmtree: " &#127796;",
  tree: " &#127795; ",
  twohearts: " &#128149; ",
  biology: " &#127795; ",
  rays: " &#2x6A1 ",
  proton: " &#2x6A1 ",
  eletron: " &#2x6A1 ",
  people:  " &#128106; ",
  light:  " &#127774; ",
  feast: " &#x266b; ",
  welcome: " &#128152; ",
  planet: " &#127757; ",
  universe: " &#127757; ",
  defense: "&#10048; ",
  reject: " &#10048;  ",
  crashes: " &#10048; ",
  raid: " &#10047; ",
  fighting: " &#10047;  ",
  military: " &#10049; ",
  war: " &#127989; ",
  attack: " &#10049; ",
  bomb: " &#10049; ",
  enemy: " &#9752; ",
  turmoil: " &#9752; ",
  scandal: " &#9752; ",
  terrorism: " &#127989; ",
  terror: " &#9752; ",
  troops: " &#9752; ",
  bomber: " &#127799;",
  corps: " &#127799; ",
  politics: " &#127799; ",
  man: " &#129333; ",
  himself: " &#129333; ",
  cop: " &#129333; ",
  boy: " &#129333; ",
  Obama:  " &#128378; ",
  American: " &#128378; ",

  Catholic: " &#9815;" ,
  Pope:  " &#x265d; ",
  religion: " &#x271d; ",
  good: " &#128149; ",
  positive:  " &#128149; ",
  happiness: " &#128515; ",
  town: " &#127960; ",
  city: " &#127960; ",
  hope: " &#x2661; ",
  hopes: " &#x2661; ",
  attitude: " &#x2661; ",
  health: " &#128152; ",
  heart: " &#x2661; ",
  Message: " &#x2661; ",
  guilty: " &#x2661; ",
  masses:  " &#128106; ",
  woman: " &#128103; ",
  girl: " &#128103; ",
  lady: " &#128103; ",
  Kids: " &#128696; ",
  Grandma: " &#128103; ",
  Grandmother: " &#128103; ",
  Music: " &#x266b; ",
  happiness: "&#128515; ",
  summer: " &#x263c; ",
  songs: " &#x266b; ",
  Songs: "&#127932; ",
}

$('h1').css('color', 'green');
$('h2').css('color', 'lillac');
$('h3').css('color', 'blue');
$('h4').css('color', 'yellow');
$('a').css('color', 'green');
$('span').css('color', 'lilac');
$('p').css('color', 'Coral');

function checkContainer() { 
  if($("body").is(':visible')) {
    for (var key in replacers) {
      newkey = new RegExp(key, 'i')
      $('body')[0].innerHTML = $('body')[0].innerHTML.replace(new RegExp(newkey, 'g'), replacers[key]);  
    }
  }
  else {
    console.log("setTimeout");
    setTimeout(checkContainer, 1000);
  }
}
