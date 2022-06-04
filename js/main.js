'use strict'

{
  const menu = document.getElementById("menu");
  const close = document.getElementById("close");
  const overlay = document.querySelector(".overlay")

  menu.addEventListener("click", () => {
    menu.classList.add("hide");
    overlay.classList.add("show");
  });

  close.addEventListener("click", () => {
    menu.classList.remove("hide");
    overlay.classList.remove("show");
  });//ハンバーガーメニュー

  const images = [
    "img/grand_piano.jpg",
    "img/kv.jpg",
    "img/concert.jpg",
  ];
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const main = document.getElementById("main");
  let timeoutId;
  let currentIndex = 0;
  let isPlaying = false;
  main.src = images[currentIndex];

  function slideShow () {
    if (currentIndex === (images.length-1)) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    main.src = images[currentIndex];
    isPlaying = true;
  }

  timeoutId = setInterval(() => {
    slideShow();
  }, 5000);

  next.addEventListener("click", () => {
    if (currentIndex === (images.length-1)) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    main.src = images[currentIndex];
  });
  
  prev.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = (images.length-1);
    } else {
      currentIndex--;
    }
    main.src = images[currentIndex];
  });

  main.addEventListener("click", () => {
    if (isPlaying === true) {
      clearInterval(timeoutId);
      isPlaying = false;
    } else {
      timeoutId = setInterval(() => {
        slideShow();
    }, 5000)}

  });//スライドショー

  const thoughts = document.querySelectorAll(".balloon p");
  const features = document.querySelectorAll(".features dl");
  const interviews = document.querySelectorAll(".balloon-up");

  function intersection (targets) {
    function callback(entries, obs) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
    
        entry.target.classList.add("appear");
        obs.unobserve(entry.target);
  
      });
    }
  
    const options = {
      threshold:0.8,
      rootMargin: "0px 0px -250px",
    }
  
    const observer = new IntersectionObserver(callback, options);
  
    targets.forEach(target => {
      observer.observe(target);
    });
  }
  intersection(thoughts);
  intersection(features);
  intersection(interviews);//Intersection Observer API
}