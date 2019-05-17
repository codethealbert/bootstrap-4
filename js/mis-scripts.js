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

    // Iniciando picker.date.js
    $('.datepicker').pickadate({
        monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
        weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
        weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
        today: 'Hoy',
        clear: 'Borrar',
        close: 'Cerrar',
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        firstDay: 1,
        format: 'dddd d !de mmmm !de yyyy',
        formatSubmit: 'dd/mm/yyyy',
        selectYears: true,
        selectMonths: true,
        min: true,
        max: 30,
        onStart: function(){
            var date = new Date();
            this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
        }
    });

    //Iniciando picker.time.js
    $('.timepicker').pickatime({
        clear: 'Limpiar',
        format: 'hh:i a',
        interval: 60,
        min: [8,0],
        max: [18,0]
    });
});