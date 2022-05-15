
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
 const projectLinks = document.getElementById('project-links').children;
 const projectList = document.getElementById('selected-content').children;


/*const imageIndexes = [1, 2, 3, 4, 5, 6, 7 , 8, 9 , 10, 11, 12, 13, 14];
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
//gallery.appendChild(image);

});


popup.addEventListener('click', () => {



popup.style.transform = 'translateY(-100%)';
popup.src = '';
popup.alt = '';


})*/
 

 // newLocal.style.transform = 'translateX(-100%)';
// for each of the children,
let counter = projectLinks.length

for(let index = 0; index < projectLinks.length; index++) {
  let link = projectLinks[index];
  link.classList.add('btn','btn-primary');
  link.style.cursor= 'pointer' ;
  



   
   let selectedProject = projectList.item([index]);

   var newLocal = document.getElementById('display-selected')

    link.addEventListener('click' , function (event) {
      selectedProject.style.display = ' block';
        newLocal.animate ([{transform: 'translateX(0)'},{transform: 'translateX(100%)'}],{
          // timing options
         
  duration:  250,
transitionTimingFunction:  'ease-in-out',


          
          
        } )
        selectedProject.animate ([{transform: 'translateX(-100%)', },{transform: 'translateX(0)'}],{
          // timing options
         
  duration:  250,
transitionTimingFunction:  'ease-in-out',


          
          
        } )
        setTimeout(function(){ 
       
        newLocal.innerHTML = selectedProject.innerHTML ;

      
      

      },250);

      });

 
      

     // newLocal.parentElement.parentElement.style.transform = 'translateX(100%)'

  }

function newFunction() {
  return ' selectedProject  ';
}

function getSelectedProject(project) {

  var selectedLocal = project.innerHTML
  return selectedLocal;
}

  function slideUp(){
    //
  }


