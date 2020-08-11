$(document).ready (function () { 



// Le Menu Burger

$('.cross').hide();
$('nav').hide();

$('.hamburger').click( function() {
    $('nav').slideDown('slow', function(){
        $('.hamburger').hide();
        $('.cross').show();
    })
})


 $('.cross').click( function(){
    $('nav').slideUp('slow', function(){
        $('.cross').hide();
        $('.hamburger').show();
    })
})


// Le slider principal (dans le header)

// essai 1

// var img = 1;
			
// function slider(){
			
// img += 1; 
				
// $('monImage').attr('src', 'style/img/'+ img +'.png');
// 	console.log( img )
				
// 	if( img == 1 ){
                
// clearInterval( timer );
// }
// }
			
// var timer = window.setInterval( 'slider()', 1000);


// essai 2

// $(function(){
//     setInterval(function(){
//        $(".slideshow ul").animate({marginLeft:-350},700,function(){
//           $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
//        })
//     }, 3500);
//  });









}); /* Fin de $(document).ready / Ne pas supprimer */