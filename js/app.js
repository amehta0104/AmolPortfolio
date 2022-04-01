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

