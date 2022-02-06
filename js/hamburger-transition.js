$("#hamburger-container").click(function(){
    if($('#hamburger-container').hasClass('collapsed')) {
        $('#menu-icon').fadeOut(200, function(){
            $('#menu-icon').removeClass('fa-times').addClass('fa-bars').fadeIn(200);
        })
    }
    else{
        $('#menu-icon').fadeOut(200, function(){
            $('#menu-icon').removeClass('fa-bars').addClass('fa-times').fadeIn(200);
        })
    }
})