const li = $("li");
let header;

// li[0].click();
// const card = $(".card");
// const card = document.querySelector(".card")
const content = document.querySelector(".contents");
const placeInner = document.querySelector(".places-inner");
li.click(function () {
  // window.screenTop();
  content.scrollTo(0, 0);
  content.classList.add("active-content");
  li.map((i) => {
    li[i].classList.remove("active");
  });
  this.classList.toggle("active");
  setTimeout(open, 800);
  
  header = this.firstElementChild.innerText;
  // card.appendChild(p);
  // $(".content").animate({scrollTop: 156}, 800);
  // top_.classList.add("top-active-height")
  // bottom_.classList.add("bottom-active-height")
  setTimeout(() => {
    removeElements();
    createElements();
  }, 500)
  

 
});

function open() {
  content.classList.remove("active-content");
  // top_.classList.remove("top-active-height")
  // bottom_.classList.remove("bottom-active-height")
}

async function  createElements() {

  const data = (await fetch("../data/data.json").then(data => data.json())).data;
  
  
  

  let card, p, imgDiv, contentDiv;
  let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus, tenetur";
  for (let i = 0; i < 20; i++) {
    h1 = document.createElement("h1");
    h1.innerText =  data[i].name;//header  || "Places";

    p = document.createElement("p");
    p.innerText = data[i].about.slice(0,40) + "...";

    card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("places-card");
    
    imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage = "url('../img/bagan1.jpg')";
    imgDiv.classList.add("img-class");

    contentDiv = document.createElement("div");
    contentDiv.classList.add("content-class");
    contentDiv.appendChild(h1);
    contentDiv.appendChild(p);
    
    let button = document.createElement("a")
    button.classList.add("btn-class");
    button.href = "detail.html"
    button.innerText = "See More";
  

    contentDiv.appendChild(h1)
    contentDiv.appendChild(p);
    contentDiv.appendChild(button);
    placeInner.appendChild(card);
   
    card.appendChild(imgDiv);
    card.appendChild(contentDiv)
   
  }
}

function removeElements() {
  let card = document.querySelectorAll(".card");
  console.log(card);
  

  card.forEach((i) => {
    placeInner.removeChild(i);
  });
}
createElements();
