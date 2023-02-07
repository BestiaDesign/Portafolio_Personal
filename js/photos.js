// modal
let modal = document.getElementById("modalGallery");

// image with modal
let img = document.getElementById("behance1");
let modalImg = document.getElementById("img01");
img.onclick = function(){
  modalImg.src = this.src;
}