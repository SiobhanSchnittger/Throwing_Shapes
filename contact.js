// JavaScript Document

// Contact Form Validation


function validateForm(){ //creates function validateForm to ensure the user has entered a valid name
	var name=document.forms["contactForm"]["name"].value; //assigns the form object and its values to the variable name
	if (name=="undefined" || name.length<2){ //checks to see the name has been defined and is more than two characters long
		alert("please enter a valid name"); //otherwise it alerts the user to enter a valid name
		return false;
	}
	
	var email=document.forms["contactForm"]["email"].value; //creates function validateForm to ensure the user has entered a valid email
	var atpos=email.indexOf("@"); //checks to see if there is an 'at' symbol anywhere in the string
	var dotpos=email.lastIndexOf("."); //checks to see if there is a period anywhere in the string
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){ //checks to see if the period and the at symbol are in the correct position for a valid email address
	
		alert("please enter a valid e-mail address");
		return false; //if the period and at symbol conditions are false then the user has not entered a valid email and an alert pops up to inform them 
  	}
	
	var enquiry=document.forms["contactForm"]["enquiry"].value; //assigns the form object and its values to the variable enquiry
	if (enquiry=="undefined" || enquiry.length<1 || enquiry=="How can we help?"){
		alert("you haven't asked us anything!");
		return false;  //if the text box is submitted empty or the default text has not changed then an alert pops up to remind the user that they have not submitted an enquiry
	}

}

