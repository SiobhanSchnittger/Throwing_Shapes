// JavaScript Document
<!-- create element creates a new HTML type as specified in the parameter -->
<!-- .innerHTML sets the HTML value of an element -->
<!-- .appendChild appends an element as a child to a parent element -->
<!-- .setAttribute sets the specified attribute to the specified value -->
window.onload = loadProducts; 
<!-- creates an option element for a select element -->
function createOption (parent,value,text){ 
	var option = document.createElement("option"); 
	option.setAttribute("value",value);
	option.innerHTML=text;
	parent.appendChild(option);
	} 

<!-- this function iterates through the known products and generates product info, images and PayPal friendly cart forms-->	
function loadProducts(){
	var parent =document.getElementById("products");
	parent.innerHTML = '';
	for (var key in products){
		if (isNaN(key))
		 continue;
		var product = products[key];
		var div = document.createElement("div");
		div.setAttribute("class","product");
		var img = document.createElement("img");
		img.setAttribute("src", product.imgProd);
		img.setAttribute("name", "product-img");
		img.setAttribute("id", key);
		var p = document.createElement("p");
		var name = document.createElement("div");
		name.setAttribute("class", "name");
		name.innerHTML=product.name;
		var description = document.createElement("div");
		description.setAttribute("class","description");
		description.innerHTML=product.description;
		var divOldPrice = document.createElement("div");
		divOldPrice.setAttribute("class","oldPrice");
		divOldPrice.innerHTML="Old Price:";
		var s = document.createElement("s");
		s.innerHTML="&#8364;" + product.oldPrice;
		divOldPrice.appendChild(s);
		var discount = document.createElement("div");
		discount.setAttribute("class","discount");
		discount.innerHTML="You save: €" + (product.oldPrice - product.price) + "! ("+ product.discount + "%)"
		var form = document.createElement("form");
		form.setAttribute("target","paypal");
		form.setAttribute("action","https://www.paypal.com/ie/cgi-bin/webscr");
		form.setAttribute("method","post");
		
		
		var cmd = document.createElement("input");
		cmd.setAttribute("type","hidden");
		cmd.setAttribute("name","cmd");
		cmd.setAttribute("value","_cart");
		form.appendChild(cmd);
		
		var business = document.createElement("input");
		business.setAttribute("type","hidden");
		business.setAttribute("name","business");
		business.setAttribute("value","siobhan.schnittger@gmail.com");
		form.appendChild(business);
		
		var bn = document.createElement("input");
		bn.setAttribute("type","hidden");
		bn.setAttribute("name","bn");
		bn.setAttribute("value","PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest");
		form.appendChild(bn);
		
		var item_name = document.createElement("input");
		item_name.setAttribute("type","hidden");
		item_name.setAttribute("name","item_name");

		item_name.setAttribute("value", product.name);
		form.appendChild(item_name);
		
		var amount = document.createElement("input");
		amount.setAttribute("type","hidden");
		amount.setAttribute("name","amount");
		amount.setAttribute("value", product.price);
		form.appendChild(amount);
		
		var currency_code = document.createElement("input");
		currency_code.setAttribute("type","hidden");
		currency_code.setAttribute("name","currency_code");
		currency_code.setAttribute("value", "EUR");
		form.appendChild(currency_code);
		
		var button_subtype = document.createElement("input");
		button_subtype.setAttribute("type","hidden");
		button_subtype.setAttribute("name","button_subtype");
		button_subtype.setAttribute("value", "products");
		form.appendChild(currency_code);
		
		var tax_rate = document.createElement("input");
		tax_rate.setAttribute("type","hidden");
		tax_rate.setAttribute("name","tax_rate");
		tax_rate.setAttribute("value", "23.00");
		form.appendChild(tax_rate);
		
		var shipping = document.createElement("input");
		shipping.setAttribute("type","hidden");
		shipping.setAttribute("name","shipping");
		shipping.setAttribute("value", "2.20");
		form.appendChild(shipping);
		
		var lc = document.createElement("input");
		lc.setAttribute("type","hidden");
		lc.setAttribute("name","lc");
		lc.setAttribute("value","US");
		form.appendChild(lc);
		
		var add = document.createElement("input");
		add.setAttribute("type","hidden");
		add.setAttribute("name","add");
		add.setAttribute("value","1");
		form.appendChild(add);
		
		var addCart = document.createElement("input");
		addCart.setAttribute("id","addCart");
		addCart.setAttribute("type","image");
		addCart.setAttribute("name","submit");
		addCart.setAttribute("border","0");
		addCart.setAttribute("alt","PayPal - The safer, easier way to pay online!");
		addCart.setAttribute("src","https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif");
		
		
		var selectSize = document.createElement("div");
		selectSize.setAttribute("class","selectSize");
		selectSize.innerHTML="Please Select your Size:"
		var size = document.createElement("select");
		size.setAttribute("name","on0");
		createOption(size,"Small","Small");
		createOption(size,"Medium","Medium");
		createOption(size,"Large","Large");
		createOption(size,"XL","Xtra Large");
		createOption(size,"XXL","Xtra-Xtra Large");
		
		
		form.appendChild(selectSize);
		form.appendChild(size);
		form.appendChild(addCart);
		p.appendChild(name);
		p.appendChild(description);
		p.innerHTML=p.innerHTML + "Price: &#8364;" + product.price;
		p.appendChild(divOldPrice);
		p.appendChild(discount);
		p.appendChild(form);
		div.appendChild(img);
		div.appendChild(p);	
		parent.appendChild(div);	
	}
	
	<!-- this iterates through the product images and attaches click events to show or hide a larger version as appropriate -->
	var images=document.getElementsByName("product-img");
	for(var i=0;i<images.length;i++){
		var img = images[i];
		img.onclick=function(){
			var id = this.getAttribute("id");
			var product = products[id];
			var overlay = document.getElementById("overlay");
			overlay.style.width=window.outerWidth +"px";
			overlay.style.height=window.outerHeight +"px";
			overlay.style.visibility="visible";
			var img = document.getElementById("zoomImage");
			img.style.left=((window.outerWidth-303)/2)+"px";
			img.style.visibility="visible";
			img = img.getElementsByTagName("img")[0];
			img.src=product.imgZoom;
		};
	}
	<!-- click event to hide image popup and overlay-->
	var overlay = document.getElementById("overlay");
	overlay.onclick=function(){
		this.style.visibility="hidden";
		var img = document.getElementById("zoomImage");
		img.style.visibility="hidden";
	};
	<!-- renders the PayPal MiniCart -->		
	PAYPAL.apps.MiniCart.render({parent: document.body, paypalURL: 'https://www.paypal.com/ie/cgi-bin/webscr'});
			
};