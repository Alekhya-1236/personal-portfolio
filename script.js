
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const output = document.getElementById("form-message");

    if (!isValidContact(name, email, message)) {

        output.textContent = "Please enter valid details.";
        output.style.color = "red";

        return;
    }

    output.textContent = "Form submitted successfully!";
    output.style.color = "green";

    form.reset();

});
