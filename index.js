"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

document.getElementById('cancel_purchase').addEventListener('click', cancel_purchase);
document.getElementById('purchase_car').addEventListener('click', purchasse_car);
document.getElementById('Benz').addEventListener('click',Benz);
document.getElementById('Mini_Van').addEventListener('click',Mini_Van);
document.getElementById('Mustang').addEventListener('click',Mustang);
document.getElementById('Lambo').addEventListener('click',Lambo);
document.getElementById('Ram_1500').addEventListener('click',Ram_1500);
document.getElementById('Ford_F150').addEventListener('click',Ford_F150);
document.getElementById('Jaguar').addEventListener('click',Jaguar);
document.getElementById('Porsche').addEventListener('click',Porsche);
document.createElement('Mini_Coup').addEventListener('click',Mini_Coup);


var prices = {
    
	'Benz': 100000,
    
    'Mini_Van': 30000,
    
    'Mustang': 60000,
  	
  	'Mini_Coup': 45000,
    
    'Porsche': 75000,
   
   'Ram_1500': 50000,
    
   'Ford_F150': 45000,
    
    'Jaguar': 65000,
    
    'Lambo': 100000,
};


var running_subtotal;
var running_total;
var running_tax;

function cash_register(item) {
	var subtotal, total, tax;
	subtotal = prices[item];
	tax = subtotal * .15;
	total = subtotal + tax;
	running_subtotal = running_subtotal + subtotal;
	running_tax = running_tax + tax;
	running_total = running_total + total;	
}
var i = 0;
var update = 0;

function purchase_car() {
running_total = 0;
running_subtotal = 0;
running_tax = 0;
i = i + 1;
update();
}

function cancel_purchase() {
running_total = 0;
running_subtotal = 0;
running_tax = 0;
update();
}


function Benz() {
	cash_register('Benz');
}

function Mini_Van() {
	cash_register('Mini_Van');
}

function Mustang(){
	cash_register('Mustang');
}

function Lambo(){
	cash_register('Lambo');
}

function Ram_1500(){
	cash_register('Ram_1500');
}

function Ford_F150(){
	cash_register('Ford_F150');
}

function Jaguar(){
	cash_register('Jaguar');
}

function Porsche(){
	cash_register('Porsche');
}

function Mini_Coup(){
	cash_register('Mini_Coup');
}
