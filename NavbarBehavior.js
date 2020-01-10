function navBarDarken() {
    var menuSection = document.querySelector("#menu");
    var navBar = document.querySelector(".navigation");
    var menuSectionPos = menuSection.getBoundingClientRect().top;
    var screenPostion = window.innerHeight;
  
    if (menuSectionPos <= 50) {
      navBar.classList.add("nav-darken");
    } else if (menuSectionPos > 50) {
      navBar.classList.remove("nav-darken");
    }
  }
  
  function whichSection() {
    var homeSection = document.querySelector("#home");
    var menuSection = document.querySelector("#menu");
    var aboutSection = document.querySelector("#about");
    var contactSection = document.querySelector("#contact");
    var homeSectionPosBot = homeSection.getBoundingClientRect().bottom;
    var menuSectionPosTop = menuSection.getBoundingClientRect().top;
    var menuSectionPosBot = menuSection.getBoundingClientRect().bottom;
    var aboutSectionPosTop = aboutSection.getBoundingClientRect().top;
    var aboutSectionPosBot = aboutSection.getBoundingClientRect().bottom;
    var contactSectionPosTop = contactSection.getBoundingClientRect().top;
    // var contactSectionPosBot = contactSection.getBoundingClientRect().bottom;
  
    if (homeSectionPosBot > 0) {
      document.querySelector(".home-btn").classList.add("currently");
    } else {
      document.querySelector(".home-btn").classList.remove("currently");
    }
  
    if (menuSectionPosTop < 1 && menuSectionPosBot > 1) {
      document.querySelector(".menu-btn").classList.add("currently");
    } else {
      document.querySelector(".menu-btn").classList.remove("currently");
    }
  
    if (aboutSectionPosTop < 1 && aboutSectionPosBot > 1) {
      document.querySelector(".about-btn").classList.add("currently");
    } else {
      document.querySelector(".about-btn").classList.remove("currently");
    }
  
    if (contactSectionPosTop + 100 <= window.innerHeight) {
      document.querySelector(".contact-btn").classList.add("currently");
      document.querySelector(".about-btn").classList.remove("currently");
    } else {
      document.querySelector(".contact-btn").classList.remove("currently");
    }
  }
  
  window.addEventListener("scroll", () => {
    navBarDarken();
    whichSection();
  });
  
  whichSection();