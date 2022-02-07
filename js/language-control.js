var language = {
    en: {
        nav_home_button: "Home",
        nav_about_button: "About us",
        nav_products_button: "Products",
        nav_contact_button: "Contact",
        hero_button: "Browse our catalog",
        about_us_title: "About us",
        about_us_text: "The company SmartFireBlock Ltd is a new company established by an enthusiastic team of young people with a background in polymer technology, finance, and management. We approach this endeavor with experience, competence, and determination. Our business philosophy is to become a strategic and well-organized company that will provide novel technology products and eco-technological solutions for the market. With the growing trend of increased worldwide consumption of Passive Fire Protection (PFP) products, our goal is to establish a modern company for the industrial production of PFP products. The increased number of construction sites, requirements for buildings refurbishment, and deep renovation with the stricter implementation of fire protection regulations, is opening the room for innovative products on the market. We aim to develop quality products and to maintain constant research efforts to comply with the goals for sustainable development, environmental protection, and a green economy.",
        products_title: "Products",
        contact_title: "Contact",
        address: "Batajnički drum 23, Belgrade, Serbia",
        send_message_title: "Send us a message",
        european_support_text: "Supported by European Institute of Innovation & Technology (EIT)",
        copyright: "2022, SmartFireBlock. All rights reserved.",
        name_label: "Name",
        email_label: "Email",
        message_label: "Your message",
        submit_button: "Send"
    }
};

function changeLanguage(lang){
    window.location.hash = "#" + lang;
    location.reload();
}

if(window.location.hash && window.location.hash === "#en") {
    nav_home_button.textContent = language.en.nav_home_button;
    nav_about_button.textContent = language.en.nav_about_button;
    nav_products_button.textContent = language.en.nav_products_button;
    nav_contact_button.textContent = language.en.nav_contact_button;
    hero_button.textContent = language.en.hero_button;
    about_us_title.textContent = language.en.about_us_title;
    about_us_text.textContent = language.en.about_us_text;
    products_title.textContent = language.en.products_title;
    contact_title.textContent = language.en.contact_title;
    address.textContent = language.en.address;
    send_message_title.textContent = language.en.send_message_title;
    european_support_text.textContent = language.en.european_support_text;
    copyright.textContent = language.en.copyright;
    name_label.textContent = language.en.name_label;
    email_label.textContent = language.en.email_label;
    message_label.textContent = language.en.message_label;
    submit_button.textContent = language.en.submit_button;
    document.getElementById("hero_button").setAttribute("href", "assets/katalozi/SFB katalog ENG.pdf");
}