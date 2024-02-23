$(document).ready(function(){
    $("p").dblclick(function(){
    $(this).hide("slow");
    });
    });
    
//efecto al pasarl el mouse por viajes Chile
    $(document).ready(function(){
    $("h4").mouseover (function () {
        $(this).hide();
    });
    });

// alerta de inicio de página
   alert("Bienvenidos a Viajes Chile")

// alerta de boton de envio de formulario 
   document.getElementById('cambiar-color').onclick = function(){
    alert('Formulario fue Enviado!');
}