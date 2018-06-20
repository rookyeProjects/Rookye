<?php

	//Cargamos librerias
	require_once 'config/Configurar.php';

	spl_autoload_register(function($nombreClase){
		require_once 'librerias/' . $nombreClase . '.php';
	});
	$controlador = new Controlador($_GET["controlador"], $_POST);

	