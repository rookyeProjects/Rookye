<?php

    class Controlador{
        
        function __construct($controlador, $_post){
            $datos = explode("_", $controlador);
            $controlador = $datos[0];
            $metodo      = $datos[1];

           switch ($this->controlador) {
                case 'Contacto':
                    require_once("controladores/".$controlador.".php");
                    $contacto = new Contacto();
                    $contacto->$metodo($_post);
                    break;
                
                default:
                    # code...
                    break;
            }
        }
    }