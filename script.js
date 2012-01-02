// JavaScript Document

//clock feature sourced from W3Schools
var header = document.body.getElementsByTagName("div")[0];
header.innerHTML = "<div id='clock'></div>" + header.innerHTML;
var int=self.setInterval("displayTime()",1000);

function displayTime(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("clock").innerHTML=t;
}
  
//function to rotate logo every 15 seconds
 
//assigns an array to the logo variable
var logos = [];

logos[0]="images/frame01.png";//assigns values to position zero in the array
logos[1]="images/frame02.png";//assigns values to position one in the array
logos[2]="images/frame03.png";//assigns values to position two in the array
logos[3]="images/frame04.png";//assigns values to position three in the array


var logoIdx = 0;

self.setInterval("rotateLogo()",500);
function rotateLogo(){
	if (logoIdx>=logos.length)
		logoIdx=0;
	document.getElementById("logo").src=logos[logoIdx];
	logoIdx++;
	
}
