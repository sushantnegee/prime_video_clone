var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener("onmouseenter", pause)
    slideshowContainer.addEventListener("onmouseover", resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}

var list1 = [
  {
    name: "KGF 2",
    year: 2022,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/0ffc8aaff9c98549641b706035981be3f257d91f5e4519f8788b2fb7490ce74e._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 45min",
    language: "Hindi",
    genere: "Action",
  },
  {
    name: "Samaritan",
    year: 2022,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/ad9f1dc28b7fddf24f6bb5f09a37da7cd2c27b5efe2b675ae0a18bebbdddcdb5._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 42 min",
    language: "English",
    genere: "Action",
  },
  {
    name: "Pushpa : the rise",
    year: 2022,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/844421138928023075289343bd51861453acdc82a415968af5b434b1065d642e._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 55 min",
    language: "Hindi",
    genere: "Action",
  },
  {
    name: "Runway 34",
    year: 2022,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/b15d7da4c9039a532da0a1c0d988f95eb37c113c679fecf187943bf5c1cb4662._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 25 min",
    language: "Hindi",
    genere: "Drama",
  },
  {
    name: "Pushpa : the rise",
    year: 2022,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/7d27e807956470ab502f555534d4531ade27a43808791c232cac2115530e9c96._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 55 min",
    language: "Tamil",
    genere: "Action",
  },
  {
    name: "Shershaan",
    year: 2021,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/3de8bc910ea9b1498905f9402400df3c086f0ea9bc35d12bc20f0b133ea37e23._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 15 min",
    language: "Hindi",
    genere: "Action",
  },
  {
    name: "Joker",
    year: 2019,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/dbba13f2b8e065868db8014ce1166fc3452ed49aa9d485be95677f275b9f95cd._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 1min",
    language: "English",
    genere: "Drama",
  },
  {
    name: "F9: the fast saga",
    year: 2021,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/a9ca3a96f196cc391e9de6da3763bdf952e5d09bc868e1192fc310aad4e27eab._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 22 min",
    language: "English",
    genere: "Action",
  },
  {
    name: "Jayashbhai jordan",
    year: 2022,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/693c449656ed0c233562a287a1232f4a0e4f1b22220fd318f0deb6f3b926d170._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 1 min",
    language: "Hindi",
    genere: "Drama",
  },
  {
    name: "Tummbad",
    year: 2018,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/0c32838a4485199e6077e60fee20a18fc1331b7a740e361199ee16e9e89dc3f6._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 44min",
    language: "Hindi",
    genere: "Horror",
  },
  {
    name: "The conjuring 2",
    year: 2016,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/f0431505d9327cc5c53635d793c3600531a049c8a17c59267010773493361018._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 6min",
    language: "English",
    genere: "Horror",
  },
  {
    name: "Dont knock twice",
    year: 2017,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/be7c378f3d62d7085ce2e32537b89108aaf59289f81c77e4128d5c4a57a11bab._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 29min",
    language: "English",
    genere: "Horror",
  },
  {
    name: "Train to Busan",
    year: 2018,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/77f7350fb4436280a0266913c13eb64efd6743ec81b0d889c985e91fdd8f2a79._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 30 min",
    language: "English",
    genere: "Horror",
  },
  {
    name: "IT",
    year: 2017,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/0ad6ec6b342c87b3b51c3be105831f3bf3de673c8b3df2a7f4159ec686db8bd4._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 14min",
    language: "English",
    genere: "Horror",
  },
  {
    name: "The conjuring 3",
    year: 2021,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/5babd7efa47e38fd13412c576657900cc725f46dde712956fd38577f3f2c321c._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 49min",
    language: "Hindi",
    genere: "Horror",
  },
  {
    name: "The conjuring ",
    year: 2013,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/07a7af2f0cc37792b2eb0ee196b53dd10a39ed816fc6f61633116e65ad603745._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 45min",
    language: "Hindi",
    genere: "Horror",
  },
  {
    name: "IT 2",
    year: 2019,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/c884e097f66997a42b7053fe9940c8fbc0a81c27e61a86196ef41397ac344996._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 49min",
    language: "English",
    genere: "Horror",
  },
  {
    name: "Bhoot",
    year: 2020,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/7a44528278ebb8a89e7f9923a4e52dcbe723600ff1179f9cd9a6284c73fa376e._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 54min",
    language: "Hindi",
    genere: "Horror",
  },
  {
    name: "Durga Mati: the mith",
    year: 2020,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/0388ffcb546608b81c5381a0960d4d3c8815e6eb5bfc613fbc0e0d54c5fa8f1a._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 59min",
    language: "Hindi",
    genere: "Horror",
  },
  {
    name: "Orphan first kill",
    year: 2022,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/39cb621db0445a58099b8e6b61c94b7b4ef1c13f7d1b0c03a180572194a79fe6._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 34min",
    language: "English",
    genere: "Drama",
  },
  {
    name: "Dam 999",
    year: 2015,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/8c8ef5a5a5a5d00e3e0a626e6d333163888063f743b729a23dd9666dd5c00115._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 4min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "2.0",
    year: 2018,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/3a9c05c62f552a18dead066c8ec3b774f884a69166d4f05fee79bd3b6d2dfc4d._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 52min",
    language: "Hindi",
    genere: "Sci-fi",
  },
  {
    name: "Godzila kiing of the monsters",
    year: 2014,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/7f598112bf9dfb5d9a516745c1ebc4fd7aa16ff0687973319c4a686c19d4b0b1._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 21min",
    language: "English",
    genere: "Fantacy",
  },
  {
    name: "A quiet place",
    year: 2017,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/06f7ecad50a76873ebd32e9faa5257cc6bb59687d2135ac3e5ebcc3052d14d27._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 40min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "Joker",
    year: 2019,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/dbba13f2b8e065868db8014ce1166fc3452ed49aa9d485be95677f275b9f95cd._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 1min",
    language: "Hindi",
    genere: "Drama",
  },
  {
    name: "Lord of the rings",
    year: 2010,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/11c27baf50d1fdab24234f3ce2be1d42b9e204ca3803adac748152005b0cb80a._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 50min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "Clash of the titans",
    year: 2010,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/d1dc3c964922590e50d8ea14b9f90c378010321120ed9f3cb61cf2e502edacbb._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 58min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "24 hour to live",
    year: 2017,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/0e82076bb996b5c2be00a82cd37a029546a655df6f28c2fc6fdaee14ac112e85._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 1min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "Mad max fury road",
    year: 2015,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/5dd6931178288b918f8d26ef4eb2dab5eaf788923d18edde4193a2217cb52624._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 59min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "2.0",
    year: 2018,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/433c57d693b932a623e15e2e7be3a6008ab3a52e1bed3657ce5c569ef4f1d3b9._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 52min",
    language: "Tamil",
    genere: "Sci-fi",
  },
  {
    name: "Space Jam",
    year: 2021,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/b1c32abff6328fd6c92691185a56d5559ad081916a421edf89ff7248ac8aa7a6._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 3min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "transformers dark of the moon",
    year: 2011,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/fbb74b890cf85b27e4cd92d34c88a4e1dc31205440fd54f19b067a2390fd74b1._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 14min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "Rampage",
    year: 2018,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/17b91c538627bab3366366267df0a8cb128ee7aa924cdc4ec8a2ca1468e89b50._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 33min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "The meg",
    year: 2018,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/1d5bccb419538fbdeaaf260bf561d510ca20bacaa995f63a38f87c56fd19dd46._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 51min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "Jurassic park",
    year: 1993,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/0789a8a7b6edeb224df42607d87d169762041007a5e66634b711551f5633838a._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 45min",
    language: "Hindi",
    genere: "Sci-fi",
  },
  {
    name: "Green Lantern",
    year: 2011,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/cdc7b7b6ff2741451548f6d5fec4071554feb31e25de4e9621d370197f66e330._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 11min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "code 8",
    year: 2019,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/a30a5537fb8dc3bac57a0c529409d45d8f5b8dec60d323f3fc19dfc69ad272a4._UR1920,1080_SX712_FMwebp_.jpg",
    time: "1hr 40min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "Suicide Squad",
    year: 2016,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/ca0737407ab1f3ea02f84fcb11581cbb17f0f0790a1d3dc65e83c5b807322894._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 7min",
    language: "English",
    genere: "Fantacy",
  },
  {
    name: "Suicide Squad",
    year: 2016,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/ca0737407ab1f3ea02f84fcb11581cbb17f0f0790a1d3dc65e83c5b807322894._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 7min",
    language: "English",
    genere: "Sci-fi",
  },
  {
    name: "Suicide Squad",
    year: 2016,
    imglink:
      "https://m.media-amazon.com/images/S/pv-target-images/ca0737407ab1f3ea02f84fcb11581cbb17f0f0790a1d3dc65e83c5b807322894._UR1920,1080_SX712_FMwebp_.jpg",
    time: "2hr 7min",
    language: "Hindi",
    genere: "Sci-fi",
  },
];
//var list = JSON.parse(localStorage.getItem("emp")) || [];

var wishlists=JSON.parse(localStorage.getItem("wishlists"))||[];

var div = document.createElement("div");
div.setAttribute("id", "outer_box_for_movie");

list1.forEach(function (elem, index) {
  
  var popUpDiv = document.createElement("div");
  var popUp1st = document.createElement("div");
  var popUpSecond = document.createElement("div");
  var popUpImgDiv = document.createElement("div");
  var img = document.createElement("img");
  var imgPrime = document.createElement("img");
  var h4 = document.createElement("h4");
  var p1 = document.createElement("p");
  var p4 = document.createElement("p");
  var button = document.createElement("button");
  var divAdd = document.createElement("div");

  img.setAttribute("src", elem.imglink);
  imgPrime.setAttribute("src", "https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg");
  h4.innerText = elem.name;
  p1.innerText = elem.time;
  p4.innerText = elem.language;
  popUp1st.setAttribute("class", "popUp1st");
  img.setAttribute("class", "card");
  imgPrime.setAttribute("class", "imgPrime");
  popUpDiv.setAttribute("class", "popUpDiv");
  h4.setAttribute("class", "MovieName");
  // button.setAttribute("class", "addButton");
  popUpSecond.setAttribute("class", "popUp2nd");
  popUpImgDiv.setAttribute("class","popUpImgDiv")
  // button.innerText = index;
  // popUp1st.append(h4, button);
  divAdd.setAttribute("class", "addButton");
  divAdd.innerHTML= '<i id"bookmark" class="fa fa-bookmark icon-large" aria-hidden="true"></i>';
  popUpImgDiv.append(img,imgPrime);
  popUp1st.append(h4, divAdd);
  popUpSecond.append(p1, p4);
  popUpDiv.append(popUpImgDiv, popUp1st, popUpSecond);
  div.append(popUpDiv);
  divAdd.addEventListener("click",wishlist);
  function wishlist(){
    console.log(elem);
    wishlists.push(elem);
    localStorage.setItem("wishlists",JSON.stringify(wishlists));
    alert(`${elem.name} is Added to WatchList`);
  }
  
  
});
document.getElementById("innerImages").append(div);
// document.querySelector(".addButton").addEventListener("click", addFunction);
//  function addFunction{
//   var i = Number(button.innerText);
//  }
