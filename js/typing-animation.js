if(window.location.hash && window.location.hash === "#en") {
    var typed = new Typed('.hero-description', {
        strings: ["New generation polymer technology."],
        typeSpeed: 60
    });
    $('.typed-cursor').remove();
}
else {
    var typed = new Typed('.hero-description', {
        strings: ["Polimer tehnologija nove generacije."],
        typeSpeed: 60
    });
    $('.typed-cursor').remove();
}