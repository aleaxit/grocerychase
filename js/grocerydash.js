// Project settings

var jQT = $.jQTouch({
  icon: 'images/shoppingcart48.png',
  startupScreen: 'images/food-pyramid.jpg',
  addGlossToIcon: false,
  statusBar: 'default'
});

var name = '';
var bigName;


// Initialization method
$(function() {
   
  });

function pageIsLoaded()
{
  //$("#first-background");
  //.bind("pageAnimationEnd");
  //displayNoInput();
}

function displayNoInput()
{
 // alert("No input was provided.") 
}

function cartWasTapped()
{
 movetoslide("selectPeriod");
  }

function movetoslide(slide)
{
  //alert(slide);
  $(".cart").addClass("cart_moved");
  setTimeout("slide_mover('"+ slide + "')", 2000);

}

function slide_mover(slide)
{
 //alert(slide);
 jQT.goTo('#' + slide, 'slide');
 $(".cart").removeClass("cart_moved");

}

var nextaisle = 0;
var itemsbyaisle = [
  ['dairy-aisle240ht.jpg', 'milk', 'cheese', 'yogurt'],
  ['produce-aisle240ht.jpg','fruit', 'veggies', 'nuts'],
  ['meat-aisle240ht.jpg','beef', 'chicken', 'fish', 'tofu']
  ];
var purchased = [];

function buy(anitem) {
  purchased.push(anitem);
  $("#score").text(purchased.length);
}


function gotoaisle(whichaisle)
{
  $(".cart").addClass("cart_moved");
  if (whichaisle >= itemsbyaisle.length) {
    stopTimer();
    $("#score1").text(purchased.length);
    showTimer("#finalTime", $("#finalTime").text() + ' ');
    $("#finalScore").text(
        $("#finalScore").text() + ' ' + purchased.length
        );
    var finalist = '';
    var i;
    for(i=0; i<purchased.length; ++i) {
      finalist = finalist + ' ' + purchased[i];
    }
    $("#finalList").text(finalist);
    movetoslide("checkout");
  } else {
    nextaisle = whichaisle + 1;
    var aisle_image;
    aisle_image='url(images/' + itemsbyaisle[whichaisle][0] + ')';
    $("#aisle_bg").css("background-image", aisle_image);
    $("#items").empty();
    $("#score").text(purchased.length);
    var i;
    for(i=1; i<itemsbyaisle[whichaisle].length; ++i) {
      var iname = itemsbyaisle[whichaisle][i];
      $("#items").append(
        '<button id="' + iname + '" class="item" ' +
        'value="' + iname + '" onclick="itemWasTapped(\'' +
        iname + '\')">' + iname + '</button>'
        );
   $(".cart").removeClass("cart_moved");
        
    }
    if (whichaisle == 0) {
      startTimer();
      movetoslide("aisle");
    }
  } 
}

var curTime = 0;
var intervalId = 0;

function showTimer(where, prefix) {
  var seconds=Math.floor(curTime % 60) + "",
      minutes=Math.floor((curTime/60) % 60) + "";
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  $(where).text(prefix + minutes + ":" + seconds);
}

function tick() {
  curTime += 1;
  showTimer("#timer", '');
}

function stopTimer() {
  if (intervalId !== 0) {
    clearInterval(intervalId);
    intervalId = 0;
  }
}

function startTimer() {
  if (intervalId === 0) {
    curTime = 0;
    intervalId = setInterval(tick, 1000);
  }
}

function oneDayWasTapped()
{
  $("#selectPeriod").append('<div class="instructions1" id="help1" onclick="hideInstructions()">Goals: <li>Dairy-3 servings</li><li>Graines-5 servings</li><li>Veggies-3 servings</li><li>Fruit-3 servings</li></div>');
}

function itemWasTapped(anitem)
{
  $("#aisle").append('<div class="instructions1" id="help1" onclick="hideInstructions()">Organic, Regular... </div>');
}


function milkWasTapped()
{
  $("#selectItems1").append('<div class="milkList" > <li><div class="milkType" id="whole" onclick="wholeWasClicked()">Whole</div><div class="milkType" id="2percent">2% Milk</div><div class="milkType" id="1percent">1% Milk</div></li> </div>');
  
}

function instructionsWasTapped()
{
  $("#firstBackground").append('<div class="instructions1" id="help1" onclick="hideInstructions()">These are the Instructions</div>');
}

function nameWasTapped()
{
  $("#firstBackground").append('<div class="yourName" id="name1">Enter Your Name<input id="yourName1" type="text" name= "firstName"/><input type="submit" value="Done!" onclick="getName()"/></div>');
}

function hideInstructions()
{
  $("#help1").fadeOut("slow");
  
}

function getName()
{
  $("#name1").fadeOut("slow");
  bigName = $("#yourName1").val();
  // alert(bigName);
  $(".username").text(bigName);
}
