$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $(function () {
        $("#accordion").accordion({
            header: "> h3",
            activate: function (event, ui) {
                    $('.select-icon img').attr('src', 'images/nextUp.png');
                if (ui.newHeader.length) {
                    ui.newHeader.find('.select-icon img').attr('src', 'images/nextDown.png');
                }
            }
        });
        // let header1 = $('.ui-accordion .ui-accordion-header');
        // header1.css({
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'space-between',
        //     paddingLeft: '23px',
        //     height: '68px',
        //     background: 'linear-gradient(360deg, #076BFF 0%, #007BFF 100%)',
        //     fontFamily: 'Arial, sans-serif',
        //     fontSize: '16px',
        //     fontWeight: '700',
        //     textAlign: 'left',
        //     color: 'white',
        //     boxSizing: 'border-box',
        //     borderRadius: '10px',
        //     paddingRight: '24px',
        //
        // })
        //
        // $('.ui-accordion .ui-accordion-content').css({
        //     padding: '16px 23px 8px 23px',
        //     border: 'none'
        // });
        $('.select-icon').css({
            marginLeft: '15px'
        });

        $('.ui-accordion-header-icon').css({
            display: 'none'
        });
    });

    let slider = $('.slider')

    $('.product-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 500,
            easing: 'ease-in-out',

            }
    });


    slider.slick({
        appendArrows: slider,
        prevArrow: '<button type="button" class="slick-prev">' +
            '<img src="images/arrowLeft.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next">' +
            '<img src="images/arrowNext.png" alt="arrow"></button>',
        infinite: true,
        fade: true,

      });

    const indexPost = $('#inputIndex');
    const orderForm = $('.order-form');

    indexPost.on('keypress', function (e) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
        }
    });

    orderForm.on('submit', formListener)

    function formListener(e) {
        e.preventDefault();

        if (!$('#inputName').val()) {
            alert('Пожалуйста, введите имя.');
            return;
        }
        if (!$('#inputLastname').val()) {
            alert('Пожалуйста, введите фамилию.');
            return;
        }
        if (!$('#inputPhone').val()) {
            alert('Пожалуйста, введите телефон.');
            return;
        }
        if (!$('#inputCountry').val()) {
            alert('Пожалуйста, введите страну.');
            return;
        }
        if (!indexPost.val()) {
            alert('Пожалуйста, введите индекс.');
            return;
        }
        if (indexPost.val().length !== 6) {
            alert('Индекс должен содержать 6 цифр.');
            return;
        }
        if (!$('#inputAddress').val()) {
            alert('Пожалуйста, введите адрес.');
            return;
        }
        orderForm.css({
            display: 'none',
        })
        $('.order-title').css({
            display: 'none',
        })
        $('#order-thank-you').css({
            display: 'flex'
        })
    }

});