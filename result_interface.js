
    var result = window.localStorage.getItem('result');
    var number = window.localStorage.getItem('number');

    console.log(result);
    document.getElementById("text").innerHTML = result ;
    document.getElementById("container").innerHTML="<img src=./Image_projet/dice"+number+".jpg height=300px>";

    function redirect2(){
        location.replace("http://127.0.0.1:5500/paire_project.html");
    }



