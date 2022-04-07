import { Splide } from "@splidejs/splide";
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [1, 2, 3, 4, 5, 6, 7 , 8, 9 , 10, 11, 12, 13, 14];
const selectedIndex = null;

imageIndexes.forEach( (i) => {
const image = document.createElement('img');
image.src = 'js/gallery/gallery'+ (i) + '.jpg';
image.alt = 'gg';


image.classList.add('galleryImg');
image.classList.add('item-' + i)

image.addEventListener('click', () => {
    
popup.style.transform = 'translateY(0)';    
selectedImage.src = 'js/gallery/gallery'+ (i) + '.jpg';
selectedImage.alt = 'gg';

});

console.log(image.src);
gallery.appendChild(image);

});


popup.addEventListener('click', () => {



popup.style.transform = 'translateY(-100%)';
popup.src = '';
popup.alt = '';


})


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var splide = new Splide("#main-slider", {
  width: 600,
  height: 300,
  pagination: false,
  cover: true
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();