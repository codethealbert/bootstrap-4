$(function(){

    //FUNCIONES PARA EL MANU PRINCIPAL

    // Inserta y quita la clase .icono-cerrar del boton menu
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });
    
    // Al gacer click en un enlace del menu principal
    $('#menu-navegacion .navbar-nav a').click(function(){
        // Quita la clase
        $('.boton-menu').removeClass('icono-cerrar');

        // contraemos el menu
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });
});