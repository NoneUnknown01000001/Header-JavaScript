/* the header section of the page is created using 
JavaScript DOM manipulation. It includes a navigation 
bar with a logo and menu items, as well as a main content 
area with an image, heading, paragraph, and a 
call-to-action button. The styles are applied directly 
to the elements using JavaScript to achieve the desired layout and appearance. */
const header = document.createElement("header");

header.style.width = "100%";
header.style.height = "100vh";
header.style.position = "relative";
header.style.textTransform = "capitalize";

document.body.appendChild(header);

// navbar
const nav = document.createElement("nav");

nav.style.width = "100%";
nav.style.height = "60px";
nav.style.backgroundColor = "white";

header.appendChild(nav);

/*logo and menu items are added to the navbar using JavaScript DOM manipulation.
The logo is an image element with specified dimensions and source, while the
menu items are created as list items within an unordered list. The styles for 
the logo and menu items are applied directly to the elements to achieve the
desired layout and appearance in the navigation bar.*/
const logo = document.createElement("img");

logo.style.width = "120px";
logo.style.height = "100%";
logo.style.float = "left";

let logoSrc = "./assets/media/images (3).png";

logo.setAttribute("src", logoSrc);

nav.appendChild(logo);

// ul and li for menu items
const ul = document.createElement("ul");

ul.style.listStyle = "none";
ul.style.width = "60%";
ul.style.height = "100%";
ul.style.float = "right";
ul.style.display = "grid";
ul.style.gridTemplateRows = "auto";
ul.style.gridTemplateColumns = "auto auto auto auto auto";

nav.appendChild(ul);

/*li for menu items are created using a loop that iterates through 
an array of menu item names. For each menu item, a list item (li) 
and an anchor (a) element are created. The text content of the anchor 
is set to the menu item name, and various styles are applied to the
anchor to achieve the desired appearance and layout in the navigation 
bar. Finally, the anchor is appended to the list item, and the list 
item is appended to the unordered list (ul) in the navigation bar.*/
let navItems = ["shop", "about", "look book", "visit us", "contact us"];

navItems.forEach((i) => {
  const li = document.createElement("li");

  const a = document.createElement("a");

  a.textContent = i;
  a.style.textAlign = "center";
  a.style.lineHeight = "60px";
  a.style.fontSize = "20px";
  a.style.cursor = "pointer";

  li.appendChild(a);
  ul.appendChild(li);
});

/*head Body section is created to hold the main content of the header,
including an image, heading, paragraph, and a call-to-action button.
The styles for the head body and its child elements are applied 
directly using JavaScript to achieve the desired layout and 
appearance in the header section of the page.*/
const headBody = document.createElement("article");

headBody.style.width = "100%";
headBody.style.height = "calc(100% - 60px)";
headBody.style.position = "relative";

header.appendChild(headBody);

/*header Body Article (hba) is created to hold the main content of the header,
including an image, heading, paragraph, and a call-to-action button. 
The styles for the head body and its child elements are applied directly
using JavaScript to achieve the desired layout and appearance in 
the header section of the page.*/
const hbaDiv = document.createElement("div");

hbaDiv.style.position = "absolute";
hbaDiv.style.top = "50%";
hbaDiv.style.left = "50%";
hbaDiv.style.width = "400px";
hbaDiv.style.height = "400px";
hbaDiv.style.backgroundColor = "rgba(0, 0, 0, 0.06)";
hbaDiv.style.transform = "translate(-20% , -50%)";
hbaDiv.style.borderRadius = "50%";

headBody.appendChild(hbaDiv);

/*head Body Image, Heading, Paragraph and Button are created and 
styled to be positioned within the head body article (hba) div.
The image is positioned absolutely to create a specific layout,
while the heading, paragraph, and button are styled to be 
centered and visually appealing within the hba div. The button
is designed to be a call-to-action for users to shop the
latest fashion collection.*/
const headBodyImg = document.createElement("img");

let headBodyImgSrc = "./assets/media/IMG-20260307-WA0000.jpg";
headBodyImg.setAttribute("src", headBodyImgSrc);

headBodyImg.style.position = "absolute";
headBodyImg.style.top = "-25px";
headBodyImg.style.left = "-130px";

hbaDiv.appendChild(headBodyImg);

// heading, paragraph for head body article (hba) div
const headBodyH1 = document.createElement("h1");

headBodyH1.innerHTML = `new fall-winter <br> collection`;
headBodyH1.style.textAlign = "center";
headBodyH1.style.width = "100%";
headBodyH1.style.display = "inline-block";
headBodyH1.style.color = "black";
headBodyH1.style.marginTop = "100px";

hbaDiv.appendChild(headBodyH1);

// head body paragraph for head body article (hba) div
const headBodyP = document.createElement("p");

headBodyP.textContent = "shop the latest fashion";
headBodyP.style.width = "100%";
headBodyP.style.marginTop = "10px";
headBodyP.style.fontSize = "20px";
headBodyP.style.textAlign = "center";

hbaDiv.appendChild(headBodyP);

// head body button for head body article (hba) div
const headBodyBtn = document.createElement("button");

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
headBodyBtn.style.textTransform = "capitalize";
headBodyBtn.style.boxSizing = "content-box";

hbaDiv.appendChild(headBodyBtn);
