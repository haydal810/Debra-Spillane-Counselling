function sendMail(contact) {
    emailjs.send("gmail", "debra_hayden_counselling_webpage", {
        "message": contact.message.value,
        "from_name": contact.name.value,
        "from_email": contact.emailaddress.value,
        "from_phone_number": contact.phone.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                setTimeout("location.href = '#contact_after_submit_successfully';", 10); // the user will know that their message was sent successfully and is given feedback.
                document.getElementById("client_form").reset() // the form is reset after submit button is hit
            },
            function (error) {
                console.log("FAILED", error);
                setTimeout("location.href = '#contact_after_submit_error';", 10);
                alert("Error");
            }
        );
    return false; // To block from loading a new page...
}
