function sendMail(contactForm) {
    emailjs.send("gmail", "debra_hayden_counselling_webpage", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
        console.log('SUCCESS!', response);
     }, 
     function(error) {
        console.log('FAILED...', error);
     });
}