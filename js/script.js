document.addEventListener("DOMContentLoaded", function(event) {
  const preloader = document.querySelector('.preloader')
  
  setTimeout(function() {
    preloader.classList.add('hidden')
    setTimeout(function() {
      preloader.style.display = 'none'
    }, 500)
  }, 1000)
});


gsap.timeline()
    .set('.logo',     { x:215, y:482 })
    .set('.chip',     { x:148, y:66 })
    .set('.brandTxt',     { x:22, y:320 })
    .set('.numTxt',   { x:22, y:375 })
    .set('.nameTxt',  { x:22, y:410 })
    .add(centerMain(), 0.2)
    .from('.ball',    { duration:2,
                        transformOrigin:'50% 50%',
                        scale:0,
                        opacity:0,
                        ease:'elastic',
                        stagger:0.2
                      }, 0)
    .fromTo('.card',  { x:200,
                        y:40,
                        transformOrigin:'50% 50%',
                        rotation:-4,
                        skewX:10,
                        skewY:4,
                        scale:2,
                        opacity:0
                      },{
                        duration:1.3,
                        skewX:0,
                        skewY:0,
                        scale:1,
                        opacity:1,
                        ease:'power4.inOut'
                      }, 0.2)
        


function centerMain(){ gsap.set('.main', {x:'80%', xPercent:-50, y:'50%', yPercent:-50}); }
window.onresize = centerMain;

window.onmousemove = (e)=> {
  let winPercent = { x:e.clientX/window.innerWidth, y:e.clientY/window.innerHeight },
      distFromCenter = 1 - Math.abs((e.clientX - window.innerWidth/2)/window.innerWidth*2);
  
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
      .to('.card',        {rotation:-7+9*winPercent.x}, 0)
      .to('.fillLight',   {opacity:distFromCenter}, 0)  
      .to('.bg',          {x:100-200*winPercent.x, y:20-40*winPercent.y}, 0) 
}


/* Edit */

$('#card-number').on('keypress change blur', function () {
  $(this).val(function (index, value) {
    return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
  });
});

$('#card-number').on('copy cut paste', function () {
  setTimeout(function () {
    $('#card-number').trigger("change");
  });
});


/* Exp. Date Slash */

$('#card-exp').on('input',function(){
    var curLength = $(this).val().length;
    if(curLength === 2){
       var newInput = $(this).val();
        newInput += '/';
        $(this).val(newInput);
    }
});

