var slideIndex = 0;
var result;
var number;

function play() {
    var theGuess = document.getElementById("numero").value;
    var NtheGuess = parseInt(theGuess);
    var rndInt = Math.floor(Math.random() * 6) + 1;
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (Number.isInteger(NtheGuess) && (0 < NtheGuess) && ((NtheGuess < 6) || (NtheGuess == 6))) {
        if (NtheGuess == rndInt) {
            console.log('You guessed the right dice!');
            result = 'You guessed the right dice!';
            number = rndInt;
            window.localStorage.setItem('result', result);
            window.localStorage.setItem('number', number);
            redirect();
            
        }
        else {
            console.log("Nope! The right dice is: " + rndInt);
            result = "Nope! The right dice is: ";
            number = rndInt;
            window.localStorage.setItem('result', result);
            window.localStorage.setItem('number', number);
            
            redirect();
            
        }
    }
    else if ((0 > NtheGuess) || (NtheGuess > 6)) {
        console.log('Out of bounds! Please try a number between 1 and 6.');
        result = 'Out of bounds! Please try a number between 1 and 6.';
        number = rndInt;
        window.localStorage.setItem('number', number);
    alert("Out of bounds! Please peak a number between 1 and 6");
    }
}

showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function redirect() {
    location.replace("http://127.0.0.1:5500/result_interface.html");
}


