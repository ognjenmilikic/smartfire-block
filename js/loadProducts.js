var productList;
function loadProducts(lang) {
    var productListDiv = document.getElementById('product-list');
    if(lang === 'sr'){
        productList = [
            {
                "title": "SMART FIRE COLLAR",
                "about": "Koristi se uz: plastične cevi, A/C bakarne cevi, kablovski sistemi",
                "description": "SMART FIRE COLLAR je obujmica napravljena od kućišta od nerđajućeg čelika sa pokretnim umetkom od materijala koji ekspandira na temperaturi iznad 150 °C",
                "application": "SMART FIRE COLLAR je obujmica koja se koristi za zaštitu od prodiranja vatre kroz penetracije plastičnih cevi (PVC, PVC-U, San+PVC, PE, HDPE, MDPE, PP, PP-RCT i druge) kao i oko kombinacije plastičnih i bakarnih cevi (HVAC), odnosno elektrokablova, mrežnih kablova koji prodiru kroz lake pregrade kao i čvrste, konstruktivne zidove i podove. Primena može biti horizontalna i vertikalna. Proizvod je tipa ’’Type X Durability’’, što znači da performanse proizvoda ne zavise od promene vremenskih uslova. Postoji mogućnost naknadne ugradnje u bilo kom trenutku prilikom rekonstrukcije objekta.",
                "pictureSource1": "./assets/images/products/smartfire-collar1.webp",
                "pictureSource2": "./assets/images/products/smartfire-collar2.webp",
                "applicableTo": "SMART FIRE COLLAR je pogodan za ugradnju na zidove (blok, cigla, gips), kao i na međuspratne konstrukcije."
            },
            {
                "title": "SMART FIRE ACRYLIC SEALANT",
                "about": "Koristi se uz: plastične cevi, metalne cevi, kablovski sistemi, protivpožarna vrata",
                "description": "SMART FIRE AS je zaptivna masa na bazi akrilatnog polimera koja je predvidjena za ispunjavanje otvora izmedju prodora i instalacija koje se smatraju nepomerljivim ili niskog stepena pomeranja u cilju sprečavanja prodora vatre i dima.",
                "application": "- Zaptivanje otvora na zidovima i podovima. - Zaptivanje otvora između protivpožarnih vrata i zida. - Zaptivanje otvora oko protivpožarnih rešetaka ili obujmica. - Zaptivanje otvora kroz koje prodiru plastične i metalne cevi, odnosno kablovi",
                "pictureSource1": "./assets/images/products/smartfire-acrylic-sealant1.webp",
                "pictureSource2": "./assets/images/products/smartfire-acrylic-sealant2.webp",
                "applicableTo": "Primenjivo na sve vrste spojeva koji iziskuju određenu klasifikaciju vatrootpornosti, odnosno prodora dima. Nakon primene može biti ofarbano. U slučaju većih otvora međuprostor popuniti kamenom vunom ili koristiti SMART FIRE STRIP. Proizvod poseduje značajna adheziona svojstva."
            },
            {
                "title": "SMART FIRE MASTIC",
                "about": "Koristi se uz: gorive i negorive cevi, kablovski sistemi",
                "description": "SMART FIRE MASTIC je zaptivna masa na bazi akrilatnog polimera koja je predvidjena za ispunjavanje otvora između prodora i instalacija sa nešto većim stepenom pomeranja u toku životnog veka u cilju sprečavanja prodora vatre i dima. SMART FIRE MASTIC stvara pritisak prilikom ekspandiranja i tako omogućava zaptivanje gorivih cevi bez upotrebe dodatnih sistema zaštite (do promera cevi od 50mm).",
                "application": "SMART FIRE MASTIC je zaptivka koja zaustavlja prodiranje vatre u zidovima i podovima. Dizajnirana je da se koristi kao zaptivka oko snopova kablova, kablova koji su stacionirani u fleksibilnim cevima, gorivih i negorivih cevi, u svrhu izolacije i sprečavanja prodora vatre i dima.",
                "pictureSource1": "./assets/images/products/smartfire-mastic1.webp",
                "pictureSource2": "./assets/images/products/smartfire-mastic2.webp",
                "applicableTo": "SMART FIRE MASTIC je pogodan za ugradnju na zidove (blok, cigla, gips), kao i na međuspratne konstrukcije."
            },
            {
                "title": "SMART FIRE PUTTY",
                "about": "Koristi se uz: plastične cevi i metalne cevi",
                "description": "SMART FIRE PUTTY je zaptivna masa/git koji ekspandira na temperaturama iznad 150°C. SMART FIRE PUTTY se koristi za zaštitu od prodiranja vatre oko plastičnih cevi, metalnih cevi (goriva i negoriva izolacija) u kombinaciji sa obujmicama, rešetkama, ciglama, čepovima gde kružni ili bilo koji drugi otvor treba popuniti. Radi se o inovativnoj tehnologiji.",
                "application": "SMART FIRE PUTTY je zaptivna masa koja zaustavlja prodiranje vatre u zidovima i podovima.  Dizajnirana je da se koristi kao zaptivka uz snopove kablova, gorivih i negorivih cevi, u svrhu  izolacije i sprečavanja prodora vatre i dima.",
                "pictureSource1": "./assets/images/products/smartfire-putty1.webp",
                "pictureSource2": "./assets/images/products/smartfire-putty2.webp",
                "applicableTo": "Ova zaptivka je primenjiva na zidane konstrukcije (blok, cigla), kao i na međuspratne konstrukcije u zidovima i podovima, kao i u brzim panelima uz moguću kombinaciju sa drugim proizvodima za zaštitu od prodora vatre ili usijanih gasova (obujmica, fleksibilna traka)."
            },
            {
                "title": "SMART FIRE GRILL SQUARE",
                "about": "Koristi se u: ventilacionim otvorima pravougaonog oblika u zidovima, na podovima i na vratima",
                "description": "SMART FIRE GRILL (SQUARE) je rešetka napravljena od metalnog profila sa umetcima od polimera dugotrajnih i visokih performansi. Ulošci od materijala na vatrootpornoj bazi u potpunosti popunjavaju preostale otvore kada je rešetka izložena temperaturi iznad 150°C. I na taj način se sprečava prodiranje vatre i dima. Radi se o inovativnoj tehnologiji.",
                "application": "SMART FIRE GRILL (SQUARE) se ugradjuje u ventilacione otvore pravougaonog oblika u zidovima, u podovima i na vratima",
                "pictureSource1": "./assets/images/products/smartfire-grill-square1.webp",
                "pictureSource2": "./assets/images/products/smartfire-grill-square2.webp",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE GRILL ROUND",
                "about": "Koristi se u: ventilacionim otvorima okruglog oblika u zidovima, na podovima i na vratima",
                "description": "SMART FIRE GRILL (ROUND) je rešetka napravljena od metalnog profila sa umetcima od polimera dugotrajnih i visokih performansi. Ulošci od materijala na vatrootpornoj bazi u potpunosti popunjavaju preostale otvore kada je rešetka izložena temperaturi iznad 150°C. I na taj način se sprečava prodiranje vatre i dima. Radi se o inovativnoj tehnologiji.",
                "application": "SMART FIRE GRILL (ROUND) se ugradjuje u ventilacione otvore okruglog oblika u zidovima, u podovima i na vratima.",
                "pictureSource1": "./assets/images/products/smartfire-grill-round1.webp",
                "pictureSource2": "./assets/images/products/smartfire-grill-round2.webp",
                "applicableTo": "Primenjivo kao deo HVAC sistema unutar okruglih kanala i u zidovima kao samostalne ventilacione rešetke."
            },
            {
                "title": "SMART FIRE WRAP/STRIP",
                "about": "Koristi se uz: plastične cevi, metalne cevi, kablovski sistemi",
                "description": "SMART FIRE WRAP / STRIP je fleksibilna traka pravljena od polimera visokih performansi koja ekspandira pod uticajem vatre ili usijanih gasova, odnosno temperature iznad 150°C i popunjava celokupan prostor nakon sagorevanja instalacija. Radi se o inovativnoj tehnologiji.",
                "application": "SMART FIRE WRAP / STRIP* je fleksibilna traka koja se koristi kao zaptivka za zaštitu od prodiranja vatre obmotavanjem oko pojedinačnih prodora, odnosno sledećih kombinacija plastičnih cevi** (PVC, PVC-U, San+PVC, PE, HDPE, MDPE, PVC-U, PP, PP-RCT i druge) i bakarnih cevi (HVAC) odnosno napojnih i komunikacionih kablova koji prodiru kroz lake pregrade kao i čvrste, konstruktivne zidove i podove. Primena može biti horizontalna i vertikalna. Proizvod je tipa ’’Type X Durability’’, što znači da performanse proizvoda ne zavise od promena vremenskih uslova. *Koristi se jedna ili više fleksibilnih traka u zavisnosti od prečnika cevi. **SMART FIRE STRIP se ne koristi u kombinovanim prodorima, već pojedinačno.",
                "pictureSource1": "./assets/images/products/smartfire-wrap1.webp",
                "pictureSource2": "./assets/images/products/smartfire-wrap2.webp",
                "applicableTo": "SMART FIRE WRAP je fleksibilna traka koja se obmotava oko različitih kombinacija prodora (bakarnih cevi, plastičnih cevi, kablova) koji prodiru kroz otvore na zidovima. SMART FIRE STRIP je fleksibilna traka koja se obmotava samo u slučaju pojedinačnih prodora"
            },
            {
                "title": "SMART FIRE BRICK",
                "about": "Koristi se uz: plastične cevi, kablovski sistemi",
                "description": "SMART FIRE BRICK je konstruktivna zaptivka u obliku cigle na bazi polimera dugotrajnih i visokih performansi male specifične gustine (mase) koja ekspandira pod uticajem vatre ili usijanih gasova i popunjava celokupan prostor nakon sagorevanja instalacija. Primenjuje se isključivo horizontalno.",
                "application": "SMART FIRE BRICK se koristi kao zaptivka u zidovima, na podovima i na plafonima. Kroz ovu zaptivku u obliku cigle može penetrirati jedan kabl ili manji snop kablova na regalu ili samostalnih kablova kao i manje plastične cevi. Proizvod može popuniti šupljinu u zidu do maksimalnog otvora 110x110cm.",
                "pictureSource1": "./assets/images/products/smartfire-brick1.webp",
                "pictureSource2": "./assets/images/products/smartfire-brick2.webp",
                "applicableTo": "Ova zaptivka je primenjiva na konstruktivne zidove (blok, cigla), kao i na lake pregradne zidove na prostoru do maksimalnog otvora 110x110cm"
            },
            {
                "title": "SMART FIRE PLUG",
                "about": "Koristi se uz: kablovski sistemi",
                "description": "SMART FIRE PLUG je konstruktivna zaptivka u obliku čepa na bazi polimera dugotrajnih i visokih performansi male specifične gustine (mase) koja ekspandira pod uticajem vatre ili usijanih gasova i popunjava celokupan prostor nakon sagorevanja instalacija. Radi se o inovativnoj tehnologiji.",
                "application": "SMART FIRE PLUG se koristi kao zaptivka u zidovima, na podovima i na plafonima. Kroz ovu zaptivku u obliku čepa može penetrirati jedan kabl ili manji snop kablova na regalu ili samostalnih kablova kao i manje plastične cevi. Odobrenja: SRPS EN 1364-5 (Institut IMS) Odobrenja: SRPS EN 1366-3 (Institut IMS - u toku)",
                "pictureSource1": "./assets/images/products/smartfire-plug1.webp",
                "pictureSource2": "./assets/images/products/smartfire-plug2.webp",
                "applicableTo": "Zaptivka se ugradjuje u zidove, a kroz nju mogu penetrirati pojedinačni kablovi, odnosno snopovi istih, kao i plastične cevi."
            }
        ];
        for(var i = 0; i < productList.length; i++) {
            productListDiv.innerHTML += '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4" data-aos="fade-up"><button type="button" onclick="loadModal(' + i + ')" class="btn-product" data-bs-toggle="modal" data-bs-target="#exampleModal"> <h5 class="product-title"> ' + productList[i].title + ' </h5><div class="m-4"><img class="img-fluid p-4" src="' + productList[i].pictureSource1 + '"></div></button></div>'
        }
    }
    if(lang === 'en'){
        productList = [
            {
                "title": "SMART FIRE COLLAR",
                "about": "Applicable with: plastic pipes, A/C cooper pipes, cable systems",
                "description": "Smart fire collar is made of 0.8mm stainless steel housing with a flexible insert made of a graphite-based material which swells under the influence of temperature above 150°C.",
                "application": "Smart Fire Collar is used for fire protection of penetrations with copper, plastic pipes (PVC, PVC-U, San+PVC, PE, HDPE, MDPE, PVC-U, PP, PP-RCT, and others) as well as combination of plastic/copper pipes and electric/network cables running through flexible or rigid wall and floors). EASY RETROFIT AT ANY TIME. Horizontal and vertical application. Performance unaffected by weathering (Type X Durability). Innovative technology.",
                "pictureSource1": "./assets/images/products/smartfire-collar1.webp",
                "pictureSource2": "./assets/images/products/smartfire-collar2.webp",
                "applicableTo": "Applicable to masonry walls and floors as well as speed panels with 900 and 450 pipe penetrations."
            },
            {
                "title": "SMART FIRE ACRYLIC SEALANT",
                "about": "Applicable with: plastic pipes, metal pipes, cable systems, fire doors",
                "description": "Smart fire AS is an acrylic-based, single component fire stopping sealant used for non-movement joints.",
                "application": "- Construction walls and/or floor joints - Gaps behind fire resistant door casings - Seating of smart fire grill or collar - Gaps around metallic pipes and cable penetrations",
                "pictureSource1": "./assets/images/products/smartfire-acrylic-sealant1.webp",
                "pictureSource2": "./assets/images/products/smartfire-acrylic-sealant2.webp",
                "applicableTo": "Applicable to all kinds of joints requiring fire resistance. Can be painted once is cured. Great unprimed adhesion characteristics. Bigger gaps should be filled with stone wool, fire wrap or strip.  "
            },
            {
                "title": "SMART FIRE MASTIC",
                "about": "Applicable with: flammable and inflammable pipes, cable systems",
                "description": "Smart Fire mastic is an acrylic based, intumescent, single component fire stopping sealant which creates high pressure on expansion allowing the sealing of combustible pipes (up to ø50 mm).",
                "application": "Smart fire Mastic is a fire stopping sealant for walls and floors. It is designed for use with cable bundles, combustible and non-combustible pipes with combustible insulation.",
                "pictureSource1": "./assets/images/products/smartfire-mastic1.webp",
                "pictureSource2": "./assets/images/products/smartfire-mastic2.webp",
                "applicableTo": "Applicable to masonry walls and floors as well as speed panels with cable bundles, combustible and non-combustible pipes with combustible insulation and joints without movement."
            },
            {
                "title": "SMART FIRE PUTTY",
                "about": "Applicable with: plastic pipes, metal pipes",
                "description": "Smart Fire putty is graphite based powder which swells under the influence of temperature above 150°C. Smart Fire putty is used for fire protection of penetrations with plastic pipes, metal pipes (both combustable and non combustable insulation) in combination with collars, grills, plug/brick where annular or any other gap need to be closed. Innovative technology.",
                "application": "Smart Fire Putty is used for wall penetration of combustile and non-combustile pipes as well as cables installed in flexibe pipes.",
                "pictureSource1": "./assets/images/products/smartfire-putty1.webp",
                "pictureSource2": "./assets/images/products/smartfire-putty2.webp",
                "applicableTo": "Applicable to masonry walls and floors as well as speed panels penetrations in possible combination with other fire stopping products (collar, wrap, strip etc.)"
            },
            {
                "title": "SMART FIRE GRILL SQUARE",
                "about": "Applicable at: rectangular ventilation openings in walls, floors and fire doors ",
                "description": "Smart Fire Grill are made from galvanized metal sheets partly filled with graphite based material that expands under the influence of high temperatures. Intumescent inserts completely fill remaining gaps when exposed to temperatures above 150°C thus preventing the spread of flame and smoke. Innovative technology.",
                "application": "Smart fire grills are installed in the ventilation holes in walls, floors and doors.",
                "pictureSource1": "./assets/images/products/smartfire-grill-square1.webp",
                "pictureSource2": "./assets/images/products/smartfire-grill-square2.webp",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE GRILL ROUND",
                "about": "Applicable at: round ventilation openings in walls, floors and fire doors",
                "description": "Smart Fire Grill are made from galvanized metal sheets partly filled with graphite based material that expands under the influence of high temperatures. Intumescent inserts completely fill remaining gaps when exposed to temperatures above 150°C thus preventing the spread of flame and smoke. Innovative technology.",
                "application": "Smart fire grills are installed in the ventilation holes in walls, floors and doors.",
                "pictureSource1": "./assets/images/products/smartfire-grill-round1.webp",
                "pictureSource2": "./assets/images/products/smartfire-grill-round2.webp",
                "applicableTo": "Applicable as a part of HVAC systems in round pipes as well as masonry walls ventilation grill."
            },
            {
                "title": "SMART FIRE WRAP/STRIP",
                "about": "Applicable with: plastic pipes, metal pipes, CABLE SYSTEMS",
                "description": "Smart fire wrap/strip is made of a graphite based material which swells under high temperature influence and fills the entire space left after burnt-out combustible installations. Innovative technology.",
                "application": "Smart Fire Wrap/Strip is used for fire protection of penetrations with plastic pipes (PVC, PVC-U, San+PVC, PE, HDPE, MDPE, PVC-U, PP, PP-RCT, and others) running through flexible or rigid walls horizontal and vertical application. Performance unaffected by weathering (Type X Durability). It is applied in a single or multiple wraps depending on a pipe diameter.",
                "pictureSource1": "./assets/images/products/smartfire-wrap1.webp",
                "pictureSource2": "./assets/images/products/smartfire-wrap2.webp",
                "applicableTo": "Smart fire wrap is applicable as metal pipes or cables penetration gap fill wrap. Smart Fire Strip is used for plastic pipes."
            },
            {
                "title": "SMART FIRE BRICK",
                "about": "Applicable with: plastic pipes, cable systems",
                "description": "Smart fire brick is graphite based seal which swells under high temperature influence and fills the entire space left after burnt-out of combustible installations. Horizontal application",
                "application": "Smart fire brick is used as a seal for wall/floor/ceiling penetration of single cables as well as smaller cable bundles or small diameter pipes. It can be stacked to a maximum area of 1,4m2",
                "pictureSource1": "./assets/images/products/smartfire-brick1.webp",
                "pictureSource2": "./assets/images/products/smartfire-brick2.webp",
                "applicableTo": "Applicable to masonry walls and speed panels on area up to 1,4m2."
            },
            {
                "title": "SMART FIRE PLUG",
                "about": "Applicable with: cable systems",
                "description": "Smart fire plug is graphite based shaped seal which swells under high temperature influence and fills the entire space left after burnt-out of combustible installations. Horizontal application. Innovative technology.",
                "application": "Smart fire brick is used as a seal for wall/floor/cealing penetration of single cables as well as smaller cable bundles or small diameter pipes.",
                "pictureSource1": "./assets/images/products/smartfire-plug1.webp",
                "pictureSource2": "./assets/images/products/smartfire-plug2.webp",
                "applicableTo": "Applicable to cable bundle and pipe penetrations in masonry walls."
            }
        ];

        for(var i = 0; i < productList.length; i++) {
            productListDiv.innerHTML += '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4" data-aos="fade-up"><button type="button" onclick="loadModal(' + i + ')" class="btn-product" data-bs-toggle="modal" data-bs-target="#exampleModal"> <h5 class="product-title"> ' + productList[i].title + ' </h5><div class="m-4"><img class="img-fluid p-4" src="' + productList[i].pictureSource1 + '"></div></button></div>'
        }
    } 
}

function loadModal(id) {
    var product = productList[parseInt(id)];
    document.getElementById("modal-title").textContent = product.title;
    document.getElementById("modal-subtitle").textContent = product.about;
    document.getElementById("modal-about").textContent = product.description;
    document.getElementById("image-1").setAttribute("src", product.pictureSource1);
    document.getElementById("application").textContent = product.application;
    document.getElementById("applicableTo").textContent = product.applicableTo;
    document.getElementById("image-2").setAttribute("src", product.pictureSource2);
}