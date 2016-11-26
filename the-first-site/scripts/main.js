/*var myImg = document.querySelector('img');

myImg.onclick = function(){
	var mySrc
}*/

/*var timeInMs = Date.now();
if (timeInMs % 2 === 0) {
	alert('time is even');
} else if (timeInMs % 3 === 0) {
	alert('can be divided by 3');
} else {
	alert('is odd');
}*/

/*document.querySelector('img').onmouseover = function() {
	alert('Namaste and good luck!');
}*/

var myImage = document.querySelector('img');

myImage.onmouseover = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/salsa.jpg') {
      myImage.setAttribute ('src','images/salsa-second.jpg');
    } else {
      myImage.setAttribute ('src','images/salsa.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

var myButton = document.querySelector ('button');
myButton.onclick = function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName); 
  myHeading.textContent = 'SALSA IS COOL, ' + myName;  
}

var name = localStorage.getItem ('name');
  if (name){
	myHeading.textContent = 'SALSA IS COOL, ' + name;
  }
  else {
	  
  }
  
/*if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
*/




