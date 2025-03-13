// ====================
// Menu Toggle: Mengubah tampilan menu dan header
// ====================
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
  menu.classList.toggle('fa-times'); // Menambahkan atau menghapus kelas 'fa-times' untuk ikon menu
  header.classList.toggle('active'); // Menambahkan atau menghapus kelas 'active' pada header
};

// ====================
// Scroll to Top Button: Menampilkan tombol "scroll to top" saat halaman digulir lebih dari 1000px
// ====================
let scrollTop = document.querySelector('.gotop');
window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('gotop-active', window.scrollY >= 1000); // Aktifkan tombol jika scrollY >= 1000
});

// ====================
// Section Highlight: Menyorot tautan menu yang sesuai dengan bagian halaman yang sedang aktif
// ====================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll', () => {
  let current = ''; // Menyimpan ID section yang sedang aktif

  // Periksa setiap section untuk menentukan posisi scroll
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Menyesuaikan jarak dengan tinggi header
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id'); // Ambil ID section yang aktif
    }
  });

  // Sorot tautan menu yang sesuai dengan section aktif
  navLinks.forEach((link) => {
    link.classList.remove('active'); // Hapus kelas 'active' dari semua tautan
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active'); // Tambahkan kelas 'active' ke tautan yang sesuai
    }
  });
});


// auto slider

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const submittedData = document.getElementById('submittedData');
    submittedData.innerHTML = `<h2>Submitted Data:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Number:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>`;

    document.querySelector('.thankyou_message').style.display = 'block';
    document.getElementById('contactForm').reset();
  });