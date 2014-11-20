"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.



var running_subtotal, running_total, running_tax;

function cash_register(item) {
	var subtotal, total, tax;
	subtotal = prices[item];
	tax = subtotal * .15;
	total = subtotal + tax;
	running_subtoal = running_subtotal + subtotal
	running_tax = running_tax + tax
	running_total = running_total + total 	
}


document.getElementById('Benz').addEventListener('click',Benz);
document.getElementById('Mini_Van').addEventListener('click',Mini_Van);
document.getElementById('Mustang').addEventListener('click',Mustang);
document.getElementById('Lambo').addEventListener('click',Lambo);
document.getElementById('Ram_1500').addEventListener('click',Ram_1500);
document.getElementById('Ford_F150').addEventListener('click',Ford_F150);
document.getElementById('Jaguar').addEventListener('click',Jaguar);
document.getElementById('Porsche').addEventListener('click',Porsche);
document.createElement('Mini_Coup').addEventListener('click',Mini_Coup);

function Benz() {
	cash_register('Benz');
}

function MiniVan() {
	cash_register('Mini_Van');
}

function mustang(){
	cash_register('Mustang');
}

function lambo(){
	cash_register('Lambo');
}

function ram1500(){
	cash_register('Ram_1500');
}

function fordf150(){
	cash_register('Ford_F150');
}

function jaguar(){
	cash_register('Jaguar');
}

function porsche(){
	cash_register('Porsche');
}

function minicoup(){
	cash_register('Mini_Coup');
}
