//canvas:
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function drawing(){
    //grønt gress
    ctx.beginPath();
    ctx.rect(0, 440, 500, 100);
    ctx.fillStyle="green";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(200, 70, 100, 100);  //hode
    ctx.rect(150, 180, 200, 200); //overkropp
    ctx.rect(360, 250, 60, 50); //arm venstre
    ctx.rect(75, 250, 60, 50); //arm høyre
    ctx.rect(150, 390, 80, 50); //fot høyre
    ctx.rect(269, 390, 80, 50); //fot høyre
    ctx.fillStyle="grey";
    ctx.fill();


    //øyne, munn 
    ctx.beginPath();
    ctx.arc(225, 95, 10, 0, 2 * Math.PI); //venstre øye
    ctx.arc(275, 95, 10, 0, 2 * Math.PI); //høyre øye
    ctx.rect(220, 130, 60, 15); //munn
    ctx.fillStyle="black";
    ctx.fill();



    //halvsirkel overkropp 
    ctx.beginPath();
    ctx.arc(250, 250, 80, 0, 1 * Math.PI);
    ctx.fillStyle="lightgreen";
    ctx.stroke;
    ctx.fill();

}

drawing();


$(document).ready(function() {
    $("#canvas").mouseover(function() {
        ctx.clearRect(360, 250, 60, 50); //fjerner armer
        ctx.clearRect(75, 250, 60, 50); //fjerner armer
        ctx.clearRect(220, 130, 60, 15); //fjerner munn
    
        ctx.beginPath();
        ctx.rect(360, 160, 60, 80); //tegner armer med nye koordinater, venstre arm
        ctx.rect(75, 160, 60, 80); //tegner armer med nye koordinater, høyre arm
        ctx.fillStyle="grey";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.arc(250, 125, 35, 0, 1 * Math.PI);
        ctx.fill();
    });
    

    $("#canvas").click(function() {
        const gra = new Path2D();
        gra.rect(0, 400, 500, 100);
        ctx.fillStyle="lightblue";
        ctx.fill(gra);  
    });
    

    $("#canvas").mouseleave(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         //grønt gress
        ctx.beginPath();
        ctx.rect(0, 440, 500, 100);
        ctx.fillStyle="green";
        ctx.fill();

        ctx.beginPath();
        ctx.rect(200, 70, 100, 100);  //hode
        ctx.rect(150, 180, 200, 200); //overkropp
        ctx.rect(360, 250, 60, 50); //arm venstre
        ctx.rect(75, 250, 60, 50); //arm høyre
        ctx.rect(150, 390, 80, 50); //fot høyre
        ctx.rect(269, 390, 80, 50); //fot høyre
        ctx.fillStyle="grey";
        ctx.fill();


        //øyne, munn 
        ctx.beginPath();
        ctx.arc(225, 95, 10, 0, 2 * Math.PI); //venstre øye
        ctx.arc(275, 95, 10, 0, 2 * Math.PI); //høyre øye
        ctx.rect(220, 130, 60, 15); //munn
        ctx.fillStyle="black";
        ctx.fill();

        //halvsirkel overkropp 
        ctx.beginPath();
        ctx.arc(250, 250, 80, 0, 1 * Math.PI);
        ctx.fillStyle="lightgreen";
        ctx.stroke;
        ctx.fill();
        });
});
 
