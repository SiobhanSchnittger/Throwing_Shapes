// JavaScript Document

// Contact Form Validation
function validateForm(){
	var name=document.forms["contactForm"]["name"].value;
	if (name=="undefined" || name.length<1){
		alert("please enter a valid name");
		return false;
	}
	
	var email=document.forms["contactForm"]["email"].value;
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
	
		alert("please enter a valid e-mail address");
		return false;
  	}
	
	var enquiry=document.forms["contactForm"]["enquiry"].value;
	if (enquiry=="undefined" || enquiry.length<1 || enquiry=="How can we help?"){
		alert("you haven't asked us anything!");
		return false;
	}

}

