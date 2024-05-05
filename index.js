

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


        var buttonInnerHTML = this.innerHTML;
       


        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);

    })


    document.addEventListener("keydown", function(event){
        makeSound(event.key)
        addAnimation(event.key);
    })

    function makeSound(key){
        switch (key) {
            case "w":
                var file = new Audio("./sounds/crash.mp3");
                file.play();
                break
            case "a":
                var file = new Audio("./sounds/kick-bass.mp3");
                file.play();
                break
            case "s":
                var file = new Audio("./sounds/snare.mp3");
                file.play();
                break
            case "d":
                var file = new Audio("./sounds/tom-1.mp3");
                file.play();
                break
            case "j":
                var file = new Audio("./sounds/tom-2.mp3");
                file.play();
                break
            case "k":
                var file = new Audio("./sounds/tom-3.mp3");
                file.play();
                break
            case "l":
                var file = new Audio("./sounds/tom-4.mp3");
                file.play();
                break
            default:
                    console.log(buttonInnerHTML);
        }
    }

    function addAnimation(event){
        var curr=document.querySelector("."+event);
        curr.classList.add("pressed");
 
        setTimeout(function(){ curr.classList.remove("pressed"),100})
 
 
     }
}