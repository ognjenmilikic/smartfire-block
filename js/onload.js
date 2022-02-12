function onLoadEn(){
    if(window.scrollY >= 70) {
        document.getElementById('navbar').classList.add('scrolled');
    }
    var typed = new Typed('.hero-description', {
        strings: ["Next generation fire protection materials.", "Passive fire protection (PFP) products based on a unique formula protected by an internationally granted patent."
        , "Best-In-Class plasticizer based on Green technology.", "Extreme performance confirmed in field conditions.", "Eco-friendly and time-efficient passive fire protection (PFP) products."],
        typeSpeed: 40
    });
    $('.typed-cursor').remove();
    document.getElementById('year').textContent = new Date().getFullYear();
}

function onLoadSr(){
    if(window.scrollY >= 70) {
        document.getElementById('navbar').classList.add('scrolled');
    }
    var typed = new Typed('.hero-description', {
        strings: ["Nova generacija materijala za protivpožarnu zaštitu.", "Proizvodi bazirani na jedinstvenoj formuli zaštićenoj od strane međunarodno priznatog patenta.",
        "\"Best-in-class\" plastifikator baziran na Zelenoj tehnologiji.", "Odlične performanse potvrđene u terenskim uslovima.", "Ekološki i vremenski efikasni proizvodi za pasivnu protivpožarnu zaštitu."],
        typeSpeed: 40
    });
    $('.typed-cursor').remove();
    document.getElementById('year').textContent = new Date().getFullYear();
}