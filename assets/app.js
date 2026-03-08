const header = document.createElement("header");
document.body.appendChild(header);
header.style.width = "100%";
header.style.height = "100vh";
header.style.position = "relative";

const nav = document.createElement("nav");
header.appendChild(nav);
nav.style.width = "100%";
nav.style.height = "60px";

const logo = document.createElement("img");
nav.appendChild(logo);
logo.style.width = "120px";
logo.style.height = "100%";
logo.style.float = "left";
let logoSrc = "./assets/media/images (3).png";
logo.setAttribute("src", logoSrc);

const ul = document.createElement("ul");
nav.appendChild(ul);
ul.style.listStyle = "none";
ul.style.width = "60%";
ul.style.height = "100%";
ul.style.float = "right";
ul.style.display = "grid";
ul.style.gridTemplateRows = "auto";
ul.style.gridTemplateColumns = "auto auto auto auto auto";

const shop = document.createElement("li");
shop.textContent = "shop";
ul.appendChild(shop);

const about = document.createElement("li");
about.textContent = "about";
ul.appendChild(about);

const lookBook = document.createElement("li");
lookBook.textContent = "look book";
ul.appendChild(lookBook);

const visitUs = document.createElement("li");
visitUs.textContent = "visit us";
ul.appendChild(visitUs);

const contactUs = document.createElement("li");
contactUs.textContent = "contact us";
ul.appendChild(contactUs);

for (let i = 0; i < 5; i++) {
  let liStyle = document.querySelectorAll("li")[i];
  liStyle.style.textAlign = "center";
  liStyle.style.lineHeight = "60px";
  liStyle.style.fontSize = "20px";
  liStyle.style.cursor = "pointer";
}

const headBody = document.createElement("article");
header.appendChild(headBody);
headBody.style.width = "100%";
headBody.style.height = "calc(100% - 60px)";
headBody.style.position = "relative";

const hbaDiv = document.createElement("div");
headBody.appendChild(hbaDiv);
hbaDiv.style.position = "absolute";
hbaDiv.style.top = "50%";
hbaDiv.style.left = "50%";
hbaDiv.style.width = "400px";
hbaDiv.style.height = "400px";
hbaDiv.style.backgroundColor = "rgba(0, 0, 0, 0.06)";
hbaDiv.style.transform = "translate(-20% , -50%)";
hbaDiv.style.borderRadius = "50%";

const headBodyImg = document.createElement("img");
hbaDiv.appendChild(headBodyImg);
let headBodyImgSrc = "./assets/media/IMG-20260307-WA0000.jpg";
headBodyImg.setAttribute("src", headBodyImgSrc);
headBodyImg.style.position = "absolute";
headBodyImg.style.top = "-25px";
headBodyImg.style.left = "-130px";

const headBodyH1 = document.createElement("h1");
hbaDiv.appendChild(headBodyH1);
headBodyH1.innerHTML = `new fall-winter <br> collection`;
headBodyH1.style.textAlign = "center";
headBodyH1.style.width = "100%";
headBodyH1.style.display = "inline-block";
headBodyH1.style.color = "black";
headBodyH1.style.marginTop = "100px";

const headBodyP = document.createElement("p");
hbaDiv.appendChild(headBodyP);
headBodyP.textContent = "shop the latest fashion";
headBodyP.style.width = "100%";
headBodyP.style.marginTop = "10px";
headBodyP.style.fontSize = "20px";
headBodyP.style.textAlign = "center";

const headBodyBtn = document.createElement("button");
hbaDiv.appendChild(headBodyBtn);
headBodyBtn.textContent = "shop now";
headBodyBtn.style.marginLeft = "50%";
headBodyBtn.style.marginTop = "20px";
headBodyBtn.style.padding = "10px 60px";
headBodyBtn.style.fontSize = "18px";
headBodyBtn.style.cursor = "pointer";
headBodyBtn.style.borderRadius = "8px";
headBodyBtn.style.border = "none";
headBodyBtn.style.backgroundColor = "black";
headBodyBtn.style.color = "white";
headBodyBtn.style.transform = "translateX(-50%)";
headBodyBtn.style.width = "120px";
