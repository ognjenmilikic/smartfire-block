function sendMessage(lang){
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    console.log(name + " " + email + " " + message + " " + lang)

    if(name == '' || email == '' || message == ''){
        $('#error').fadeIn().css('display', 'inline-block');
    }
    else{
        $('#error').hide();
        $.ajax({
            type: "post",
            url: 'php/sendMessage.php',
            data: 'name=' + name + '&email=' + email + '&message=' + message + '&lang=' + lang,
            success: function(data){
                $('#messageModal').modal('hide');
                $('#messageResultModalContent').html(data);
                $('#messageResultModal').modal('show');
            }
        })
    }
}