
$(document).ready(function(){
    function animation() {
        //treba da nam pokupi sledece parametre
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop(); //koliko je korisnik skrolovao od vrha ekrana
    
        //potom treba da targetiramo sve elemente koji imaju klasu .animation i kad ih targetiramo da prodjemo preko metote .each kroz svaki od tih elemenata i da uzmemo njegovu trenutnu poziciju kada prolazimo kroz .each ovde je sada $this svaki element kroz koji prolazimo i od njega nam treba offset i to parametar top
        $('.animation').each(function () {
            let position = $(this).offset().top;
            //ono sta trebamo da odradimo je da uzmemo od tog elementa animationName i ona ce da bude jednaka od $this elementa atribut 'data-animation' i u ovoj varijabli animationName cemo cuvati slide-bottom, slide-left, slide-right, slide-top
            let animationName = $(this).attr('data-animation');
            //posto imamo i delay tj kasnjenje animacije:
            let delay = $(this).attr('data-delay');
            //potom cemo da proverimo da li je pozicija od svakog elementa kroz koji prolazimo manja od windowHeight + scroll (onoliko koliko je korisnik skrolovao) i ukoliko je pozicija manja znaci da je taj element usao u vidno polje
            if (position < windowHeight + scroll - 100) { //rekli smo za 100px kad udje u vidno polje da se tek tad animira
                //u tom slucaju trebamo da kazemo $(this) i klasu koju tebamo da dodajemo je animationName
                $(this).addClass(animationName);
                //ovom elementu cemo dodati klasu, ali cemo mu dodati i css koji je .animation-delay i prima vrednost DELAY atributa koji smo mi definisali
                $(this).css('animation-delay', delay);
            }
        });
    
    }
    
    //ovu funkciju trebamo da pozovemo
    $(window).scroll(function () {
        //treba da se pozove funkcija animation 
        animation();
    });
    
    //a takodje i na documet ready trebamo da pozovemo funkciju animation
    animation();
    

//team slider

if($('.team-slider').length > 0){
    $(".team-slider").owlCarousel({
        items: 1,
        loop:true,
        autoplay: true,
        autoplayHoverPause: true

    });
}


});