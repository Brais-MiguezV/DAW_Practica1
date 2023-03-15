$(document).ready(function () {
    // Seleccionar todas las imágenes con la clase "perfilSocio"
    const images = $(".perfilSocio img");

    // Función que se ejecuta cada vez que el usuario desplaza la página
    $(window).scroll(() => {
        // Calcular la cantidad de rotación basada en la posición del scroll
        const rotation = $(window).scrollTop() / $(window).height() * 360;

        // Aplicar la rotación a todas las imágenes
        images.each((i, img) => {
            $(img).css("transform", `rotate(${rotation}deg)`);
        });
    });

});