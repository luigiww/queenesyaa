$(document).ready(function(){
    let index = 0;
    let slides = $(".slider img");

    function showSlide(i){
        slides.removeClass("active");
        slides.eq(i).addClass("active");
    }

    $(".next").click(function(){
        index++;
        if(index >= slides.length) index = 0;
        showSlide(index);
    });

    $(".prev").click(function(){
        index--;
        if(index < 0) index = slides.length - 1;
        showSlide(index);
    });

    // auto slide
    setInterval(function(){
        $(".next").click();
    }, 3000);
});