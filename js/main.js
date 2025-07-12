document.addEventListener("DOMContentLoaded", () => {
  // --- КОПИРОВАНИЕ НОМЕРА ---
  const numbers = document.querySelectorAll(".contacts__number");
  const copyBtn = document.querySelector(".contacts__btn-number");

  let currentIndex = 0;

  copyBtn?.addEventListener("click", () => {
    if (!numbers.length) return;

    const number = numbers[currentIndex]?.textContent?.trim();
    if (!number) return;

    navigator.clipboard.writeText(number).then(() => {
      copyBtn.innerHTML = `Скопировано:<br>${number}`;

      setTimeout(() => {
        copyBtn.textContent = "Скопировать номер";
      }, 2000);
    });

    // Переключение между 0 и 1
    currentIndex = (currentIndex + 1) % numbers.length;
  });

  // --- КНОПКИ ПРОКРУТКИ К БЛОКУ УСЛУГ ---
  const serviceBtn1 = document.querySelector(".contacts__btn-service");
  const serviceBtn2 = document.querySelector(".aboutUs__column-left-btn");
  const servicesBlock = document.querySelector("#services");

  const scrollToServices = () => {
    servicesBlock?.scrollIntoView({ behavior: "smooth" });
  };

  serviceBtn1?.addEventListener("click", scrollToServices);
  serviceBtn2?.addEventListener("click", scrollToServices);

  // --- ЗАМЕНА КАРТИНКИ НА МОБИЛЬНЫХ ---
  if (window.innerWidth <= 600) {
    const bgImg = document.querySelector(".wyUs__bg--third");
    if (bgImg) {
      bgImg.removeAttribute("srcset");
      bgImg.removeAttribute("sizes");
      bgImg.src = "img/usBlock3-mobile.png";
    }
  }

  // --- МОБИЛЬНОЕ МЕНЮ ---
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-menu");
  const hero = document.querySelector(".hero");
  const closeBtn = document.querySelector(".mobile-menu__close");
  const menuLinks = menu?.querySelectorAll("a");

  function openMenu() {
    menu.classList.add("show");
    hero?.classList.add("blurred");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("show");
    hero?.classList.remove("blurred");
    document.body.style.overflow = "";
  }

  burger?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (menu.classList.contains("show")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (
      menu.classList.contains("show") &&
      !menu.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  menuLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
});
