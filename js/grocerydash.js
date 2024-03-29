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
  //.bind("pageAnimatinnd");
  //displayNoInput();
}

function displayNoInput()
{
  // alert("No input was provided.")
}

function cartWasTapped()
{
  moveCart("selectProfile");
}

function moveCart(slide)
{
  //alert(slide);
  $(".cart").addClass("cart_moved");
  setTimeout("moveSlide('"+ slide + "')", 1000);
}

function moveSlide(slide)
{
  //alert(slide);
  jQT.goTo('#' + slide, 'slide');
  $(".cart").removeClass("cart_moved");
}



var nextaisle = 0;
var itemsbyaisle = [
  ['dairy-aisle240ht.jpg', 'milk', 'cheese', 'yogurt'],
  ['produce-aisle240ht.jpg', 'fruit', 'veggies', 'nuts'],
  ['meat-aisle240ht.jpg', 'beef', 'chicken', 'fish', 'tofu']
  ];
var purchased = [];
var scorecard = 0;
var regex = /^(org)/;
function buy(anitem) {
  woohoo();
  purchased.push(anitem);
  $('.milkList').fadeOut('fast');
  //alert('added ' + anitem + ' to cart');
  if (regex.test(anitem)) {
    scorecard = scorecard+2;
  } else {
    scorecard = scorecard+1;
  }
  $("#score").text(scorecard);
}


function gotoaisle(whichaisle)
{
  if (whichaisle >= itemsbyaisle.length) {
    stopTimer();
    $("#score1").text(scorecard);
    showTimer("#finalTime", $("#finalTime").text() + ' ');
    $("#finalScore").text($("#finalScore").text() + ' ' + scorecard);
    var finalist = '';
    var i;
    for(i=0; i<purchased.length; ++i) {
      finalist = finalist + ' ' + purchased[i] + '.';
    }
    $("#finalList").text(finalist);
    moveCart("checkout");
  } else {
    $(".cart").addClass("cart_moved");
    // alert('nextaisle' + nextaisle);
    nextaisle = whichaisle + 1;
    var aisle_image;
    aisle_image = 'url(images/' + itemsbyaisle[whichaisle][0] + ')';
    $("#aisle_bg").css("background-image", aisle_image);
    $("#items").empty();
    $("#score").text(scorecard);
    $(".cart").removeClass("cart_moved");
    var i;
    for(i=1; i<itemsbyaisle[whichaisle].length; ++i) {
      var iname = itemsbyaisle[whichaisle][i];
      $("#items").append(
        '<button id="' + iname + '" class="item" ' +
        'value="' + iname + '" onclick="itemWasTapped(\'' +
        iname + '\')">' + iname + '</button>'
        );
    }
    if (whichaisle == 0) {
      startTimer();
      moveCart("aisle");
    }
  }
}

var curTime = 0;
var intervalId = 0;

function showTimer(where, prefix) {
  var seconds = Math.floor(curTime % 60) + "",
      minutes = Math.floor((curTime/60) % 60) + "";
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  $(where).text(prefix + minutes + ":" + seconds);
}

function clearTimer(where, prefix) {
  curTime = 0;
  $(where).text(prefix + '');
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
  $("#selectPeriod").append('<div class="instructions1" id="oneday" onclick="hideInstructions()">Goals:<br/> Dairy-3 servings<br/>Grains-5 servings<br/>Veggies-3 servings<br/>Fruit-3 servings<br/>Meat-3 servings</div>');
}

function oneWeekWasTapped()
{
  $("#selectPeriod").append('<div class="instructions1" id="oneday" onclick="hideInstructions()">Goals:<br/> Dairy-21 servings<br/>Grains-35 servings<br/>Veggies-21 servings<br/>Fruit-21 servings<br/>Meat-21 servings</div>');
}
function oneMonthWasTapped()
{
  $("#selectPeriod").append('<div class="instructions1" id="oneday" onclick="hideInstructions()">Sorry, this option is not currently available</div>');
}

function enviroGoals()
{
  $("#selectProfile").append('<div class="instructions1" id="enviro" onclick="hideInstructions()">Hints:<br/>Focus on buying foods labelled <li> Organic </li><li> Locally-grown</li><li> Grass-fed</li><li> Cage-free</li><li> Wild-caught </li><br/>These foods are healthier for the environment and healthier for you as well. </div>');
}

function weightGoals()
{
  $("#selectProfile").append('<div class="instructions1" id="weightloss" onclick="hideInstructions()">Hints:<br/>Focus on buying foods labelled <li> Low-Fat </li><li> No Sugar Added</li><li> Single Serving</li> </div>');
}

function diabetesGoals()
{
  $("#selectProfile").append('<div class="instructions1" id="diabetic" onclick="hideInstructions()">Hints:<br/>Focus on buying foods labelled <li> Low-Carb, </li><li> Low Glycemic Index</li><li>No High-Fructose-Corn-Syrup</li></div>');
}

function itemWasTapped(anitem)
{
  $("#aisle").append('<div class="itemlist" id="Organic"onclick="showme(\'org' + anitem + '\')">Organic</div>');
  $("#aisle").append('<div class="itemlist" id="Regular" onclick="showme(\'reg' + anitem + '\')">Regular</div>');
}

function notImplemented()
{
  alert("Sorry, this choice isn't implemented yet.");
}


function woohoo()
{
  $(".milkList").addClass("listClicked");
  $(".cart").addClass("cartBounce");
  setTimeout(' $(".cart").removeClass("cartBounce")', 500);
}

var ittostrs = {
  'regmilk': ['regular milk', 'Whole Milk', 'Skim Milk'],
  'orgmilk': ['organic milk', 'Organic Whole Milk', 'Organic Skim Milk'],
  'regcheese': ['cheese', 'American', 'Cheddar'],
  'orgcheese': ['organic cheese', 'Gouda', 'Swiss'],
  'regyogurt': ['yogurt', 'Chocolate', 'Vanilla'],
  'orgyogurt': ['organic yogurt', 'Organic Strawberry', 'Organic Plain'],
  'regveggies': ['veggies', 'Carrots', 'Mixed Greens'],
  'orgveggies': ['organic veggies', 'Organic Carrots', 'Organic Mixed Greens'],
  'regfruit': ['fruit', 'Oranges', 'Apples'],
  'orgfruit': ['organic fruit', 'Organic Oranges', 'Organic Apples'],
  'regbeef': ['beef', 'Ground Beef', 'Steak'],
  'orgbeef': ['grassfed beef', 'GrassFed Lean Ground', 'GrassFed Steak']
}

function showme(anitem)
{
  hideList();
  var itemprops = ittostrs[anitem];
  if (itemprops) {
    var val = '<div class="milkList" onclick="buy(\'' + itemprops[0] + '\')"> <ul>';
    var i;
    for(i=1; i < itemprops.length; ++i) {
      val = val + '<li>"' + itemprops[i] + '"</li> ';
    }
    val = val + ' </ul> </div>';
    $("#aisle").append(val);
  } else {
    alert("Sorry " + anitem + " isn't implemented yet");
  }
  setTimeout("$('.milkList').fadeOut('slow')", 4000);
}


function instructionsWasTapped()
{
  $("#firstBackground").append('<div class="instructions1" onclick="hideInstructions()"><li>Click cart to move </li><li> Click food to see choices  </li><li> Scores based on profile preferences on next page </li><li> Click here to hide </div>');
}

function nameWasTapped()
{
  $("#firstBackground").append('<div class="yourName" id="name1">Enter Your Name<input id="yourName1" type="text" name= "firstName"/><input type="submit" value="Done!" onclick="getName()"/></div>');
  $("#yourName1").keypress(function (e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      getName();
      return false;
    } else {
      return true;
    }
  });
  $("#yourName1").focus();
}

function hideList()
{
  $('.itemlist').fadeOut("slow");
}
function hideInstructions()
{
  $('.instructions1').fadeOut("slow");
}

function getName()
{
  $("#name1").fadeOut("slow");
  bigName = $("#yourName1").val();
  // alert(bigName);
  $(".username").text(bigName);
}

function newGame()
{
  purchased.length = 0;
  scorecard = 0;
  curTime = 0;
  $("#finalTime").text('FINAL TIME:');
  $("#finalScore").text('FINAL SCORE:');
  $("#finalList").text('FINAL LIST:');
  moveCart('selectProfile');
}
