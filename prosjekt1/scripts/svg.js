// j Query kode for interaktivitet på svg 
$(document).ready(function() {
        $("svg").mouseover(function() {
            $("#greenbtn").attr("fill", "lime").attr("r", "2px").css("transition-duration", "1s");
            $("#redbtn").attr("fill", "red").attr("r", "2px").css("transition-duration", "1s");
            $(".mouth").attr("d", "M 43 28 q 7 10 14 0").css("transition-duration", ".5s");
            $(".arm").attr("y", "30").css("transition-duration", "0.5s");
         });

         //når man trykker på svg
         $("svg").click(function(){
           if($("#head").attr("y")=="10"){
              $(".head").attr("y", "5").css("transition-duration", "1s");
              $(".eyes").attr("cy", "10").css("transition-duration", "1s");
              $(".mouth").attr("d", "M 43 20 q 7 10 14 0");
              $(".upperbody").attr("y", "35").css("transition-duration", "1s");
              $(".btn").attr("cy","40").css("transition-duration", "1s");
              $(".foot").attr("y", "82").css("transition-duration", "1s");
              $("polygon").attr("points", "50,70 30,50 70,50").css("transition-duration", "100");
              $(".text").attr("x", "70");
              $(".arm").attr("y", "50%");
              $(".gras").attr("y", "96").css("transition-duration", "1s");
           }
           else{
            $(".mouth").attr("d", "M 43 28 q 7 10 14 0");
            $(".arm").attr("y", "30").css("transition-duration", "0.5s");
            $(".text").attr("x", "110");
            $(".head").attr("y", "10");
            $(".eyes").attr("cy", "20");
            $(".upperbody").attr("y", "42");
            $(".btn").attr("cy","50");
            $(".foot").attr("y", "89");
            $("polygon").attr("points", "50,45 30,80 70,80").css("display", "inline");
            $(".gras").attr("y", "82.2").css("transition-duration", "1s");
           }
           
        });

         $("svg").mouseleave(function() {
            $("#greenbtn").attr("fill", "green").attr("r", "1.5px");
            $("#redbtn").attr("fill", "darkred").attr("r", "1.5px");
            $(".mouth").attr("d", "M 43 30 q 6 0 13 0");
            $(".arm").attr("y", "50%");
            $(".text").attr("x", "110");
            $(".head").attr("y", "10");
            $(".eyes").attr("cy", "20");
            $(".upperbody").attr("y", "42");
            $(".btn").attr("cy","50");
            $(".foot").attr("y", "89");
            $("polygon").attr("points", "50,45 30,80 70,80");
            $(".gras").attr("y", "82.2").css("transition-duration", "1s");
         });
      
  });

