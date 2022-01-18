$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});


$( "#dialog" ).dialog({
    autoOpen: false,
    show: {
        effect: "blind",
        duration: 1000
    },
    hide: {
        effect: "explode",
        duration: 1000
    },
    height: 495,
    width: 648,
    modal: true,
    draggable: false,
    resizable: false
});
$( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
});

