// JOIN and Contact US BUTTON WORKING
const ids= ["joinBtn", "contact-btn"];
ids.forEach(id => {
    const btn = document.getElementById(id);
    if(btn){
        btn.addEventListener("click", function(){
            document.getElementById("contact").scrollIntoView({
                behaviour: "smooth"
            });

        });
    }
});

// Services Button in NAVBAR Working
document.getElementById("service-btn").addEventListener("click", function(){
    document.getElementById("services").scrollIntoView({
        behaviour:"smooth"
    });
});
// About US in NAVBAR WORKING 
document.getElementById("about-btn").addEventListener("click", function(){
    document.getElementById("about").scrollIntoView({
        behaviour: "smooth"
    });
});

// form 
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email= document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if(!name || !email || !message === ""){
        alert("Please fill all Fields...!!");
        return;
    }
    alert(`Thank You , ${name}!! We Will Contact You Soon...`);

    form.reset();
});

// services 
const buttons = document.querySelectorAll('.toggle-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', () =>{
        const  box = btn.parentElement;
        const shortText = box.querySelector('.short');
        const fullText = box.querySelector('.full');
        shortText.classList.toggle('hidden');
        fullText.classList.toggle('hidden');

        btn.textContent = btn.textContent == "Read More" ? "Read Less": "Read More"; 
    });
});