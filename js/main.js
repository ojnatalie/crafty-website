var $nav = $(".c-nav__list");
var $navbar = $(".c-navbar");
var $navbarInner = $(".c-navbar__inner");
var $navbarListLi = $(".c-nav__list li");

$('.c-hamburger__svg').on('click', function () {
    $nav.toggleClass('js-nav');
    $navbar.toggleClass('js-navbar');    
    $nav.toggleClass('js-navlist');
    $navbarInner.toggleClass('js-navbar');
    $navbarListLi.toggleClass('js-nav__list-li');
});

var $crcOne = $(".circle--one");
var $crcTwo = $(".circle--two");
var $crcThree = $(".circle--three");


$crcOne.on('click', function () {
	$(this).css("color","#bebebe");
    $('.c-testimonials--two').hide();    
    $('.c-testimonials--three').hide();
    $('.c-testimonials--one').show( "drop", 1000 );    
});

$crcTwo.on('click', function () {
	$(this).css("color","#bebebe");
    $('.c-testimonials--one').hide();  
    $('.c-testimonials--three').hide();
    $('.c-testimonials--two').show( "drop", 1000 );    
});

$crcThree.on('click', function () {
	$(this).css("color","#bebebe");
    $('.c-testimonials--one').hide();    
    $('.c-testimonials--two').hide();    
    $('.c-testimonials--three').show( "drop", 1000 ); 
});
