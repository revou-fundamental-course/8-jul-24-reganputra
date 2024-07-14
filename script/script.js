// Mengambil elemen-elemen dari DOM
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Fungsi untuk menghitung BMI
function calculate(){
  // Memeriksa apakah semua field telah diisi
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    // Menampilkan modal jika ada field yang kosong
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
  }else{
    // Memanggil fungsi untuk menghitung BMI jika semua field telah diisi
    countBmi();
  }
}

// Fungsi untuk menghitung BMI dan menampilkan hasilnya
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  // Menghitung BMI
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  // Menentukan kategori BMI berdasarkan nilai BMI
  if(bmi<18.5){
    result = 'Underweight';
  }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
  }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
  }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
  }else if(35<=bmi){
    result = 'Extremely obese';
  }

  // Menampilkan hasil BMI dan kategori
  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// Ketika pengguna mengklik <span> (x), tutup modal
span.onclick = function() {
  modal.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}