// Text Changer Script
var infohead = document.getElementById("infohead");
var head = document.getElementById("header");
var tagline = document.getElementById("tagline");
var tags = document.getElementById("tags");
var tags1 = document.getElementById("tags1");
var tags2 = document.getElementById("tags2");

window.onload = function () {
  head.style.animationName = "shade";
  infohead.style.animationName = "shade2";
  tags.style.animation = "shade4";
};
var tagArray1 = [
  "Tasty",
  "Delightful",
  "Yummy",
  "Bakery",
  "Cheerful",
  "Pineapple"
];
var tagArray2 = ["Feast", "Dessert", "Tummy", "Cakery", "Cherries", "Paradise"];

let j = 0;
function taglinemaker() {
  setInterval(() => {
    tags1.innerHTML = tagArray1[j];
    tags2.innerHTML = tagArray2[j];

    console.log(tagArray1[j]+' '+tagArray2[i]);

    tagline.style.animationName = "shade3";
    tagline.style.animationIterationCount = "infinite";
    
    tagline.style.animationDuration = "3s";

    j += 1;
    if (j > 5) {
      j = 0;
    }
  }, 3000);
  
}

taglinemaker();
