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
                setTimeout("location.href = '#contact_after_submit';", 250); // the user will know that their message was sent successfully and is given feedback.

            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page, this was originally in the tutorial notes.
}
