AOS.init();
const closeBtn = document.querySelector(".modal-close");
const barBtn = document.querySelector(".nav-icon");
const modal = document.querySelector(".modal");
const videoBtn = document.querySelectorAll(".vid-btn");
const card_container = document.querySelector(".card-container");

const btn = document.querySelector(".button");
const div2 = document.querySelector(".div--2");

// btn.addEventListener("click", function () {
//   div2.classList.toggle("active--height");
//   btn.classList.toggle("btn-after");
// });

barBtn.addEventListener("click", function (e) {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", function (e) {
  modal.classList.remove("active");
});

// Video
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    console.log(src);
    document.querySelector("#video-slider").src = src;
  });
});

fetch("../data/data.json")
  .then((response) => response.json())
  .then((json) => {
    showData(json);
  });

const showData = (data) => {
  // data.data.map((i) => {
  //   const div1 = document.createElement("div");
  //   const div2 = document.createElement("div");
  //   const card =document.createElement("div");
  //
  //   const h1 = document.createElement("h1");
  //   const img = document.createElement("img");
  //
  //   div1.classList.add("before");
  //   div2.classList.add("after");
  //   card.classList.add("card");
  //
  //   h1.classList.add("location-header");
  //   img.classList.add("location-img");
  //
  //   h1.innerText = i.name;
  //   img.src = "./img/bagan1.jpg";
  //   // img.width = 500;
  //
  //   div2.appendChild(h1);
  //   div1.appendChild(img);
  //
  //   card.appendChild(div1);
  //   card.appendChild(div2);
  //
  //   card_container.appendChild(card);
  // });
};


// $('.reviewInner').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   cssEase: 'linear'
// });

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});