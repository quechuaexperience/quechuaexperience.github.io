var dictionary = {
        'lang': {
            'es': 'Change to English',
            'en': 'Cambiar a Espanol',
        },
        'hero-title':{
            'es': 'Que es Quechua Experience?',
            'en': 'What is Quechua Experience?',
        },
        'hero-title-content':{
            'es': 'Quechua Experience son actividades disenadas y lideradas por nuestra familia Quechua. Ofrecemos mucho mas que el tipico turismo, y te invitamos a formar parte de nuestra familia y conocer nuestras tradiciones, es una oportunidad unica de aprendizaje sobre nuestra cultura y estilo de vida',
            'en': 'Quechua Experiences are activities designed and led by inspiring Quechua families. They go beyond typical tourism by immersing guests in true Quechua family traditions. It’s an opportunity for anyone to learn about their culture, traditions, or expertise without barriers.',
            // <!-- <p>Stay with an Alpaca breeder family in Peru, know their life style and learn about their cultural traditions.</p> -->
            // <!-- <p>My family and I live at 4,100 m.a.s.l. <img src="img/icon/achievement.png" alt="Quechua Experience Peru" > in the Andes of Peru. There are more than 200 thousand families like ours in South America <img src="img/icon/south-america.png" alt="Quechua Experience Peru" >. We belong to the Inca culture <img src="img/icon/inca.png" alt="Quechua Experience Peru" > and speak Quechua as our native language.</p>
            // <p>For centuries, our lifestyle has been based on breeding alpacas<img src="img/icon/alpaca.png" alt="Quechua Experience Peru" >and llamas, as well as cultivating potatoes<img src="img/icon/potatoe.png" alt="Quechua Experience Peru" >. We would truly love to host travelers <img src="img/icon/tourist-woman.png" alt="Quechua Experience Peru" ><img src="img/icon/tourist-man.png" alt="Quechua Experience Peru" > from all over the world and share our <img src="img/icon/zampona.png" alt="Quechua Experience Peru" > <img src="img/icon/flute.png" alt="Quechua Experience Peru" > traditions.</p>
            // <p>As an increasing number of travelers looking for unique and authentic experiences of local traditions, in full respect of the environment, we have developed Alpaca Experience, a project connecting families of Alpaca breeders offering their houses online with travelers who can find and book sustainable destinations all over Peru.</p>
            // <p>We are Quechua experience and we would like to invite you <img src="img/icon/vip.png" alt="Quechua Experience Peru" > to be part of our true traditions and make a positive impact on the world. <img src="img/icon/green-earth.png" alt="Quechua Experience Peru" ></p> -->
        },
        'read-more':{
            'es': 'Leer mas',
            'en': 'Read more',
        },
        'watch-video':{
            'es': 'Ver video',
            'en': 'Watch video',
        },
        'mil-families':{
            'es': '+120mil familias',
            'en': '+120K families',
        },
        'inca-traditions':{
            'es': 'Tradiciones Inca',
            'en': 'Inca traditions',
        },
        'live-culture':{
            'es': 'Cultura Viva',
            'en': 'Live Culture',
        },
        'four-countries':{
            'es': '+4 paises',
            'en': '+4 countries',
        },
        'south-america':{
            'es': 'America del Sur',
            'en': 'South America',
        },
        'four-countries':{
            'es': '+4 paises',
            'en': '+4 countries',
        },
        'four-countries':{
            'es': '+4 paises',
            'en': '+4 countries',
        },
        'four-countries':{
            'es': '+4 paises',
            'en': '+4 countries',
        },
        'four-countries':{
            'es': '+4 paises',
            'en': '+4 countries',
        },
        'four-countries':{
            'es': '+4 paises',
            'en': '+4 countries',
        },
        'four-countries':{
            'es': '+4 paises',
            'en': '+4 countries',
        },
};

var langs = ['es', 'en'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
    current_lang_index = ++current_lang_index % 2;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}

translate();
