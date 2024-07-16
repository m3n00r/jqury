

$(".openNav").click(function(){
   $("#leftMenu").animate({ width:'250px'},50)
  $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
   $("#leftMenu").animate({ width:'0px'},50)
  $("#home-content").animate({marginLeft :'0px'},50)
})

$("#leftMenu a").click(function(){
   
   var sectionId= $(this).attr("href");
   
   var positionOfSection = $(sectionId).offset().top;
   
   $("html , body").animate({scrollTop:positionOfSection},2000);
   
})



$('#sliderDown .toggle').click(function(){
   $('.inner').not($(this).next()).slideUp(500);
   $(this).next().slideToggle(500);
});


