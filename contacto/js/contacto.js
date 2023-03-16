/*$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault(); // prevent the form from submitting
    
    // get the form data
    const formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val()
    };
    
    // send the form data to the server
    $.ajax({
      url: 'send-email.php', // replace with your server-side script
      method: 'POST',
      data: formData
    }).done(function(response) {
      // handle the response from the server
      console.log(response);
      alert('Your message has been sent!');
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    }).fail(function() {
      // handle any errors
      alert('An error occurred while sending your message.');
    });
  });
});*/