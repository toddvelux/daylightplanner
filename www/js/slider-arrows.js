$(document).ready(function() {
    
    $('.iosSlider').iosSlider({
        snapToChildren: true,
        desktopClickDrag: true
    });
    $("i.right-side").click(function() {
        $('.iosSlider').iosSlider('nextSlide');
    });
    $("i.left-side").click(function() {
        $('.iosSlider').iosSlider('prevSlide');
    });
    $('.iosSlider').bind('tapone', function() {
        $('i').fadeToggle();
    });   
});


