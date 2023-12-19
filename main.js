

function setup(){

    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    updateCanvas();
}

var array_1=["pen","paper","book","bottle"];
var random_number= Math.floor((Math.random()*array_1.length)+1);
var quick_draw_data_set  = array_1[random_number];





var timer_counter = 0;

var timer_check="";

var drawn_sketch="";

var answer_holder="";

var score=0;


function draw(){
    check_sketch();
if(drawn_sketch==quick_draw_data_set){

    answer_holder="set"; 
    score++ 
    document.getElementById("score").innerHTML="score: "+score;
}
function check_sketch(){
    if(drawn_sketch=="sketch_drawn"){

        timer_counter++
        document.getElementById("timer").innerHTML="Timer:"+timer_counter;
        console.log(timer_counter);
    if(timer_counter>900){
         timer_counter=0;
         timer_check="completed";
         if(timer_check=="completed" || answer_holder=="set"){

            timer_check= "";
            answer_holder= "";
            updateCanvas();
         }
    }
    }
}

}
function updateCanvas(){
    background("white");

    document.getElementById("sketch_drawn").innerHTML="Sketch to be Drawn : "+quick_draw_data_set;
    console.log( quick_draw_data_set);
    
}


