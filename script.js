document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");
    const buttons = document.querySelectorAll(".btn");
  
    // Animasi awal saat halaman dimuat
    setTimeout(() => heroText.classList.add("show"), 300);
    setTimeout(() => heroImage.classList.add("show"), 600);
  
    // Efek mengambang pada tombol
    buttons.forEach((btn, index) => {
      btn.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
  
    // Smooth scroll saat klik menu navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Intersection Observer untuk animasi saat scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1,
    });
  
    // Tambahkan observer ke semua elemen dengan kelas .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  });  