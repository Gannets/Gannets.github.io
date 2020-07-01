/* 
  comment 
*/

// also comment

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/250buddy.png') {
      myImage.setAttribute ('src','images/250clown.png');
    } else {
      myImage.setAttribute ('src','images/250buddy.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// Username js below

function setUserName() {
  let myName = prompt('Enter your name, please');
  if(!myName || myName === null) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'gannets.dev, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'gannets.dev, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}