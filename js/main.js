document.addEventListener("DOMContentLoaded", () => {
  // --- КОПИРОВАНИЕ НОМЕРА ---
  const phoneNumber = document
    .querySelector(".contacts__number")
    ?.textContent?.trim();
  const copyBtn = document.querySelector(".contacts__btn-number");

  copyBtn?.addEventListener("click", () => {
    if (!phoneNumber) return;
    navigator.clipboard.writeText(phoneNumber).then(() => {
      copyBtn.textContent = "Скопировано!";
      setTimeout(() => {
        copyBtn.textContent = "Скопировать номер";
      }, 2000);
    });
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
