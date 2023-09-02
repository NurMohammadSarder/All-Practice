
$(document).ready(function(){

    $(".btn-1").click(function(){
        $(".box-1").fadeIn();
    });

    $(".btn-2").click(function(){
        $(".box-1").fadeOut();
    });

    $(".btn-3").click(function(){
        $(".box-1").fadeToggle();
    });
    // fade 


    // slide 
    $(".btn-4").click(function(){
        $(".box-2").slideDown();
    });
    $(".btn-5").click(function(){
        $(".box-2").slideUp();
    });
    $(".btn-6").click(function(){
        $(".box-2").slideToggle();
    });



    // Class 
    $(".btn-7").click(function(){
        $(".box-3").addClass("gol");
    });

    $(".btn-8").click(function(){
        $(".box-3").removeClass("gol");
    });
    $(".btn-9").click(function(){
        $(".box-3").toggleClass("gol");
    });
});
