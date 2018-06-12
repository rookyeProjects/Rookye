function validarEmail(valor){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)){
        return (true)
    } else {
        return (false);
    }
}

function enviarCorreo(){

    var form = document.form_contacto;
    if(form.nombre.value==0)
    {   
        document.getElementById("valido").style.display = "block";
        document.getElementById("valido").innerHTML=
            "El nombre está vacío.";
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }else{
        document.getElementById("valido").innerHTML="";
    }
    if (form.apellidos.value==0)
    {
        document.getElementById("valido").style.display = "block";
        document.getElementById("valido").innerHTML="Debe introducir los apellidos.";
        form.apellidos.value="";
        form.apellidos.focus();
        return false;
    }else{
        document.getElementById("valido").innerHTML="";
    }
    if(form.email.value==0)
    {
        document.getElementById("valido").style.display = "block";
        document.getElementById("valido").innerHTML="El email está vacío.";
        form.email.value="";
        form.email.focus();
        return false;
    }else{
        document.getElementById("valido").innerHTML="";
    }
    if(validarEmail(form.email.value)==false)
    {
        document.getElementById("valido").style.display = "block";
        document.getElementById("valido").innerHTML="El email no es válido.";
        form.email.value="";
        form.email.focus();
        return false;
    }else{
        document.getElementById("valido").innerHTML="";
    }
    if(form.asunto.value==0)
    {
        document.getElementById("valido").style.display = "block";
        document.getElementById("valido").innerHTML="Debe escribir un asunto.";
        form.asunto.value="";
        form.asunto.focus();
        return false;
    }else{
        document.getElementById("valido").innerHTML="";
    }
    if(form.mensaje.value==0)
    {
        document.getElementById("valido").style.display = "block";
        document.getElementById("valido").innerHTML="Escriba la gran idea que tiene en mente.";
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }else{
        document.getElementById("valido").innerHTML="";
    }
    form.submit();
    
}