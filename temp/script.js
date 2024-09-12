$(document).ready(function() {

$( function() {
    $( "#accordion" ).accordion({
        header: "> h3",
        activate: function(event, ui) {
            // Сброс иконок для всех заголовков
            $('.select-icon img').attr('src', 'images/nextUp.png'); // Устанавливаем стрелки вверх для всех заголовков

            // Если новый заголовок активен, устанавливаем стрелку вниз
            if (ui.newHeader.length) {
                ui.newHeader.find('.select-icon img').attr('src', 'images/nextDown.png'); // Устанавливаем стрелку вниз для активного заголовка
            }
        }
    });
    let header1 = $('.ui-accordion .ui-accordion-header');
     header1.css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '23px', 
        height: '68px',
        background: 'linear-gradient(360deg, #076BFF 0%, #007BFF 100%)', 
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px', 
        fontWeight: '700', 
        textAlign: 'right',
        color: 'white', 
        boxSizing: 'border-box', 
        borderRadius: '10px',
        paddingRight: '24px'
     })
 
     $('.ui-accordion .ui-accordion-content').css({
        padding: '16px 23px 8px 23px',
        border: 'none'
     });
    

     $('.ui-accordion-header-icon').css({
        display: 'none'
     });
  });


    $('.slider').slick({
        appendArrows: $('.slider-item'),
        prevArrow: '<button type="button" class="slick-prev">Назад</button>',
        nextArrow: '<button type="button" class="slick-next">' +
            '<img src="images/arrowNext.png" alt="arrow"></button>',
        // infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',


    });





});