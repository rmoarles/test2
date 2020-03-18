var imagenes = ['img/slider_css_example1.png', 'img/slider_css_example2.PNG', 'img/slider_css_example3.PNG', 'img/slider_css_example4.PNG', 'img/slider_css_example5.PNG'];
cont = 0;

function carrousel(slider){
slider.addEventListener("click", e => {
    let back = slider.querySelector(".back"),
    front = slider.querySelector(".front"),
    img = slider.querySelector("img"),
    tgt = e.target;

    if (tgt == back){
        if(cont > 0){
            img.src = imagenes[cont - 1];
            cont--;
        } else {
            img.src = imagenes[imagenes.length - 1];
            cont = imagenes.length - 1;
        }
    } else if (tgt == front){
        if(cont > imagenes.length - 1){
            img.src = imagenes[ cont + 1];
            cont++;
        } else {
            img.src = imagenes[0];
            cont = 0;
        }
    }
});
}

document.addEventListener("DOMContentLoader", () => {
    let slider = document.querySelector(".slider");

    carrousel(slider);
});
