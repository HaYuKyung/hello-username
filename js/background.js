const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgDiv = document.createElement("div");

bgDiv.src



bgDiv.style.backgroundImage =`url(img/${chosenImage})`;
bgDiv.style.backgroundSize="cover";
bgDiv.style.backgroundPosition="center";
bgDiv.style.position="fixed";
bgDiv.style.top="0";
bgDiv.style.left="0";
bgDiv.style.width="100vw";
bgDiv.style.height="100vh";
bgDiv.style.zIndex="-1";

bgDiv.classList.add("bg-image");

document.body.appendChild(bgDiv); 