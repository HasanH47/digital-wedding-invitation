// Initialize AOS with custom settings
AOS.init({
  duration: 1200,
  once: true,
  mirror: false,
  offset: 120,
});

// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  retina_detect: true,
});

// Initialize Vanilla Tilt
VanillaTilt.init(
  document.querySelectorAll(".person, .event-card, .gift-card"),
  {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  }
);

// Countdown Timer with smooth animation
const weddingDate = new Date("2026-08-18T08:00:00").getTime();
let animationInProgress = false;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Langsung perbarui elemen tanpa animasi
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth Scroll with easing
function scrollToContent() {
  const target = document.getElementById("love-story");
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Enhanced Music Player
const audio = document.getElementById("background-music");
const musicButton = document.getElementById("toggle-music");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    musicButton.innerHTML = '<span class="music-icon">🔇</span>';
    musicButton.style.transform = "scale(0.95)";
  } else {
    audio.play();
    musicButton.innerHTML = '<span class="music-icon">🎵</span>';
    musicButton.style.transform = "scale(1)";
  }
  isPlaying = !isPlaying;
}

// Auto play music when page loads with user interaction
window.addEventListener(
  "click",
  () => {
    if (!isPlaying) {
      audio
        .play()
        .then(() => {
          isPlaying = true;
          musicButton.innerHTML = '<span class="music-icon">🎵</span>';
        })
        .catch(() => {
          isPlaying = false;
          musicButton.innerHTML = '<span class="music-icon">🔇</span>';
        });
    }
  },
  { once: true }
);

// Enhanced Copy functions with SweetAlert2
function copyAddress() {
  const address =
    "Jl. Mayjen Bambang Soegeng No.1, Kedungdowo, Mertoyudan, Kec. Mertoyudan, Kabupaten Magelang, Jawa Tengah 56172";
  navigator.clipboard
    .writeText(address)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Alamat telah disalin ke clipboard",
        showConfirmButton: false,
        timer: 1500,
        background: "#fff9f5",
        iconColor: "#c7a74d",
      });
    })
    .catch((err) => console.error("Gagal menyalin alamat:", err));
}

function copyRekening() {
  const rekening = "1234567890";
  navigator.clipboard
    .writeText(rekening)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Nomor rekening telah disalin ke clipboard",
        showConfirmButton: false,
        timer: 1500,
        background: "#fff9f5",
        iconColor: "#c7a74d",
      });
    })
    .catch((err) => console.error("Gagal menyalin nomor rekening:", err));
}

function copyAlamatHadiah() {
  const alamat = "Jl. Aloon-Aloon Barat No.2, Cacaban, Kec. Magelang Tengah, Kota Magelang, Jawa Tengah 56121";
  navigator.clipboard
    .writeText(alamat)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Alamat hadiah telah disalin ke clipboard",
        showConfirmButton: false,
        timer: 1500,
        background: "#fff9f5",
        iconColor: "#c7a74d",
      });
    })
    .catch((err) => console.error("Gagal menyalin alamat hadiah:", err));
}

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  parallax.style.backgroundPositionY = -(scrolled * 0.5) + "px";
});

// Intersection Observer for revealing elements
const revealElements = document.querySelectorAll(".section");

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px",
};

const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(50px)";
  element.style.transition = "all 1s ease-out";
  revealObserver.observe(element);
});

// Enhanced Wishes System
const wishes = [];

function submitWish(event) {
  event.preventDefault();
  const form = event.target;
  const message = form.message.value;
  const name = form.name.value;
  const date = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const wish = {
    message,
    name,
    date,
  };

  wishes.unshift(wish);
  updateWishesList();
  form.reset();

  // Show success message
  Swal.fire({
    icon: "success",
    title: "Terima Kasih!",
    text: "Ucapan dan doa Anda telah terkirim",
    showConfirmButton: false,
    timer: 1500,
    background: "#fff9f5",
    iconColor: "#c7a74d",
  });
}

function updateWishesList() {
  const wishesList = document.querySelector(".wishes-list");
  wishesList.innerHTML = wishes
    .map(
      (wish) => `
        <div class="wish-card" data-aos="fade-up">
            <p>${wish.message}</p>
            <div class="wish-meta">
                <span class="wish-author">${wish.name}</span>
                <span class="wish-date">${wish.date}</span>
            </div>
        </div>
    `
    )
    .join("");
}

// Enhanced Gallery System
const galleryImages = [
  "https://picsum.photos/800/1200?random=1",
  "https://picsum.photos/800/1200?random=2",
  "https://picsum.photos/800/1200?random=3",
  "https://picsum.photos/800/1200?random=4",
];

let currentImageIndex = 0;

function openGallery(index) {
  currentImageIndex = index;
  const modal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = galleryImages[index];
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  const modal = document.getElementById("galleryModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function changeImage(direction) {
  currentImageIndex =
    (currentImageIndex + direction + galleryImages.length) %
    galleryImages.length;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = galleryImages[currentImageIndex];
}

// Close gallery modal when clicking outside the image
document.getElementById("galleryModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeGallery();
  }
});

// Keyboard navigation for gallery
document.addEventListener("keydown", function (e) {
  if (!document.getElementById("galleryModal").classList.contains("active"))
    return;

  switch (e.key) {
    case "ArrowLeft":
      changeImage(-1);
      break;
    case "ArrowRight":
      changeImage(1);
      break;
    case "Escape":
      closeGallery();
      break;
  }
});
