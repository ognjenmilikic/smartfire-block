var productList;
function loadProducts(lang) {
    var productListDiv = document.getElementById('product-list');
    if(lang === 'sr'){
        productList = [
            {
                "title": "SMART FIRE COLLAR",
                "about": "Koristi se uz: plastične cevi, A/C bakarne cevi, kablovski sistemi.",
                "description": "SMART FIRE COLLAR je obujmica napravljena od kućišta od nerđajućeg čelika sa pokretnim umetkom od materijala koji ekspandira na temperaturi iznad 160°C.",
                "application": "SMART FIRE COLLAR je obujmica koja se koristi za zaštitu od prodiranja vatre kroz prolaze plastičnih cevi (PVC, PVC-U, San+PVC, PE, HDPE, MDPE, PP, PP-RCT i druge) kao i oko kombinacije plastičnih i bakarnih cevi (HVAC), odnosno elektrokablova, mrežnih kablova koji prodiru kroz lake pregrade kao i čvrste, konstruktivne zidove i podove. Primena može biti horizontalna i vertikalna. Proizvod je tipa ’’Type X Durability’’, što znači da performanse proizvoda ne zavise od promene vremenskih uslova.Postoji mogućnost naknadne ugradnje u bilo kom trenutku prilikom rekonstrukcije objekta. Koristi se u kombinaciji sa drugim SF proizvodima, kao što su SMART FIRE MASTIC, SMART FIRE PUTTY i SMART FIRE ACRILIC SEALANT.",
                "pictureSource1": "./assets/images/products/smartfire-collar1.webp",
                "pictureSource2": "./assets/images/products/smartfire-collar2.webp",
                "applicableTo": "SMART FIRE COLLAR je pogodan za ugradnju na zidove (blok, cigla, gips), kao i na međuspratne konstrukcije."
            },
            {
                "title": "SMART FIRE ACRYLIC SEALANT",
                "about": "Koristi se uz: plastične cevi, metalne cevi, kablovski sistemi, protivpožarna vrata.",
                "description": "SMART FIRE AS je zaptivna masa na bazi akrilatnog polimera koja je predviđena za zaptivanje otvora između prodora i instalacija koje se smatraju nepomerljivim ili niskog stepena pomeranja u cilju sprečavanja prodora vatre i dima.",
                "application": "- Zaptivanje otvora na zidovima i podovima \n- Zaptivanje otvora između protivpožarnih vrata i zida \n- Zaptivanje otvora oko protivpožarnih rešetaka ili obujmica \n- Zaptivanje otvora kroz koje prodiru plastične i metalne cevi, odnosno kablovi",
                "pictureSource1": "./assets/images/products/smartfire-acrylic-sealant1.webp",
                "pictureSource2": "./assets/images/products/smartfire-acrylic-sealant2.webp",
                "applicableTo": "Primenjivo na sve vrste spojeva koji iziskuju određenu klasifikaciju vatrootpornosti, odnosno prodora dima. Nakon primene može biti ofarbano. U slučaju većih otvora međuprostor popuniti kamenom vunom ili koristiti SMART FIRE STRIP. Proizvod poseduje značajna adheziona svojstva."
            },
            {
                "title": "SMART FIRE MASTIC",
                "about": "Koristi se uz: gorive i negorive cevi, kablovski sistemi.",
                "description": "SMART FIRE MASTIC je zaptivna masa na bazi akrilatnog polimera koja je predviđena za ispunjavanje otvora između prodora i instalacija sa nešto većim stepenom pomeranja u toku životnog veka. Efikasno zaptiva prodore i štiti iste od vatre i dima. SMART FIRE MASTIC stvara pritisak prilikom ekspandiranja i tako omogućava zaptivanje gorivih cevi bez upotrebe dodatnih sistema zaštite (do prečnika cevi od 50mm).",
                "application": "SMART FIRE MASTIC je zaptivka koja zaustavlja prodiranje vatre u zidovima i podovima. Dizajnirana je da se koristi kao zaptivka oko snopova kablova, kablova koji su stacionirani u fleksibilnim cevima, gorivih i negorivih cevi, u svrhu izolacije i sprečavanja prodora vatre i dima.",
                "pictureSource1": "./assets/images/products/smartfire-mastic1.webp",
                "pictureSource2": "./assets/images/products/smartfire-mastic2.webp",
                "applicableTo": "SMART FIRE MASTIC je pogodan za ugradnju na zidove (blok, cigla, gips), kao i na međuspratne konstrukcije."
            },
            {
                "title": "SMART FIRE PUTTY",
                "about": "Koristi se uz: plastične cevi i metalne cevi.",
                "description": "SMART FIRE PUTTY je zaptivna masa / git koja ekspandira na temperaturama iznad 160°C. SMART FIRE PUTTY se koristi za zaštitu od prodiranja vatre oko plastičnih cevi, metalnih cevi (goriva i negoriva izolacija) u kombinaciji sa obujmicama, rešetkama, ciglama, čepovima gde kružni ili bilo koji drugi otvor treba popuniti.",
                "application": "SMART FIRE PUTTY je zaptivna masa koja zaustavlja prodiranje vatre u zidovima i podovima. Dizajnirana je da se koristi kao zaptivka uz snopove kablova, gorivih i negorivih cevi, u svrhu izolacije i sprečavanja prodora vatre i dima.",
                "pictureSource1": "./assets/images/products/smartfire-putty1.webp",
                "pictureSource2": "./assets/images/products/smartfire-putty2.webp",
                "applicableTo": "Ova zaptivka je primenjiva na zidane konstrukcije (blok, cigla), kao i na međuspratne konstrukcije u zidovima i podovima, kao i u brzim panelima uz moguću kombinaciju sa drugim proizvodima za zaštitu od prodora vatre ili usijanih gasova (obujmica, fleksibilna traka)."
            },
            {
                "title": "SMART FIRE GRILL SQUARE",
                "about": "Koristi se u: ventilacionim otvorima pravougaonog oblika u zidovima, na podovima i na vratima.",
                "description": "SMART FIRE GRILL predstavlja protivpožarnu rešetku (žaluzinu) sa funkcijom izjednačavanja pritiska i ventilacije. Napravljena je od profila Inox, odnosno nerđajućeg čelika. Ispunjena je ekspandirajućim vatrootpornim materijalom. Na temperaturama iznad 105 °C dolazi do ekspandiranja materijala, pri čime se preostali deo rešetke popunjava i time sprečava dalji prodor vatre i dima. Primenjena je inovativna i jedinstvena tehnologija. \n• Jednostavno održavanje, bez mehaničkih i drugih pokretljivih delova.  \n• Laminarno strujanje vazduha. \n• Do 70% slobodnog prostora za strujanje vazduha \n• Čvrsta konstrukcija \n• Otporna na sve atmosferske prilike \n• Nije sklona zapušavanju otvora, odnosno stvaranju grinja i buđi. \n• Mogućnost spoljne i unutrašnje ugradnje \n• Modularna ugradnja u bilo kojoj veličini i orijentaciji",
                "application": "Smart Fire Grill se ugrađuje u: \n 1) Ventilacione otvore u industrijskim i stambenim objektima, te prostorijama posebne namene (server sale, skladišta, operacione sale) \n 2) Ventilacione kanale kao i kanale za odimljavanje (HVAC) \n 3) Protivpožarna vrata \n 4) Ventilacione otvore u trafo stanicama",
                "pictureSource1": "./assets/images/products/smartfire-grill-square1.webp",
                "pictureSource2": "./assets/images/products/smartfire-grill-square2.webp",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE GRILL ROUND",
                "about": "Koristi se u: ventilacionim otvorima okruglog oblika u zidovima, na podovima i na vratima.",
                "description": "SMART FIRE GRILL predstavlja protivpožarnu rešetku (žaluzinu) sa funkcijom izjednačavanja pritiska i ventilacije. Napravljena je od profila Inox, odnosno nerđajućeg čelika. Ispunjena je ekspandirajućim vatrootpornim materijalom. Na temperaturama iznad 105 °C dolazi do ekspandiranja materijala, pri čime se preostali deo rešetke popunjava i time sprečava dalji prodor vatre i dima. Primenjena je inovativna i jedinstvena tehnologija. \n• Jednostavno održavanje, bez mehaničkih i drugih pokretljivih delova. \n• Laminarno strujanje vazduha. \n• Do 70% slobodnog prostora za strujanje vazduha \n• Čvrsta konstrukcija \n• Otporna na sve atmosferske prilike \n• Nije sklona zapušavanju otvora, odnosno stvaranju grinja i buđi. \n• Mogućnost spoljne i unutrašnje ugradnje \n• Modularna ugradnja u bilo kojoj veličini i orijentaciji",
                "application": "Smart Fire Grill se ugrađuje u: \n1) Ventilacione otvore u industrijskim i stambenim objektima, te prostorijama posebne namene (server sale, skladišta, operacione sale) \n2) Ventilacione kanale kao i kanale za odimljavanje (HVAC) \n3) Protivpožarna vrata \n4) Ventilacione otvore u trafo stanicama",
                "pictureSource1": "./assets/images/products/smartfire-grill-round1.webp",
                "pictureSource2": "./assets/images/products/smartfire-grill-round2.webp",
                "applicableTo": "Primenjivo kao deo HVAC sistema unutar okruglih kanala i u zidovima kao samostalne ventilacione rešetke."
            },
            {
                "title": "SMART FIRE WRAP/STRIP",
                "about": "Koristi se uz: plastične cevi, metalne cevi, kablovski sistemi.",
                "description": "SMART FIRE WRAP / STRIP je fleksibilna traka pravljena od polimera visokih performansi koja ekspandira pod uticajem vatre ili usijanih gasova, odnosno temperature iznad 160°C i popunjava celokupan prostor nakon sagorevanja instalacija. Radi se o inovativnoj tehnologiji.",
                "application": "SMART FIRE WRAP / STRIP* je fleksibilna traka koja se koristi kao zaptivka za zaštitu od prodiranja vatre obmotavanjem oko pojedinačnih prodora, odnosno sledećih kombinacija plastičnih cevi** (PVC, PVC-U, San+PVC, PE, HDPE, MDPE, PVC-U, PP, PP-RCT i druge) i bakarnih cevi (HVAC) odnosno napojnih i komunikacionih kablova koji prodiru kroz lake pregrade kao i čvrste, konstruktivne zidove i podove. Primena može biti horizontalna i vertikalna. Proizvod je tipa ’’Type X Durability’’, što znači da performanse proizvoda ne zavise od promena vremenskih uslova.",
                "pictureSource1": "./assets/images/products/smartfire-wrap1.webp",
                "pictureSource2": "./assets/images/products/smartfire-wrap2.webp",
                "applicableTo": "SMART FIRE WRAP je fleksibilna traka koja se obmotava oko različitih kombinacija prodora (bakarnih cevi, plastičnih cevi, kablova) koji prodiru kroz otvore na zidovima. SMART FIRE STRIP je fleksibilna traka koja se obmotava samo u slučaju pojedinačnih prodora."
            },
            {
                "title": "SMART FIRE BRICK",
                "about": "Koristi se uz: plastične cevi, kablovski sistemi.",
                "description": "SMART FIRE BRICK je konstruktivna zaptivka u obliku cigle na bazi polimera dugotrajnih i visokih performansi male specifične gustine (mase) koja ekspandira pod uticajem vatre ili usijanih gasova i popunjava celokupan prostor nakon sagorevanja instalacija. Ugrađuje se isključivo horizontalno.",
                "application": "SMART FIRE BRICK se koristi kao zaptivka u zidovima, na podovima i na plafonima. Kroz ovu zaptivku u obliku cigle može penetrirati jedan kabl ili manji snop kablova na regalu ili samostalnih kablova kao i manje plastične cevi. Proizvod može popuniti šupljinu u zidu do maksimalnog otvora 110x110cm.",
                "pictureSource1": "./assets/images/products/smartfire-brick1.webp",
                "pictureSource2": "./assets/images/products/smartfire-brick2.webp",
                "applicableTo": "Ova zaptivka je primenjiva na konstruktivne zidove (blok, cigla), kao i na lake pregradne zidove na prostoru do maksimalnog otvora 110x110cm."
            },
            {
                "title": "SMART FIRE PLUG",
                "about": "Koristi se uz: kablovski sistemi.",
                "description": "SMART FIRE PLUG je konstruktivna zaptivka u obliku čepa na bazi polimera dugotrajnih i visokih performansi male specifične gustine (mase) koja ekspandira pod uticajem vatre ili usijanih gasova i popunjava celokupan prostor nakon sagorevanja instalacija. Radi se o inovativnoj tehnologiji.",
                "application": "SMART FIRE PLUG se koristi kao zaptivka u zidovima,na podovima i na plafonima. Kroz ovu zaptivku u obliku čepa može penetrirati jedan kabl ili manji snop kablova na regalu ili samostalnih kablova kao i manje plastične cevi.",
                "pictureSource1": "./assets/images/products/smartfire-plug1.webp",
                "pictureSource2": "./assets/images/products/smartfire-plug2.webp",
                "applicableTo": "Zaptivka se ugradjuje u zidove, a kroz nju mogu penetrirati pojedinačni kablovi, odnosno snopovi istih, kao i plastične cevi."
            },
            {
                "title": "SMART FIRE BATT",
                "about": "",
                "description": "Proizvod se sastoji od table kamene vune na koju je prethodno nanešen premaz SFAC (Smart Fire Ablative Coating) na jednu ili obe strane. Kroz tablu prodiru kablovi, cevi kao i kombinacija ovih prodora. Proizvod je otporan na pritisak, vodootporan, sa zvučnom i toplotnom izolacijom i otporan na difuziju. ",
                "application": "Smart Fire Batt se koristi za zaptivanje kablova, kablovskih regala (lestvičasti kablovski regali, perforirani i neperforirani), cevi, kao i mešovitih prodora, isključivo u unutrašnjosti objekta.",
                "pictureSource1": "./assets/images/products/smartfire-batt1.webp",
                "pictureSource2": "",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE INTUMESCENT DOOR STRIP - SFIDS",
                "about": "",
                "description": "Smart Fire Intumescent Door Strip (SFIDS) je samolepljiva traka za protivpožarna vrata napravljena od vatrootpornog materijala koji ekspandira pod uticajem vatre i usijanih gasova i kao takva se primenjuje u zazorima za sprečavanje dejstva požara. Na visokim temperaturama traka ekspandira i popunjava celokupni prostor između zazora (PP vrata, PP revizioni poklopci, PP sigurnosni ormari) i zaptiva zazore između PP rešetki (žaluzina), SMART FIRE GRILL (ROUND & RECTANGULAR). Može se primeniti kod zaptivanja zazora kablovskih prodora.",
                "application": "Smart Fire Intumescent Door Strip se koristi na: \n• Protivpiožarnim vratima od drveta, čelika i aluminijuma \n• Posebnim oblastima na PP vratima: brave, šarke, PP staklo i PP rešetke (žaluzine) za izjednačavanje pritiska i ventilaciju \n• Između modularnih segmenta kod PP rešetke (žaluzine) kao i kod zatvaranja otvora između same PP rešetke (žaluzine) i zida \n• Sigurnosnim ormarima za skladištenje, kontrolnim ormarima \n• Konstrukciji zida: revizioni poklopci, u prelazima u kojima se razdvajaju zid i pod \n• Spoljnim pregradama koje predstavljaju protivpožarnu zonu za zatvaranje zazora \n• Poklopcima za zaštitu od vatre i kod zaptivanja zazora kablovskih prodora",
                "pictureSource1": "./assets/images/products/smartfire-sfids1.webp",
                "pictureSource2": "",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE ABLATIVE COATING",
                "about": "",
                "description": "Smart Fire Ablative Coating je protivpožarni, zaštitni premaz za upotrebu u unutrašnjim i spoljašnjim sredinama. Koristi se za premazivanje kablova, cevi i kombinacije prodora.",
                "application": "Smart Fire Ablative Coating se koristi u unutrašnjim i spoljašnjim sredinama radi zaštite: \n• Horizontalnih i vertikalnih kablovskih prodora kao i samih kablova \n• Zaštita kamene vune (odbijanje vlage, dodatna zvučna izolacija i efekat protivpožarnosti) \n• Potpornih konstrukcija \n• HVAC kanala",
                "pictureSource1": "./assets/images/products/smartfire-ablative-coating1.webp",
                "pictureSource2": "",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE LIGHTWEIGHT SPRAY, SPRAYABLE MORTAR - SFLS",
                "about": "",
                "description": "Smart Fire Lightweight Spray (SFLS) je vatrootporni malter sa termo - izolacionim svojstvima za pasivnu zaštitu od požara u konstruktivnim elementima čelik, betonska konstrukcija, pregradama kao i ventilacionim i dimovodnim kanalima. Proizvod se sastoji od ekspandiranih lakih agregata (perlit i vermikulit), hidrauličnih veziva, protivpožarnih aditiva i aditiva za poboljšanje mehaničkih svojstava. Nakon nanošenja, obzirom na nisku specifičnu gustinu proizvoda ne dolazi do značajnijeg povećanja opterećenja čelične konstrukcije odnosno instalacija HVAC sistema. Niska specifična težina omogućava lako mašinsko nanošenje. SFLS može poslužiti i kao odličan toplotni i zvučni izolator, pre svega kod krovnih konstrukcija. U pitanju je potpuno prirodni proizvod, delom dobijen iz bio obnovljivih izvora. Ne sadrži azbest. Sadrži bio vlakna i zbog tog nije štetan po zdravlje i životnu sredinu",
                "application": "Smart Fire Lightweight Spray se koristi na: \n• Unutrašnjim i delimično izloženim čeličnim stubovima, gredama, profilima i spregnutim podnim pločama \n• Klimatizacionim, ventilacionim i kanalima za odimljavanje (unutrašnja HVAC instalacija) \n• Smart Fire Lightweight Spray (SFLS) se koristi za premazivanje (malterisanje) čeličnih konstrukcija u objektima, u svrhu održavanja stabilnosti i otpornosti ovih elemenata do trenutka primene aktivne zaštite od požara kao i istovremeno nakon inicijacije aktivne zaštite ili evakuacije objekta",
                "pictureSource1": "./assets/images/products/smartfire-lightweight-spray1.webp",
                "pictureSource2": "",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE MORTAR - SFMO",
                "about": "",
                "description": "Smart Fire Mortar (SFMO) je vatrootporni malter sa termo - izolacionim svojstvima za pasivnu zaštitu od požara kod horizontalnih i vertikalnih prodora elektro kablova, samostalno ili u kombinaciji sa nosačem / regalima kao i prodora čeličnih i bakarnih cevi, plastičnih cevi, plastičnih cevi sa izolacijom od kamene vune, kao i za samostalno zaptivanje prodora. Proizvod se sastoji od lakih agregata, hidrauličnih veziva, protivpožarnih aditiva i aditiva za poboljšanje mehaničkih svojstava. Omogućava se lako ručno i mašinsko nanošenje, što proizvod čini pogodnim za ugradnju na nepristupačnim mestima kod zaštite manjih prodora. SFMO može poslužiti i kao odličan toplotni i zvučni izolator. Ne sadrži azbest. Sadrži bio vlakna i zbog toga nije štetan po zdravlje i životnu sredinu.",
                "application": "Smart Fire Mortar se koristi: \n• Samostalno \n• U kombinaciji sa Smart Fire Wrap-om / Strip-om / Collar-om / Ablative coating-om / Mastic-om / Acrilic Sealant-om / Putty-ijem",
                "pictureSource1": "./assets/images/products/smartfire-mortar1.webp",
                "pictureSource2": "",
                "applicableTo": ""
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
                "about": "Applicable with: plastic pipes, A/C cooper pipes, cable systems.",
                "description": "Smart fire collar is made of 0.8mm stainless steel housing with a flexible insert made of a graphite-based material which swells under the influence of temperature above 150°C.",
                "application": "Smart Fire Collar is used for fire protection of penetrations with copper, plastic pipes (PVC, PVC-U, San+PVC, PE, HDPE, MDPE, PVC-U, PP, PP-RCT, and others) as well as combination of plastic/copper pipes and electric/network cables running through flexible or rigid wall and floors). EASY RETROFIT AT ANY TIME. Horizontal and vertical application. Performance unaffected by weathering (Type X Durability). Innovative technology.",
                "pictureSource1": "./assets/images/products/smartfire-collar1.webp",
                "pictureSource2": "./assets/images/products/smartfire-collar2.webp",
                "applicableTo": "Applicable to masonry walls and floors as well as speed panels with 900 and 450 pipe penetrations."
            },
            {
                "title": "SMART FIRE ACRYLIC SEALANT",
                "about": "Applicable with: plastic pipes, metal pipes, cable systems, fire doors.",
                "description": "Smart fire AS is an acrylic-based, single component fire stopping sealant used for non-movement joints.",
                "application": "Construction walls and/or floor joints. Gaps behind fire resistant door casings. Seating of smart fire grill or collar. Gaps around metallic pipes and cable penetrations.",
                "pictureSource1": "./assets/images/products/smartfire-acrylic-sealant1.webp",
                "pictureSource2": "./assets/images/products/smartfire-acrylic-sealant2.webp",
                "applicableTo": "Applicable to all kinds of joints requiring fire resistance. Can be painted once is cured. Great unprimed adhesion characteristics. Bigger gaps should be filled with stone wool, fire wrap or strip."
            },
            {
                "title": "SMART FIRE MASTIC",
                "about": "Applicable with: flammable and inflammable pipes, cable systems.",
                "description": "Smart Fire mastic is an acrylic based, intumescent, single component fire stopping sealant which creates high pressure on expansion allowing the sealing of combustible pipes (up to ø50 mm).",
                "application": "Smart fire Mastic is a fire stopping sealant for walls and floors. It is designed for use with cable bundles, combustible and non-combustible pipes with combustible insulation.",
                "pictureSource1": "./assets/images/products/smartfire-mastic1.webp",
                "pictureSource2": "./assets/images/products/smartfire-mastic2.webp",
                "applicableTo": "Applicable to masonry walls and floors as well as speed panels with cable bundles, combustible and non-combustible pipes with combustible insulation and joints without movement."
            },
            {
                "title": "SMART FIRE PUTTY",
                "about": "Applicable with: plastic pipes, metal pipes.",
                "description": "Smart Fire putty is graphite based powder which swells under the influence of temperature above 150°C. Smart Fire putty is used for fire protection of penetrations with plastic pipes, metal pipes (both combustable and non combustable insulation) in combination with collars, grills, plug/brick where annular or any other gap need to be closed. Innovative technology.",
                "application": "Smart Fire Putty is used for wall penetration of combustile and non-combustile pipes as well as cables installed in flexibe pipes.",
                "pictureSource1": "./assets/images/products/smartfire-putty1.webp",
                "pictureSource2": "./assets/images/products/smartfire-putty2.webp",
                "applicableTo": "Applicable to masonry walls and floors as well as speed panels penetrations in possible combination with other fire stopping products (collar, wrap, strip etc.)."
            },
            {
                "title": "SMART FIRE GRILL SQUARE",
                "about": "Applicable at: rectangular ventilation openings in walls, floors and fire doors.",
                "description": "Smart Fire Grill are made from galvanized metal sheets partly filled with graphite based material that expands under the influence of high temperatures. Intumescent inserts completely fill remaining gaps when exposed to temperatures above 150°C thus preventing the spread of flame and smoke. Innovative technology.",
                "application": "Smart fire grills are installed in the ventilation holes in walls, floors and doors.",
                "pictureSource1": "./assets/images/products/smartfire-grill-square1.webp",
                "pictureSource2": "./assets/images/products/smartfire-grill-square2.webp",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE GRILL ROUND",
                "about": "Applicable at: round ventilation openings in walls, floors and fire doors.",
                "description": "Smart Fire Grill are made from galvanized metal sheets partly filled with graphite based material that expands under the influence of high temperatures. Intumescent inserts completely fill remaining gaps when exposed to temperatures above 150°C thus preventing the spread of flame and smoke. Innovative technology.",
                "application": "Smart fire grills are installed in the ventilation holes in walls, floors and doors.",
                "pictureSource1": "./assets/images/products/smartfire-grill-round1.webp",
                "pictureSource2": "./assets/images/products/smartfire-grill-round2.webp",
                "applicableTo": "Applicable as a part of HVAC systems in round pipes as well as masonry walls ventilation grill."
            },
            {
                "title": "SMART FIRE WRAP/STRIP",
                "about": "Applicable with: plastic pipes, metal pipes, cable systems.",
                "description": "Smart fire wrap/strip is made of a graphite based material which swells under high temperature influence and fills the entire space left after burnt-out combustible installations. Innovative technology.",
                "application": "Smart Fire Wrap/Strip is used for fire protection of penetrations with plastic pipes (PVC, PVC-U, San+PVC, PE, HDPE, MDPE, PVC-U, PP, PP-RCT, and others) running through flexible or rigid walls horizontal and vertical application. Performance unaffected by weathering (Type X Durability). It is applied in a single or multiple wraps depending on a pipe diameter.",
                "pictureSource1": "./assets/images/products/smartfire-wrap1.webp",
                "pictureSource2": "./assets/images/products/smartfire-wrap2.webp",
                "applicableTo": "Smart fire wrap is applicable as metal pipes or cables penetration gap fill wrap. Smart Fire Strip is used for plastic pipes."
            },
            {
                "title": "SMART FIRE BRICK",
                "about": "Applicable with: plastic pipes, cable systems.",
                "description": "Smart fire brick is graphite based seal which swells under high temperature influence and fills the entire space left after burnt-out of combustible installations. Horizontal application.",
                "application": "Smart fire brick is used as a seal for wall/floor/ceiling penetration of single cables as well as smaller cable bundles or small diameter pipes. It can be stacked to a maximum area of 1,4m².",
                "pictureSource1": "./assets/images/products/smartfire-brick1.webp",
                "pictureSource2": "./assets/images/products/smartfire-brick2.webp",
                "applicableTo": "Applicable to masonry walls and speed panels on area up to 1,4m²."
            },
            {
                "title": "SMART FIRE PLUG",
                "about": "Applicable with: cable systems",
                "description": "Smart fire plug is graphite based shaped seal which swells under high temperature influence and fills the entire space left after burnt-out of combustible installations. Horizontal application. Innovative technology.",
                "application": "Smart fire brick is used as a seal for wall/floor/cealing penetration of single cables as well as smaller cable bundles or small diameter pipes.",
                "pictureSource1": "./assets/images/products/smartfire-plug1.webp",
                "pictureSource2": "./assets/images/products/smartfire-plug2.webp",
                "applicableTo": "Applicable to cable bundle and pipe penetrations in masonry walls."
            },
            {
                "title": "SMART FIRE BATT",
                "about": "",
                "description": "The mineral fibre board with pre-applied SFAC (Smart Fire Ablative Coating) on one or two sides is used as system boards for cable, pipe and mixed penetration seals. It is pressure-resistant and water-repellent, heat and sound insulating, and open to diffusion.",
                "application": "Smart Fire Batt is used for indoor closing of cable, pipe and mixed penetration seals.",
                "pictureSource1": "./assets/images/products/smartfire-batt1.webp",
                "pictureSource2": "",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE INTUMESCENT DOOR STRIP - SFIDS",
                "about": "",
                "description": "Smart Fire Door Stip(SDFS) is made of intumescent material which swells under high temperature and fills the entire space left after burnt-out combustible installations.",
                "application": "Smart Fire Intumescent Door Strip is used on: \n• Fire protection doors of wood, steel or aluminium \n• Special application areas of fire protection doors, e. g. lock case insulations and hinges \n• Safety storage cabinets, control cabinets \n• In drywall construction: inspection flaps, separating wall and floor constructions \n• Component joints \n• Fire protection flaps",
                "pictureSource1": "./assets/images/products/smartfire-sfids1.webp",
                "pictureSource2": "",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE ABLATIVE COATING",
                "about": "",
                "description": "Smart Fire Ablative Coating is fire protection coating for indoor and outdoor use. It is used for cable, pipe or combined penetration sealings. ",
                "application": "Smart Fire Ablative Coating is used for indoor or outdoor protection of \n• Horizonal or vertical cables \n• Supporting structures",
                "pictureSource1": "./assets/images/products/smartfire-ablative-coating1.webp",
                "pictureSource2": "",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE LIGHTWEIGHT SPRAY, SPRAYABLE MORTAR - SFLS",
                "about": "",
                "description": "Smart Fire Mortar (SFMO) is a fire-resistant mortar with thermo-insulating properties for passive fire protection in case of horizontal and vertical penetrations of electric cables, alone or in combination with supports / racks, as well as penetrations of steel and copper pipes, plastic pipes, plastic pipes with insulation made of stone wool, as well as for self-sealing penetrations. The product consists of light aggregates, hydraulic binders, fire-fighting additives and additives to improve mechanical properties. Easy application is possible manually or mechanically, which makes the product suitable for installation in inaccessible places for the protection of minor penetrations. SFMO can also serve as an excellent heat and sound insulator. Does not contain asbestos. It contains bio fibers and is therefore not harmful to health and the environment.",
                "application": "Smart Fire Mortar is used:\n• Independently\n• In combination with Smart Fire Wrap / Strip / Collar / Ablative coating / Mastic / Acrylic Sealant / Putty",
                "pictureSource1": "./assets/images/products/smartfire-lightweight-spray1.webp",
                "pictureSource2": "",
                "applicableTo": ""
            },
            {
                "title": "SMART FIRE MORTAR - SFMO",
                "about": "",
                "description": "Smart Fire Mortar (SFMO) is a fire-resistant mortar with thermo-insulating properties for passive fire protection in case of horizontal and vertical penetrations of electric cables, alone or in combination with supports / racks, as well as penetrations of steel and copper pipes, plastic pipes, plastic pipes with insulation made of stone wool, as well as for self-sealing penetrations. The product consists of light aggregates, hydraulic binders, fire-fighting additives and additives to improve mechanical properties. Easy application is possible manually or mechanically, which makes the product suitable for installation in inaccessible places for the protection of minor penetrations. SFMO can also serve as an excellent heat and sound insulator. Does not contain asbestos. It contains bio fibers and is therefore not harmful to health and the environment.",
                "application": "Smart Fire Mortar is used: \n• Independently \n• In combination with Smart Fire Wrap / Strip / Collar / Ablative coating / Mastic / Acrylic Sealant / Putty",
                "pictureSource1": "./assets/images/products/smartfire-mortar1.webp",
                "pictureSource2": "",
                "applicableTo": ""
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
    document.getElementById("image-2").setAttribute("src", product.pictureSource1);
    document.getElementById("application").textContent = product.application;
    document.getElementById("applicableTo").textContent = product.applicableTo;
    if(product.pictureSource2.length == 0) {
        document.getElementById("image-1").style.display = 'none';
    }
    else {
        document.getElementById("image-1").setAttribute("src", product.pictureSource2);
    }
}