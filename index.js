let gamePattern=[];
userClickedPattern=[];
gameOver=true;
let level=0;
$(document).keydown(()=>
{  
    if(gameOver)
    {
        $("h1").text("Level " + level);
        nextSequence();
        
        gameOver=false;
    }
});
function nextSequence()
{
    userClickedPattern=[];
    let nextButton= $(".btn")[Math.floor(Math.random()*4)];
    gamePattern.push(nextButton.classList[1]);
    nextButton.classList.add("pressed");
            
                setTimeout(function(){
                    nextButton.classList.remove("pressed");
                },100);
                level++;
                $("h1").text("Level " + level);
}
$(".btn").click(function (e) { 
    
    let userChosenColor=e.target.classList[1];
    userClickedPattern.push(userChosenColor);
    let media= new Audio("sounds/" + e.target.classList[1] + ".mp3");
    media.play();
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamePattern);
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
    {
        console.log("success");
        if(userClickedPattern.length==gamePattern.length )
        {
            setTimeout(()=>{
                nextSequence();
            },1000);
        }
    }
    else
    {
        console.log("fail");
        media=new Audio("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(()=>{
        $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over!, Press Any Key to Restart");
        replay();
    }
    
}
function replay()
{
    level=0;
    gamePattern=[];
    gameOver=true;
}


