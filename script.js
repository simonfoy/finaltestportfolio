var backgroundImages = [
      "assets/background0.png",
      "assets/background1.png",
      "assets/background2.png",
      "assets/background3.png",
      "assets/background4.png",
      "assets/background5.png",
      "assets/background6.png",
      "assets/background7.png",
      "assets/background8.png",
      "assets/background9.png"
  // Add more image URLs as needed
];

document.getElementById("backgroundBtn").addEventListener("click", function() {
  var randomIndex = Math.floor(Math.random() * backgroundImages.length);
  var newImage = backgroundImages[randomIndex];

  var styleElement = document.createElement("style");
  styleElement.textContent = `body::before {
    background-image: url('${newImage}');
  }`;

  document.head.appendChild(styleElement);
});


var typed = new Typed(".main-auto-type", {
  strings: ["A Software Developer", "A Java Developer", "A Web Developer", "A System Administrator", "Your next colleague"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
})