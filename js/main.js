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
})