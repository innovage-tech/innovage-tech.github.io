    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#contactForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message
        const el = $(this);
        const name = el.find('input[name="name"]').val();
        const email = el.find('input[name="email"]').val();
        const phone = el.find('input[name="phone"]').val();
        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbw1r5z1VM-CKO7EUD7Rn_uWwzBUpL4Q_GgxFMQjqTycBJA5EII/exec', // form action url
                type: 'GET', // form submit method get/post
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {

                    alert.html('Thanks for your interest. We will call you soon!').fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });

        $("a").on('click', function(event) {
    
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
        
              // Store hash
              var hash = this.hash;
        
              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
           
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });
    });