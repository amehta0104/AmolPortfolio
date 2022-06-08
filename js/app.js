
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

   console.log(selectedProject.innerHTML)

   var newLocal = document.getElementById('display-selected')

    link.addEventListener('click' ,  ()=> {
     // selectedProject.style.display = ' block';
       newLocal.animate([{ opacity : 100 }, { opacity: 0}], {
         // timing options

        duration: 500,
        timing: 'ease-in-out',




       });
       
        setTimeout(()=>{ 
       
        

      
      

newLocal.animate(slideUp,slideUpTiming)

      // newLocal.animate([{ opacity : 0 }, { opacity: 100}], {
      //   // timing options

      //  duration: 500,
      //  timing:'ease'




      // })
     return newLocal.innerHTML = selectedProject.innerHTML ;
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

  const slideUp= 

   [

    { opacity: '.5'}, 
    {transform:'translateY(0) scale(0.98)'},


   


      { opacity: '1'}, 
      {transform:'translateY(0) scale(1)'}
    
    ]
    
    const slideUpTiming = 

     { duration: 500,
     // timing:'ease'
    }
    

      function Project(title, description, year, category) {
        this.title = title;
        this.description = description;
        this.year = year;
        this.category =category;
      }
    // @keyframes chapternav-slidein {
    //   0% {
    //    opacity:0
    //   }
    //   1% {
    //    transform:translateX(160px)
    //   }
    //   to {
    //    opacity:1;
    //    transform:translateX(0)
    //   }
    //  }
    
  


