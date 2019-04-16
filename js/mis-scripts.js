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

    /*------------------------------------------------------
    Iniciando Swiper
    ------------------------------------------------------*/
    var swiper = new Swiper('#animacion', {
        // Parametros botones de navegacion
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          // Botones de paginacion
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        speed: 500,
        effect: 'fade',
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

    });

    // Iniciando venobox
    $('.venobox-video').venobox({
        autoplay: true,
        bgcolor: '#00ad75',
        border: '1px',
        //closeBackground: 'rgba(10, 33, 14, 0.61)',
        overlayColor: 'rgba(10, 33, 14, 0.61)',
        spinColor: '#00ad75',
        spinner: 'three-bounce'
    });

    // Iniciando counterUp
    $('.counter').counterUp();
});