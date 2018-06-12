<?php
//Clase para conectarse a la base de datos y ejecutar consultas PDO
Class Base{
    private $host        = DB_HOST;
    private $usuario     = DB_USUARIO;
    private $password    = DB_PASSWORD;
    private $nombre_base = DB_NOMBRE;

    private $dbh;//data base handle
    private $stmt; //statement
    private $error;

    public function __construct(){
        //configurar conexion
        $dsn = 'mysql:host' . $this->host . ';dbname=' . $this->nombre_base;

        $opciones = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        );

        //Crear una instancia de PDO
        try{

            $this->dbh = new PDO($dsn, $this->usuario, $this->password, $opciones);
            $this->dbh->exec('set names utf8');

        }catch(PDOException $e){
            $this->error = $e->getMessage();
            echo $this->error;
        }
    }
}