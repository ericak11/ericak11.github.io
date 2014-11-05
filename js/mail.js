

// $(document).ready(function(){
//   var $form = $('#contact-form');
//   $form.submit(function(event) {
//     // Stop the browser from submitting the form.
//     event.preventDefault();
//     var formData = $form.serialize();
//     $.ajax({
//       type: 'POST',
//       url: $form.attr('action'),
//       data: formData,
//       dataType: 'JSON'
//     }).done(function(response) {
//       // Make sure that the formMessages div has the 'success' class.
//       $(formMessages).removeClass('error');
//       $(formMessages).addClass('success');

//       // Set the message text.
//       $(formMessages).text(response);

//       // Clear the form.
//       $('#name').val('');
//       $('#email').val('');
//       $('#message').val('');
//     }).fail(function(data) {
//     // Make sure that the formMessages div has the 'error' class
//       // Set the message text.
//       if (data.responseText !== '') {
//         console.log(data.responseText);
//       } else {
//         console.log('Oops! An error occured and your message could not be sent.');
//       }
//     });
//   });
// });


