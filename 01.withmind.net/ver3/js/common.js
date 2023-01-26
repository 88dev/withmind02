function fnNav() {
    const nav = document.getElementById("nav");
    const gnb = document.getElementById("gnb");
    if (nav.checked == true){
        gnb.style.display = "block";
        $('header').css('background', '#FFFFFF');
        $('header ul li').css('color', '#333333');
        $( 'body' ).css("overflow-y", "hidden");
        $('header').css('transition', '0s');
    } else {
        gnb.style.display = "none";
        $('header').css('background', 'none');
        $('header ul li').css('color', '#FFFFFF');
        $( 'body' ).css("overflow-y", "auto");
        $('header').css('transition', '0s');
    }
}

$( window ).resize( function() {
    console.log("resize");

    $('header').css('background', 'none');
    $('#nav').prop('checked', false);
    $('#gnb').css("display", "none");

    if($(window).width() > 1024) { 	
        $('#gnb').css("display", "flex");
    } 
});

// scroll
// const spaceHolder = document.querySelector('.space-holder');
// const horizontal = document.querySelector('.horizontal');
// spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

// function calcDynamicHeight(ref) {
//     const vw = window.innerWidth;
//     const vh = window.innerHeight;
//     const objectWidth = ref.scrollWidth;
//     return objectWidth - vw + vh + 20;
// }
// window.addEventListener('scroll', () => {
//     const sticky = document.querySelector('.sticky');
//     horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
// });
// window.addEventListener('resize', () => {
//     spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
// });

// menu
$(document).ready(function() {
    $('#gnb li').click(function(){
        $( 'body' ).css("overflow-y", "auto");
        $('#nav').prop('checked', false);
        $('#gnb').css("display", "none");
        if($(window).width() > 1024) { 	
            $('#gnb').css("display", "flex");
        } 
    });
    $('.btn_company').click(function(){
        var offset = $('#company').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_technology').click(function(){
        var offset = $('#technology').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_service').click(function(){
        var offset = $('#service').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_news').click(function(){
        var offset = $('#news').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_contact').click(function(){
        var offset = $('#contact').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });

    

});