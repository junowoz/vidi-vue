function button(){
    document.getElementById("button").addEventListener("click", function () {
        document.querySelector(".popup").style.display = "flex";
    });

    document.querySelector(".close").addEventListener("click", function () {
        document.querySelector(".popup").style.display = "none";
    });


    document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        document.querySelector(".popup").style.display = "none";
	    }
    });

}