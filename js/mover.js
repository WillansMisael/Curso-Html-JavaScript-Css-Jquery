$('#banner').css({"height":$(window).height() + "px"});
var arriba= $('#nave').position().top;
var left= $('#nave').position().left;
var incremento= 10;
$('body').keypress(function(event){
	switch(String.fromCharCode(event.which)){
		case 'w':
			arriba= arriba-incremento;
			break;
		case 's':
			arriba= arriba+incremento;
			break;
		case 'a':
			left= left-incremento;
			break;
		case 'd':
			left= left+incremento;
			break;
	}
	$('#nave').css("top",arriba+"px");
	$('#nave').css("left",left+"px");
});

var width_ventana = $(document).width();
var height_ventana = $(document).height();
/* movimiento del asteroide*/
function MoverAsteroide() {
	var posAsteIsq= $('.aste,.aste2').position().left;
	posAsteIsq--;
	$('.aste,.aste2').css({'left':posAsteIsq+'px'});
}
/*llamado de funciones*/
function juego() {
	Tiempo();
	setInterval(MoverAsteroide,0);
/* asteroides en distinta posicion*/
	setInterval(function() {
		var b=(Math.floor(Math.random()*height_ventana))/2;
		var c=(Math.floor(Math.random()*height_ventana));
		$('.aste,.aste2').css({'left':$(window).width()});
	  $('.aste').css({'top':b});
		$('.aste2').css({'top':c});
 }, 6000);
}
/* contador de tiempo*/
function Tiempo() {
var contador = 0;
var numero = $('#contador');
setInterval(function(){
                   contador++;
                   numero.text(contador);
                  }, 1000);
}

/* funcion para agregar nombre*/
function inicio() {
	var nombreJugador;
 $('#nave, .aste, .aste2, #time').hide();
 $('#jugarya').click(function(){
	 var nombreJugador=$('#nombre').val();
	 $('#nom').text('...Hola '+ nombreJugador);
	 $('#nave, .aste, .aste2, #time').show();
	 $('#nombre, #jugarya, h1,#cont-form').fadeOut(1000);
	 // choque();
	 Tiempo();
	 juego();
 });
}

// function choque() {
// var navePos= $('#nave').position();
// // navePos=parseInt(navePos);
// var astePos= $('.aste').position();
// // astePos=parseInt(astePos);
// 	POR  TERMINAR :(
// 	}
// }
