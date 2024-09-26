//used to toggle the navigation bar off and on
function toggleNav() {
    var nav = document.getElementById("navbar");
    var navButton = document.getElementById("navButton")
    if (nav.style.display === "none") {
        navButton.style.display = "none";
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}


//Takes in the current hour to give the user a proper greeting
const currentHour = new Date().getHours();
let timeOfDay;

if(currentHour >= 0 && currentHour <12){
    timeOfDay = "morning"
}
if(currentHour >= 12 && currentHour < 17){
    timeOfDay = 'afternoon'
}
else{
    timeOfDay = 'evening'
}
document.getElementById("timeOfDay").textContent = timeOfDay;


//checks if form is completed
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
