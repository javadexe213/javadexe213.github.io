let text = document.getElementById('text');
let texts = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg']
setInterval(function(){let random = Math.floor(Math.random() * texts.length); text.src = texts[random];},1000)