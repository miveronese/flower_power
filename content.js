$(document).ready(function() { 
  replaceWords();
});

var replacers = {
  rock: "&#128378;",
  woman: " &#128103; ",
  sad: " &#9785;",
  trevo: "  &#9752;",
  skull: " &#9760; ",
  danger: " &#9760; ",
  coffee: " &#9749;  ",
  flower: " &#128174; ",
  rose: " &#129344; ",
  flowers: " &#127989; ",
  wind: " &#127810; ",
  mapleleaf: " &#127809; ",
  lucky: " &#127808; ",
  forest: " &#127796;",
  forests: " &#127795; ",
  love: " &#128149; ",
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
  man: " &#129333; ",
  himself: " &#129333; ",
  cop: " &#129333; ",
  boy: " &#129333; ",
  obama:  " &#128378; ",
  american: " &#128378; ",
  catholic: " &#9815;" ,
  pope:  " &#x265d; ",
  religion: " &#x271d; ",
  good: " &#128149; ",
  positive:  " &#128149; ",
  happiness: " &#128515; ",
  town: " &#127960; ",
  city: " &#127960; ",
  hope: " &#x2661; ",
  hopes: " &#x2661; ",
  health: " &#128152; ",
  heart: " &#x2661; ",
  guilty: " &#x2661; ",
  masses:  " &#128106; ",
  girl: " &#128103; ",
  lady: " &#128103; ",
  kids: " &#128696; ",
  grandma: " &#128103; ",
  grandmother: " &#128103; ",
  music: " &#x266b; ",
  happiness: " &#128515; ",
  summer: " &#x263c; ",
  songs: " &#127932; ",
  president: " &#128103; ",
  travel: "&#9992;",
  militar: " &#128110; ",
  mayor: " &#128103; ",
  we: " &#128106; ",
  towns: " &#127960; ",
  cities: " &#127960; ",
  town: " &#127960; ",
  key: " &#128273; ",
  prohibit: " &#128711; ",
  news: " &#128240; ",
  newspaper: " &#128240; ",
  bus: " &#128652; ",
  car: " &#128665; ",
  house: " &#127968; ",
  F1: " &#127950; ",
  cry: " &#128546; ",
  cries:  " &#128546; ",
  chocolate: " &#127851; ",
  photo: " &#128444; ",
  picture: " &#128444; ",
}

$('h1').css('color', 'green');
$('h2').css('color', 'lillac');
$('h3').css('color', 'blue');
$('h4').css('color', 'yellow');
$('a').css('color', 'green');
$('span').css('color', 'lilac');
$('p').css('color', 'Coral');


function replaceWords() { 
  if($("body").is(':visible')) {
    for (var key in replacers) {
      newkey = new RegExp('\\'+ 'b'+ key + '\\' + 'b', 'gi')
      $('body')[0].innerHTML = $('body')[0].innerHTML.replace(newkey, replacers[key]);  
      console.log(newkey);
    }
  }
  else {
    console.log("setTimeout");
    setTimeout(replaceWords, 1000);
  }
}
