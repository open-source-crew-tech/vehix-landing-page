// FAQ Accordion
document.querySelectorAll('.contenedor').forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('activa');
    // Cierra los demás
    document.querySelectorAll('.contenedor').forEach((other) => {
      if (other !== this) {
        other.classList.remove('activa');
      }
    });
  });
});



function toggleMenu() {
  document.getElementById('sideMenu').classList.toggle('active');
}



/*SUSCRIPTION*/
let currentSlide = 0;
const wrapper = document.getElementById("main-wrapper");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function changeSlide(dir) {
  const totalSlides = wrapper.children.length;
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

document.addEventListener("DOMContentLoaded", updateSlider);

/*ACORDEON*/
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const icon = button.querySelector('.icon-toggle');
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('open');
        const otherIcon = item.querySelector('.icon-toggle');
        if (otherIcon) {
          otherIcon.src = 'assets/imgs/expand_more.png';
        }
      }
    });

    const isOpen = faqItem.classList.toggle('open');
    icon.src = isOpen ? 'assets/imgs/expand_less.png' : 'assets/imgs/expand_more.png';
  });
});

function changePageEnglish() {
  window.location.href = 'index.html'; // Cambia a página en inglés
}

function changePageSpanish() {
  window.location.href = 'index_es.html'; // Cambia a página en español
}
