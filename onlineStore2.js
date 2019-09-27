// Create a variable for stored items
var storedItems = JSON.parse(sessionStorage.getItem("cart") || "[]")
// Create an object with corresponding names & prices to their ID's
var itemInfo = {
	phonePri:{
		name: "Rainbow Phone Case",
		price: 12.00
	},
	prideT:{
		name: "Pride T-Shirt",
		price: 15.00
	},
	pantPri:{
		name: "Rainbow Pants",
		price: 55.00
	},
	prideSneak:{
		name: "Rainbow Sneakers",
		price: 70.00
	},
	prideCap:{
		name: "Pride Peak-Cap",
		price: 30.00
	},
	prideDress:{
		name: "Rainbow Sequence Dress",
		price: 98.00
	},
	
		
	}
// Create a coupon code that gives a discount
let coupon={
	"pride4All": -15
}
// When coupon code is entered alert will show you how much you saved on VAT
function couponUpdate(input) {
	var code = coupon[input.value]
	if(code) {
		alert("Your saved 2.85% on VAT!")
	}
}

// Creates a variable to keep count starting at "0"
var price = 0
// Loops over items & prices, then writes them to the page
for(let item of storedItems) {
	item = itemInfo[item]
	price += item.price
	const nitem = $("<div/>").html("*"+item.name + "-"+ "$" + item.price).appendTo($("body"))
}
// When page is loaded, this alert gives you the coupon code 
$(document).ready(function(){
	alert("You coupon code is: pride4All")
});
function generate() {
    $("refNum").text(Math.floor(Math.random() * 6) + 1);
  }
  setInterval(generate, 1000)

// When button is clicked the alert shows your price while checking out with a reference number
function checkOut(){
	// Imports random numbers for refence number
	var refNum = Math.random()
	// If Collection is chosen then user gets a discount
	if($("[name='deliveryType1']:checked").attr("id") == "deliverType1"){
		price -= 7
	}else{
	// If Delivery is chosen then user pays more
	if($("[name='deliverType2']:checked").attr("id") == "deliverType"){
			price += 12
		}
	}
	// When button is clicked the alert shows your price while checking out with a reference number
	alert("Your total is $"+ price+"\n"+"Enjoy your day!"+"\n"+"(Your reference number is"+" "+ refNum+")" )
}
  
   

	
