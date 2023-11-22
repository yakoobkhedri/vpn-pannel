// sidebar
let toggleSidebar=document.getElementById('toggle-sidebar');
let openSidebar=document.getElementById('openSidebar');
let overlay=document.getElementById('overlay');

toggleSidebar.addEventListener('click',function () {
  toggleSidebar.parentElement.parentElement.parentElement.classList.toggle('close');
  overlay.classList.remove('active');
})

openSidebar.addEventListener('click',function () {
  openSidebar.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('close');
  overlay.classList.add('active');
})

overlay.addEventListener('click',function () {
   this.classList.remove('active');
   document.querySelector('.sidebar').classList.remove('close');
})


// datapicker

jalaliDatepicker.startWatch();


// circle progressbar

let number = document.getElementById('number');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let counter = 0;
let counter2 = 0;
let counter3 = 0;

setInterval(() => {
  if(counter==65){
    clearInterval()
  }else{
    counter += 1;
    number.innerHTML = counter;
  }
},20);
setInterval(() => {
  if(counter2==95){
    clearInterval()
  }else{
    counter2 += 1;
    number2.innerHTML = counter;
  }
},20);
setInterval(() => {
  if(counter3==2225){
    clearInterval()
  }else{
    counter3 += 1;
    number3.innerHTML = counter;
  }
},20);