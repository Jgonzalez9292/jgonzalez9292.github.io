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

//on image click, runs this function that opens a website
function imgWindow() {
    window.open("http://vowelsband.fun") }


//Takes in the current hour to give the user a proper greeting
const currentHour = new Date().getHours();
let timeOfDay;

if(currentHour >= 0 && currentHour <12){
    timeOfDay = "morning"
}
if(currentHour >= 12 && currentHour < 17){
    timeOfDay = "afternoon"
}
else{
    timeOfDay = "evening"
}
document.getElementById("timeOfDay").textContent = timeOfDay;

let currentIndex = 0;

            function showSlide(index) {
                const slides = document.getElementById('slides');
                const totalSlides = slides.children.length;
                if (index >= totalSlides) {
                    currentIndex = 0;
                } else if (index < 0) {
                    currentIndex = totalSlides - 1;
                } else {
                    currentIndex = index;
                }
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            function nextSlide() {
                showSlide(currentIndex + 1);
            }

            function prevSlide() {
                showSlide(currentIndex - 1);
            }

            // Auto slide every 5 seconds
            setInterval(nextSlide, 5000);
