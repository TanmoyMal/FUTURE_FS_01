// Initialize Typed.js for typing effect

var typed = new Typed('#element', {
    strings: ['Coder', 'Full-Stack Developer', 'Python Developer'],
    typeSpeed: 60,
    loop: true
});



// Function to toggle the navigation menu

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}



// Function to scroll to the top of the page

function scrollToTop() {
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
}


// script.js (file ke end me)

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("entry.2005620554", form.name.value);
        formData.append("entry.1045781291", form.email.value);
        formData.append("entry.839337160", form.message.value);

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSfopzwvnYPgRa6qyZZEphgjIxMKlV_q0JTPftVhZNgQBkib7w/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formData,
        })
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((err) => {
                console.error("Form submit error:", err);
                alert("Something went wrong!");
            });
    });
});


