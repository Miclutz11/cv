let main = document.getElementById('main')

$(document).ready(function(){
    $('.right').on('click', function(){
        var currentImage = $('.active');
        var nextImage = currentImage.next();
        if(nextImage.length){
            currentImage.removeClass('active');
            nextImage.addClass('active');
        }
        else{
            $('.image:last-child').removeClass('active');
            
        }
    })
    $('.left').on('click', function(){
        var currentImage = $('.active');
        var prevImage = currentImage.prev();
        if(prevImage.length){
            currentImage.removeClass('active');
            prevImage.addClass('active');
        }
        else{
            $('.image:last-child').addClass('active');
        }
    })
})

$(document).ready(function(){
    $('.right2').on('click', function(){
        var currentImage = $('.active2');
        var nextImage = currentImage.next();
        if(nextImage.length){
            currentImage.removeClass('active2');
            nextImage.addClass('active2');
        }
        else{
            $('.image2:last-child').removeClass('active2');
            
        }
    })
    $('.left2').on('click', function(){
        var currentImage = $('.active2');
        var prevImage = currentImage.prev();
        if(prevImage.length){
            currentImage.removeClass('active2');
            prevImage.addClass('active2');
        }
        else{
            $('.image2:last-child').addClass('active2');
        }
    })
})

$(document).ready(function(){
    $('.right3').on('click', function(){
        var currentImage = $('.active3');
        var nextImage = currentImage.next();
        if(nextImage.length){
            currentImage.removeClass('active3');
            nextImage.addClass('active3');
        }
        else{
            $('.image3:last-child').removeClass('active3');
            
        }
    })
    $('.left3').on('click', function(){
        var currentImage = $('.active3');
        var prevImage = currentImage.prev();
        if(prevImage.length){
            currentImage.removeClass('active3');
            prevImage.addClass('active3');
        }
        else{
            $('.image3:last-child').addClass('active3');
        }
    })
})

var i=0;
var j=0;
var txt="Puteti vedea cateva din skill-urile mele mai jos.";
var txtpasiune="De cand eram mic am fost pasionat de editarea video. Aceasta pasiune a crescut si astfel am invatat si am folosit multe programe pentru arta digitala.";
var speed=50;

function pasiune(){
document.getElementById ("pasiune"). innerHTML+=txtpasiune.charAt(j) ;
j++;
setTimeout (pasiune, speed);
}
pasiune();

const scrollOffset = 100;
const scrollElement = document.querySelector(".js-scroll");
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

let videoVisible = false;

function openVideo(videoId) {
    var iframe = document.getElementById('videoFrame');
    iframe.src = 'https://www.youtube.com/embed/' + videoId;
    if (videoVisible) {
        iframe.style.display = 'none';
        videoVisible = false;
    } else {
        iframe.style.display = 'block';
        videoVisible = true;
    }
}


setTimeout(function type(){
document.getElementById ("type"). innerHTML+=txt.charAt(i) ;
i++;
setTimeout (type, speed);
},8500)
type();
