/*===== OPENING TAB IN WORK SECTION =====*/
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tabcontent.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

/*===== SAMPLE PROJECT MODAL =====*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("projImgStack1");
var img2 = document.getElementById("projImgStack2");
var img3 = document.getElementById("projImgStack3");
var modalImg = document.getElementById("img01");
// var modalImg2 = document.getElementById("img02");
// var modalImg3 = document.getElementById("img03");
var captionText1 = document.getElementById("caption1");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
var blockMain = document.getElementById("main");
var blockBanner = document.getElementById("banner");
var setPosition = blockMain, blockBanner;
var setIndex = blockMain, blockBanner;

function imgDisplay() {
  modal.style.display = "block";
  setPosition.style.position = "relative";
  setIndex.style.zIndex = -3;
  return true;
}

var imgsArr = [img1, img2, img3];

for(var i = 0 ; i <= imgsArr.length-1; i++ ) {
  imgsArr[0] = imgsArr[i];
  
  switch(imgsArr[0]) {
    case img1:
      img1.onclick = function(){
        modalImg.src = this.src;
        captionText1.innerHTML = this.alt;
        imgDisplay();
      }
    break;
    case img2:
      img2.onclick = function(){
        modalImg.src = this.src;
        captionText2.innerHTML = this.alt;
        imgDisplay();
      }
    break;
    case img3:
      img3.onclick = function(){
        modalImg.src = this.src;
        captionText2.innerHTML = this.alt;
        imgDisplay();
      }
    break;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  setPosition.style.position = "initial";
  setIndex.style.zIndex = 0;

}