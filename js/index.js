// Toggle the navigation menu on and off
function toggleNav() {
    const nav = document.getElementById("navbar");

    if (!nav) return;

    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

  const projects = [
    {
      image: "images/band-website-preview.png",
      link: "band-demo/index.html",
      alt: "Band Website Preview"
    },
    {
      image: "images/lawn-care-website-preview.png",
      link: "lawn-care-demo/index.html",
      alt: "Lawn Care Demo Website Preview"
    },
    {
      image: "images/restaurant-website-preview.png",
      link: "restaurant-demo/index.html",
      alt: "Restaurant Demo Website Preview"
    }
  ];

  let currentIndex = 0;
  let slideInterval;

  const slideshowImage = document.getElementById("slideshow-image");
  const slideshowLink = document.getElementById("slideshow-link");
  const dots = document.querySelectorAll(".dot");

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function showSlide(index) {
    slideshowImage.classList.remove("fade-in");
    slideshowImage.classList.add("fade-out");

    setTimeout(() => {
      currentIndex = index;
      slideshowImage.src = projects[index].image;
      slideshowImage.alt = projects[index].alt;
      slideshowLink.href = projects[index].link;

      updateDots(index);

      slideshowImage.classList.remove("fade-out");
      slideshowImage.classList.add("fade-in");
    }, 450);
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % projects.length;
    showSlide(nextIndex);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.index));
      resetInterval();
    });
  });

  function startInterval() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  slideshowImage.classList.add("fade-in");
  startInterval();


const form = document.querySelector("form");
const button = document.getElementById("button");

form.addEventListener("submit", () => {
  button.innerText = "Sending...";
  button.disabled = true;
});