function onLoadEn(){
    if(window.scrollY >= 70) {
        document.getElementById('navbar').classList.add('scrolled');
    }
    var typed = new Typed('.hero-description', {
        strings: ["Next generation fire protection materials.", "Product based on unique manufacturing process aimed to reduce carbon footprint."
        , "Best-In-Class plasticizer based on Green technology.", "Extreme performance confirmed in field conditions.", "Production process in line with circular economy."],
        typeSpeed: 30
    });
    $('.typed-cursor').remove();
    document.getElementById('year').textContent = new Date().getFullYear();
}

function onLoadSr(){
    if(window.scrollY >= 70) {
        document.getElementById('navbar').classList.add('scrolled');
    }
    var typed = new Typed('.hero-description', {
        strings: ["Nova generacija materijala za protivpožarnu zaštitu.", "Proizvodi bazirani na jedinstvenom procesu proizvodnje koji smanjuju emisiju CO₂.",
        "\"Best-in-class\" plastifikator baziran na Zelenoj tehnologiji.", "Odlične performanse potvrđene u terenskim uslovima.", "Proizvodni proces orijentisan na cirkularnu ekonomiju."],
        typeSpeed: 30
    });
    $('.typed-cursor').remove();
    document.getElementById('year').textContent = new Date().getFullYear();
}