

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// Active Navbar Link
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =========================
// Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
    ".card,.box,.project,.skills div"
);

window.addEventListener("scroll", reveal);

function reveal() {

    const trigger = window.innerHeight - 120;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

reveal();


// Initial Hidden State

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".6s";

});


// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#38bdf8;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

//emailjs

// =========================
// EmailJS Contact Form
// =========================
// =========================
// EmailJS Contact Form
// =========================

emailjs.init("amdIlcCl9-NhlO6xP");


const contactForm = document.getElementById("contact-form");


if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();


        const params = {

            name: document.querySelector("[name='name']").value,

            email: document.querySelector("[name='email']").value,

            time: new Date().toLocaleString(),

            message: document.querySelector("[name='message']").value

        };


        emailjs.send(

            "lokesh_portfolio",

            "template_vb2u19j",

            params

        )

        .then(function(){

            alert("Message sent successfully!");

            contactForm.reset();

        })


        .catch(function(error){

            alert("Failed to send message.");

            console.log(error);

        });


    });

}

