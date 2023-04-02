$("#darh").click(function(){
    $("#route").slideToggle(500)
});
$("#valuo").click(function(){
    $("#route").slideUp(500 , function(){
        $("#rout").slideToggle(500 )  
    })
});
$("#nalo").click(function(){
   $("#rout").slideUp(500,function(){
    $("#roue").slideToggle(500)
   })
});
$("#dek").click(function(){
   $("#roue").slideUp(500,function(){
    $("#rote").slideToggle(500)
   })
});



$("#didebar span").click(function(){
    let sitbar= $("#didebar").innerWidth();
if($("#didebar").css('left')=="0px")
{
    $("#didebar").animate({left: -sitbar} ,500);
}
else{
    $("#didebar").animate({left:'0px'} ,500)
}
   
})


$("#didebar i").click(function(){
    let sitbar= $("#didebar").innerWidth();
if($("#didebar").css('left') =="0px")
{
    $("#didebar").animate({left: - sitbar} ,500);
}
else{
    $("#didebar").animate({left:'0px'} ,500)
}
   
})






function countdown() {
    let now = new Date();
    let eventDate = new Date(2021, 17, 12);

    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTiime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" - h : h;
    m = (m < 10) ? "0" - m : m;
    s = (s < 10) ? "0" - s : s;

    document.getElementById("days").innerHTML = "<h4>" + d + " D" + "</h4>";
    document.getElementById("days").innerHTML = "<h4>" + d + " D" + "</h4>";

    document.getElementById("hours").innerHTML = "<h4>" + h + " h" + "</h4>";
    document.getElementById("minutes").innerHTML = "<h4>" + m + " m" + "</h4>";
    document.getElementById("seconds").innerHTML = "<h4>" + s + " s" + "</h4>";

    setTimeout(countdown, 1000);
}

countdown();
$("a").click(function () {
    let sectionId = $(this).attr("href");

    if ($(sectionId).offset()) {
        let escerol = $(sectionId).offset().top;

        $("html , body").animate({
            scrollTop: escerol
        }, 500);
    }

})

$(document).ready(function () {
    $(".lds-ripple").fadeOut(1000, function () {
        $("#lodeing").fadeOut(1000, function(){
            $("body").css('overflow','auto')

        });

        
    })
    
})


$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#char").text("Writing is not allowed");
        } else {
            $("#char").text(character);
        }
    });
});
$(function () {
    var max = 20;
    $("input").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#char").text("Writing is not allowed");
        } else {
            $("#char").text(character);
        }
    });
});


  function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);






