// JavaScript Document
// Cookies
// Some code adapted from How To Store Data With javascript / Javascript Cookie Workshop http://www.nairaland.com/nigeria/topic-215381.0.html

function getCookie(name){ //create function getCookie to retrieve a value from the cookie that was previously stored by the user

	var cookie = document.cookie.split("; "); //assign variable cookie to the cookie object, split into an array seperated on semicolon
	for (var i=0; i < cookie.length; i++){ 
	var crumb = cookie[i].split("="); //iterate through the cookie array and seperate them into key-value pairs
		if (name == crumb[0]) 
			return unescape(crumb[1]); 
			//if the name is equivilant to the value at position zero, which is the key, return the value at position one, which is the value of the key-value pair.
	}
	return ""; //returns an empty string
}

function storeCookie(name,value) { //create function storeCookie stores a value from the cookie
  document.cookie = name + "=" + escape(value) + "; expires=Mon, 31 Dec 2099 23:59:59 UTC;"; //assigns values to the cookie object
  
}
	
// Authentication
function validateForm(){ //creates function validateForm to ensure the user has entered a valid username & password
	var email=document.forms["logInForm"]["email"].value; //assigns the form object and its values to the variable email
	var atpos=email.indexOf("@"); //checks to see if there is an 'at' symbol anywhere in the string
	var dotpos=email.lastIndexOf("."); //checks to see if there is a period anywhere in the string
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){ //checks to see if the period and the at symbol are in the correct position for a valid email address
	
		alert("Not a valid e-mail address"); 
		return false; //if the period and at symbol conditions are false then the user has not entered a valid email and an alert pops up to inform them 
  	}
	
	var password=document.forms["logInForm"]["password"].value;  //assigns the form object and its values to the variable password
	if (password=="undefined" || password.length<5){ //checks to see if the password has been defined and if it contains more than 5 characters
		alert("Please enter a valid password greater than 5 characters"); 
		return false; //if the condition retrns false, then a an alert pops up to ask the user to enter a valid password
	}
	
	storeCookie("email",email); //stores the new value "email" to the cookie that has been created
	storeCookie("isLoggedIn", true);  //stores the user as logged in
	storeCookie("lastLoggedIn", new Date().toUTCString());  // stored the dats and time, and converts it to Coordinated Universal Time
	storeCookie("password", password);  //stores the password to the cookie that has been created
}

function logout(){ // creates function logout
	storeCookie("email",""); //clears the email stored in the cookie
	storeCookie("isLoggedIn", ""); //clears the evalue of isLogged in, so that the user is no longer logged in
	storeCookie("lastLoggedIn",""); //clears the timestamp stored in the cookie
	storeCookie("password", "");//clears the password stored in the cookie
	};

// Banner
window.onload = initLinks; //initialises the links as soon as the window loads

var thisPic = 0; //sets the vairable thisPic to the default zero

function updateBanner (){ //creates the updateBanner function
	document.getElementById("myPicture").src = products[thisPic].img; //uses the getElementById object to select a picture by the id "myPicture"
	var element = document.getElementById("productInfo");//uses the getElementById object to select a picture by the id "productInfo"
	element.getElementsByTagName("div")[0].textContent=products[thisPic].description;//references a <div> tag in the source code and gets the element in the array with an id of "description", then renders the text in the browser related to that image
	element.getElementsByTagName("h1")[0].textContent=products[thisPic].name;//references a <h1> tag in the source code and gets the element in the array with an id of "description", then renders the text in the browser related to that image 
	element.getElementsByTagName("h2")[0].innerHTML='Price: &#8364;' + products[thisPic].price;//references a <h2> tag in the source code and gets the element in the array with an id of "description", then renders the HTML in the browser related to that image 
}

//some code adapted from JavaScript Essential Training at Lynda.com

function processPrevious() {//creates the function processPrevious to update the banner image when the previous button is clicked
	if (thisPic == 0) {//if the picture is at position zero then go to the end of the array and start from the beginning: Loops through the images
		thisPic = products.length;
	}
	thisPic--; //iterates through the images decrementing by one as it goes
	updateBanner();
	
	return false; //returns false by default 
}

function processNext() { //creates the function processNext to update the banner image when the next button is clicked
	thisPic++; //iterates through the images incrementing by one as it goes
	if (thisPic == products.length) {//if the picture gets to the end of the array, start again from position zero: Loops through the images
		thisPic = 0;
	}
	
	updateBanner();

	return false; //returns false by default 
}

function initLinks() {//create function initLinks to initialise the previous and next links 
	document.getElementById("prevLink").onclick = processPrevious; //gets an element with an id of "prevLink" and calls the function processPrevious when clicked
	document.getElementById("nextLink").onclick = processNext; //gets an element with an id of "nextLink" and calls the function processNext when clicked
}