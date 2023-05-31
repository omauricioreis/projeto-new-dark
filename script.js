function toggleMode (){
  const html = document.documentElement;
  html.classList.toggle('light')


  const img = document.querySelector("#profile img")
  
  if(html.classList.contains('ligth')){

img.setAttribute('src', './img/Mauricio2.jpeg')
  }else{
    
  }
  

}