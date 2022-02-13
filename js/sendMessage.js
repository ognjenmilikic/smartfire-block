function sendMessage(lang){
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if(name == '' || email == '' || message == ''){
        $('#error').fadeIn().css('display', 'inline-block');
    }
    else{
        $.ajax({
            type: "post",
            url: 'php/sendMessage.php',
            data: 'name=' + name + '&email=' + email + '&message=' + message + '&lang=' + lang,
            success: function(data){
                $('#messageResultModalContent').html(data);
                $('#messageResultModal').modal('show');
            }
        })
    }
}