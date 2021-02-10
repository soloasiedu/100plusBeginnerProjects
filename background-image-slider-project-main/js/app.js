const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const imageContainer = document.querySelector('.img-container');

const images = 
["img/contBcg-0.jpeg",
 "img/contBcg-1.jpeg",
 "img/contBcg-2.jpeg",
 "img/contBcg-3.jpeg",
 "img/contBcg-4.jpeg"];


 let index = 0;
 btnRight.addEventListener('click', function(){
    index++;
    slide();
    console.log(index);
    imageContainer.style.background = `url(${images[index]}) center/cover fixed no-repeat`;

 })
 btnLeft.addEventListener('click', function(){
  index--;
  slide();
  console.log(index);
  imageContainer.style.background = `url(${images[index]}) center/cover fixed no-repeat`;

})

 function slide(){
   if(index < 0){
     index = images.length - 1;
   }
   if(index == images.length){
     index = 0;
   }
 }