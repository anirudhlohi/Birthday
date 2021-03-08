var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

rover_x = 10
rover_y = 10

ground_image = "ground.jpg";
ball_image = "football.jpg";

ball_width = 100
ball_height = 80

function load(){
    console.log("hi")
    background_IMGtag = new Image()
    background_IMGtag.onload = background;
    background_IMGtag.src = ground_image;

    ball_IMGtag = new Image()
   ball_IMGtag.onload = rover;
    ball_IMGtag.src = ball_image;
}

function background(){
    ctx.drawImage(background_IMGtag , 0 , 0 , canvas.width , canvas.height)
}

function rover(){
    ctx.drawImage(ball_IMGtag , rover_x , rover_y , ball_width , ball_height)
}






function up(){
    if (rover_y > 0){
        rover_y = rover_y - 10    
        background();
        rover();
    }
    if (rover_x >= 700){
        document.getElementById("blank").style.visibility = "visible"
    }

}
function down(){
    if (rover_y < (600 - 80)){
        rover_y = rover_y + 10;
        background();
        rover();
        
    }
    if (rover_x >= 700){
        document.getElementById("blank").style.visibility = "visible"
    }
}
function right(){
    if (rover_x < (800 - 100)){
       rover_x = rover_x + 10;
       background();
       rover();
    }
    if (rover_x >= 700){
        document.getElementById("blank").style.visibility = "visible"
    }
}

function left(){
    if (rover_x > 0){
        rover_x = rover_x - 10;
        background();
        rover();
    }
    if (rover_x >= 700){
        document.getElementById("blank").style.visibility = "visible"
    }
}
function next(){
    window.location = "wish.html"
}