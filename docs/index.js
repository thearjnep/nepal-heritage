// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $("header").addClass('bgc');
        }else{
            $("header").removeClass('bgc');
        }
    });
});