function dates() {
    var x = new Date(2024,8,28,22,00,00)
    var y = new Date();
    let seconds = Math.abs(x - y)/1000;

    var day = seconds / (24 * 3600);

    hh = seconds % (24 * 3600);
    var hour = hh / 3600;
  
    hh %= 3600;
    var minutes = hh / 60 ;
  
    hh %= 60;
    var rseconds = hh;

    document.getElementById('days').innerHTML = parseInt(day) + "Days";
    console.log("harsh: The days is" + document.getElementById('days').innerHTML );
    document.getElementById('hours').innerHTML = parseInt(hour) + "Hours";
    document.getElementById('minutes').innerHTML = parseInt(minutes) + "Minutes";
    document.getElementById('seconds').innerHTML = parseInt(rseconds) + "Seconds";
}

setInterval(dates, 1000);

function cardSelected(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.remove('fade-out');
            card.classList.add('show');
        } else {
            card.classList.add('fade-out'); 
            card.classList.remove('show');
        }
    });
}


// Gallery System
const photosArr = document.querySelectorAll('.gal-box span') ;
const galOv = document.querySelector('.gal-big');
const galOvImg = document.querySelector('.gal-big img');

galOv.addEventListener('click',function(e){
  if(e.target==this){
    galOv.classList.remove('show-galbig');
  }
})

photosArr.forEach((p)=>{
  p.addEventListener('click',function(){
    let src = p.children[0].getAttribute('src');
    galOvImg.setAttribute('src',src)
    galOv.classList.add('show-galbig')
  })
})
