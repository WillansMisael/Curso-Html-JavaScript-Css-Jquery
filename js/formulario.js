var usuarios=[
	{
		nombre:'Said',
		password:'123'
	},
	{
		nombre:'Carlos',
		password:'salinas'
	},
	{
		nombre:'Benito',
		password:'pepito'
	},
	{
		nombre:'Ruben',
		password:'9876'
	},
	{
		nombre:'Lucas',
		password:'qwer'
	},
	{
		nombre:'Iron_Man',
		password:'zxcv'
	},
	{
		nombre:'Spiderman',
		password:'advengers'
	}
];


$(document).ready(function(){

	$('#nombre, #password, #confirmacion')
	.focusin(function(){
		$(this).addClass("marcado");
	});
	$('#nombre, #password, #confirmacion')
	.focusout(function(){
		$(this).removeClass("marcado");
	});
	/*Verificamos el tamaño de
	 la contraseña*/
	$('#password').focusout(function(){
		if($(this).val().length<3){
			$('#id2')
			.html("Contraseña muy corta");
			$('#id2').addClass("alerta");
			$('#id2').removeClass("exito");
		}
		else if(($(this).val().length>=3)
			&&($(this).val().length<=7)){
			$('#id2')
			.html("Contraseña válida");
			$('#id2').addClass("exito");
			$('#id2').removeClass("alerta");
		}
		else if($(this).val().length>7){
			$('#id2')
			.html("Contraseña muy larga");
			$('#id2').addClass("alerta");
			$('#id2').removeClass("exito");
		}
	});

	$('#confirmacion').focusout(function(){
		if($(this).val().length===0){
			$('#id3').html(" ");
		}
		else if(($(this).val().length>=3)
			&&($(this).val().length<=7)){
			if($('#confirmacion').val()
				=== $('#password').val()){
				$('#id3')
				.html("Contraseñas iguales :)");
			}
			else{
				$('#id3').html("NO coinciden");
			}
		}
		else{
			$('#id3').html("NO coinciden");
		}
	});

	$('#enviar').click(function(){
		if($('#nombre').val().length>0){
			if(($('#password').val().length>=3)
			&&($('#password').val().length<=7)){
				if($('#password').val()
					===$('#confirmacion').val()){
					var nuevo= {
						nombre: $('#nombre').val(),
						password: $('#password').val()
					};
					usuarios.push(nuevo);
					/*usuarios.unshift(nuevo);*/
					/*usuarios.pop();*/
					/*usuarios.shift();*/
					alert("Usuario Registrado");
					$('#nombre, #password, #confirmacion').val("");
				}
				else{
					alert('Las contraseñas no coinciden');
				}
			}
			else{
				alert('Contraseña de tamaño incorrecto');
			}
		}
		else{
			alert('Tiene que poner nombre');
		}
			$('#usuarios').click();
	});
	$('#usuarios').click(function(){
		var padre= $('#lista');
		padre.html(" ");
		for(var i=0; i<usuarios.length; i++){
			var nodo= $('<h3>Usuario:'+usuarios[i].nombre+'</h3><hr>');
			nodo.appendTo(padre);
		}
	});
	// Funcion para eliminar
	$('#eliminar').click(function() {
		var borrado=false;
		if($('#eliminado').val().length==0) {
			alert("Debe colocar el nombre del usuario que desea eliminar");
		}else{
			for (var i = 0; i < usuarios.length; i++) {
				if($('#eliminado').val()==usuarios[i].nombre){
					var c = confirm('Estas seguro?');
					if (c===true) {
						alert("Se ha eliminado el usuario: "+usuarios[i].nombre);
						usuarios.splice(i,1);//splice borra un dato o varios datos pero se pone en que posicion esta;
					}else{
						alert("No se elimino nada");
					}
					borrado=true;
				}
			}
			if (borrado==false) {
				alert("No existe un usuario con ese nombre");
			}
		}
		$('#eliminado').val('');
		$('#usuarios').click();
		$('#eliminado').focus();
	});

  $('#usuarios').click();
	$('#usuarios').hide();
});
