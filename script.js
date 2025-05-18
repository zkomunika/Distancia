const navLinks = document.querySelectorAll (".nav-menu .nav-link");
const menuOpenButton = document.querySelector ("#menu-open-button");
const menuCloseButton = document.querySelector ("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibilty
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click())

// Close menu when the nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
})

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//Responsive Breakpoints
  breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
  }
});

// Calculator Script
function calculateDistance() {
    const heightCm = parseFloat(document.getElementById("height").value);
    const widthCm = parseFloat(document.getElementById("width").value);
    const mode = parseFloat(document.getElementById("mode").value);

    // Konversi tinggi dan lebar dari cm ke m
    const heightM = heightCm / 100; // Konversi tinggi dari cm ke m
    const widthM = widthCm / 100; // Konversi lebar dari cm ke m

    // Hitung luas papan tulis dalam m^2
    const area = heightM * widthM;

    // Hitung jarak ideal dalam m
    const idealDistance = mode * Math.sqrt(area);

        // Tampilkan hasil dalam m
    document.getElementById("result").innerHTML = `
        Jarak Ideal : ${idealDistance.toFixed(2)} m<br>
    `;
}
