document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact-form");
    const confirmation = document.querySelector("#confirmation");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get values
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#tel").value.trim();
        const model = document.querySelector("#model").value.trim();
        const message = document.querySelector("#messages").value.trim();

        // Validation
        if (!name || !email || !phone || !model || !message) {
            confirmation.textContent = "Please fill in all fields.";
            confirmation.classList.remove("success");
            confirmation.classList.add("error");
            return;
        }

        // Store in localStorage
        const formData = {
            name,
            email,
            phone,
            model,
            message,
            date: new Date().toLocaleString()
        };

        localStorage.setItem("contactFormData", JSON.stringify(formData));

        // Confirmation output
        confirmation.innerHTML = `
            <h3>Thank you, ${name}!</h3>
            <p>Your message about your <strong>${model}</strong> has been received.</p>
            <p>I will respond to <strong>${email}</strong> as soon as possible.</p>
        `;

        confirmation.classList.remove("error");
        confirmation.classList.add("success");

        form.reset();
    });
});
