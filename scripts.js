//OOP - 11.4

function Phone(brand, price, color, screen) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.screen = screen;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ", and screen have " + this.screen + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "6 inches");
var GalaxyS6 = new Phone("Samsung", 2000, "black", "5,5 inches");
var OnePlus = new Phone("One", 1550, "Gold", "5 inches");

//iPhone6S.printInfo();
//GalaxyS6.printInfo();
//OnePlus.printInfo();

//console.log(iPhone6S, GalaxyS6, OnePlus)