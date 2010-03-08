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
  //alert("No input was provided.") 
}

function cartWasTapped()
{
  //alert("Clicked!");
  jQT.goTo("#selectPeriod", 'slide');
  
} 

function cartWasTapped1()
{
  //alert("Clicked!");
  jQT.goTo("#selectItems1", 'slide');
  
}


function cartWasTapped2()
{
  //alert("Clicked!");
  jQT.goTo("#selectItems2", 'slide');
  
}


function cartWasTapped3()
{
  //alert("Clicked!");
  jQT.goTo("#selectItems3", 'slide');
  
}

function cartWasTapped4()
{
  //alert("Clicked!");
  jQT.goTo("#checkout", 'slide');
  
}


function milkWasTapped()
{
  $("#selectItems1").append('<div class="milkList" > <li><div class="milkType" id="whole" onclick="wholeWasClicked()">Whole</div><div class="milkType" id="2percent">2% Milk</div><div class="milkType" id="1percent">1% Milk</div></li> </div>');
  
}

function incrementMilk()
{
  var x = 0;
  x = x + 1;
}

function instructionsWasTapped()
{
  $("#firstBackground").append('<div class="instructions1" id="help1" onclick="hideInstructions()">These are the Instructions</div>');
}


function nameWasTapped()
{
  $("#firstBackground").append('<div class="yourName" id="name1">Enter Your Name<input id="yourName1" type="text" name= "firstName"/><input type="submit" value="send" onclick="getName()"/></div>');
}

  
function hideInstructions()
{
  $("#help1").fadeOut("slow");
  
}

function getName()
{
  $("#name1").fadeOut("slow");
  bigName = $("#yourName1").val();
  alert(bigName);
}
