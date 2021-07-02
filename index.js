//Adding eventListener to all the drum buttons
for(var i=0; i<7; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', (e)=>{
        var drumId = e.target;
        drumId = drumId.innerHTML;
        makesound(drumId);
        buttonAnimation(drumId);
});
}


//KeyEvent Detector
document.addEventListener("keypress", (event)=>{
    var keyValue = event.key;
    makesound(keyValue);
    buttonAnimation(keyValue);
    });


//Makesound Function
function makesound(key){
    var audio = new Audio('sounds/'+key+'.mp3');
    audio.play();
}


//Adding animation to pressed button
function buttonAnimation(pressedKey){
    var activeBtn = document.querySelector('.'+pressedKey);
    activeBtn.classList.add('pressed');

    setTimeout(function(){
        activeBtn.classList.remove('pressed');
    }, 100);
}

// //callback function
// function addAnotherEventListener(keypress, callback){

//     //creating object
//     var eventThatHappened={
//         key: "p",
//         Duration: 2,
//         eventType: 'keypress',
//     }

//     //checking for eventType
//     if(keypress === eventThatHappened.eventType){
//         callback(eventThatHappened);
//     }
// }



