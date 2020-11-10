//Прокрутка страницы
function scrollEl() {
    const n = document.getElementById('about');
    n.scrollIntoView({block: "center", inline: "center", behavior:"smooth"});
};
//Слайдер
let index = 1;
slideShow(index);

function nextSlide() {
    slideShow(index += 1);
}

function previousSlide() {
    slideShow(index -= 1);
}


function currentSlide(n) {
    slideShow(index = n);
}

function slideShow(n) {
    let slides = document.getElementsByClassName("item");
    
   
    if (n > slides.length) {
      index = 1
    }
    if (n < 1) {
        index = slides.length
    }
  
    
    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    slides[index - 1].style.display = "block";  
}

//Сортировка

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filteredDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

