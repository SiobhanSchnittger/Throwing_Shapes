// JavaScript Document

var gallery = [];

gallery[0]={title:'Helen00',description:'Helen models our Throwing Shapes Logo tee',img:'images/helenModelIcon.jpg',imgZoom:'images/helenModel.jpg'};
gallery[1]={title:'Helen01',description:'Out on the town with the Straywave crew',img:'images/helenGroup01Icon.jpg',imgZoom:'images/helenGroup01.jpg'};
gallery[2]={title:'Helen02', description:'Throwing Shapes getting some love!',img:'images/helenGroup02Icon.jpg',imgZoom:'images/helenGroup02.jpg'};
gallery[3]={title:'Siobhan00',description:'Siobhan delighted with her new Throwing Shapes Head tee',img:'images/siobhanHeadIcon.jpg',imgZoom:'images/siobhanHead.jpg'};

function loadGallery(){
	
	var parent =document.getElementById("gallery");
	
	for (var key in gallery){
		var image = gallery[key];
		var div = document.createElement("div");
		div.setAttribute("class","galleryImg");
		var img = document.createElement("img");
		img.setAttribute("src", image.img);
		img.setAttribute("title", image.title);
		img.setAttribute("id", key);
		img.setAttribute("name", "gallery-img");
		div.appendChild(img);	
		parent.appendChild(div);	
	}
		var images=document.getElementsByName("gallery-img");
		for(var i=0; i<images.length; i++){
			var img = images[i];
			img.onclick=function(){
				var id = this.getAttribute("id");
				var image = gallery[id];
				var overlay = document.getElementById("overlay");
				overlay.style.width=window.outerWidth +"px";
				overlay.style.height=window.outerHeight +"px";
				overlay.style.visibility="visible";
				var img = document.getElementById("zoomGalleryImage");
				img.style.left=((window.outerWidth-600)/2)+"px";
				img.style.visibility="visible";
				var divs=img.getElementsByTagName("div");
				divs[0].innerHTML=image.description;
				img = img.getElementsByTagName("img")[0];
				img.src=image.imgZoom;
				
				};
			
			
		}
			var overlay = document.getElementById("overlay");
			overlay.onclick=function(){this.style.visibility="hidden";
			var img = document.getElementById("zoomGalleryImage");
			img.style.visibility="hidden";
			};
			
};
window.onload = loadGallery;