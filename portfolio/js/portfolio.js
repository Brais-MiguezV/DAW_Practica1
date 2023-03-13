const maxBlur= 10;


window.addEventListener("scroll", function () {
    let elements = document.getElementsByClassName("imagenHeader");
    let screenSize = window.innerHeight;

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        let elementTop = element.getBoundingClientRect().top;
        //Cambiar el blur de la imagen en funcion de la posicion de scroll
        let blur = (elementTop / screenSize) * maxBlur;
        element.style.filter = "blur(" + blur + "px)";
        let translate = (elementTop / screenSize) * 200;
        if(i % 2 == 0){
            //Cambiar propiedad transform
            
            element.style.transform = "translateY(" + translate + "px)";
        }else{
            
            element.style.transform = "translateY(-" + translate + "px)";
        }

        element.style.opacity = 1 - (elementTop / screenSize);


        console.log(element.getBoundingClientRect().top);

    }
})
