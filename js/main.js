$(document).ready( () => {
    var flag = 1
    $('.menu-icon').click( () => {
        // $('.barra-navegacion-mobile').toggle()

        if ( flag == 1 ) {
            $('.barra-navegacion-mobile').animate({
                left: '0'
            })
            $('.btn-menu i').removeClass('fas-bars')
            $('.btn-menu i').addClass('fas-times')

            document.getElementsByTagName("html")[0].style.overflow = "hidden";
            flag = 0
        } else {
            $('.barra-navegacion-mobile').animate({
                left: '-100%'
            })
            document.getElementsByTagName("html")[0].style.overflow = "auto";
            flag = 1
        }
    })
    
    let comActual = 1
    
    $('#com-sig').click( () => {

        if (comActual == 1) {
            $('#com-1').css("display", "none")
            $('#com-2').css("display", "inline")
            $('#com-3').css("display", "none")
            comActual = 2
        }
        else if (comActual == 2) {
            $('#com-1').css("display", "none")
            $('#com-2').css("display", "none")
            $('#com-3').css("display", "inline")
            comActual = 3
        }
        else if (comActual == 3) {
            $('#com-1').css("display", "inline")
            $('#com-2').css("display", "none")
            $('#com-3').css("display", "none")
            comActual = 1
        }
    })

    $('#com-ant').click( () => {

        if (comActual == 1) {
            $('#com-1').css("display", "none")
            $('#com-2').css("display", "none")
            $('#com-3').css("display", "inline")
            comActual = 3
        }
        else if (comActual == 2) {
            $('#com-1').css("display", "inline")
            $('#com-2').css("display", "none")
            $('#com-3').css("display", "none")
            comActual = 1
        }
        else if (comActual == 3) {
            $('#com-1').css("display", "none")
            $('#com-2').css("display", "inline")
            $('#com-3').css("display", "none")
            comActual = 2
        }
    })

})