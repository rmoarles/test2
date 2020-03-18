function apareceScroll(){
    var html = document.getElementsByTagName("html")[0];
    var elementoAparece = document.getElementById("show");

    document.addEventListener("wheel", function(){

        var topVent = html.scrollTop;
        for ( i=0; i < elementoAparece.length; i++){

            var topelemAparece = elementoAparece[i].offsetTop;
            if (topVent>topelemAparece - 400){
                elementoAparece[i].style.opacity = 1;

            }
        }
    })
}

apareceScroll();