// faq-accordion
document.querySelectorAll('.contenedor').forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('activa');
    // close-others
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



/*subscription*/
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

/*accordion*/
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
          otherIcon.src = 'assets/imgs/expand-more.png';
        }
      }
    });

    const isOpen = faqItem.classList.toggle('open');
    icon.src = isOpen ? 'assets/imgs/expand-less.png' : 'assets/imgs/expand-more.png';
  });
});

function changePageEnglish() {
  window.location.href = 'index.html'; // change-page-to-english
}

function changePageSpanish() {
  window.location.href = 'index_es.html'; // change-page-to-spanish
}

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav-desktop');
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
