$(document).ready(function () {
  const form = document.querySelector('form');
  const button = form.querySelector('button');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevenir que el formulario se envíe automáticamente

    const nombre = form.querySelector('input[name="nombre"]').value;
    const apellidos = form.querySelector('input[name="apellidos"]').value;
    const correo = form.querySelector('input[name="correo"]').value;
    const telefono = form.querySelector('input[name="telefono"]').value;
    const asunto = form.querySelector('input[name="asunto"]').value;
    const mensaje = form.querySelector('textarea[name="mensaje"]').value;
    /*
        Email.send({
          SecureToken : "cfc8776e-e565-4b0a-9f5c-1d9baa2addb5",
          Username: nombre + "\t" + apellidos,
          To: 'lety.mtnez02@gmail.com',
          From: correo,
          Subject: asunto,
          Body: mensaje + '\n\n Información contacto: ' + telefono,
        }).then(
          message => alert(message)
        );*/

    // Configuración de smtpJS
    Email.send({
      SecureToken: 'cfc8776e-e565-4b0a-9f5c-1d9baa2addb5',
      To: correo,
      From: 'lety.mtnez02@gmail.com',
      Subject: asunto,
      Body: mensaje + '\n\n Información contacto\n' + nombre + ' ' + apellidos + ' ' + telefono,
    }).then((message) => {
      console.log('Mensaje enviado:', message);
      // aquí puedes agregar el código para mostrar un mensaje de confirmación al usuario
    }).catch((error) => {
      console.error('Error al enviar el mensaje:', error);
      // aquí puedes agregar el código para mostrar un mensaje de error al usuario
    });
  });

  button.addEventListener('click', () => {
    form.submit();
  });


});
