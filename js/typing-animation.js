if(window.location.hash && window.location.hash === "#en") {
    var typed = new Typed('.hero-description', {
        strings: ["Next generation fire protection materials.", "Passive fire protection (PFP) products based on a unique formula protected by an internationally granted patent."
        , "Best-In-Class plasticizer based on Green technology.", "Extreme performance confirmed in field conditions.", "Eco-friendly and time-efficient passive fire protection (PFP) products."],
        typeSpeed: 40
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