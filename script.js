/* Iteration 4: Make the Canvas App Functional */
let background_btn = document.getElementById("background_btn");
let background = document.getElementById("background")

background_btn.oninput=function(){
  background.style.fill=background_btn.value
}

let jersey_btn = document.getElementById("jersey_btn");
let jersey = document.getElementById("jersey")

jersey_btn.oninput=function(){
  jersey.style.fill=jersey_btn.value
}

let face_btn = document.getElementById("face_btn");
let face = document.getElementById("face")

face_btn.oninput=function(){
  face.style.fill=face_btn.value
}

let hair_btn = document.getElementById("hair_btn");
let hair = document.getElementById("hair")

hair_btn.oninput=function(){
  hair.style.fill=hair_btn.value
}

let cr_btn = document.getElementById("cr_btn");
let cr = document.getElementById("cr")

cr_btn.oninput=function(){
  cr.style.fill=cr_btn.value
}

let number_btn = document.getElementById("number_btn");
let number = document.getElementById("number")

number_btn.oninput=function(){
  number.style.fill=number_btn.value
}
