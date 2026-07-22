document.getElementById("foto")?.addEventListener("change", function(){
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById("preview").src = e.target.result;
  }
  reader.readAsDataURL(file);
});

async function kirimAbsensi() {
  const nama = document.getElementById("nama").innerText;
  const departemen = document.getElementById("departemen").innerText;
  const status = document.getElementById("status").value;
  const fotoFile = document.getElementById("foto").files[0];

  const formData = new FormData();
  formData.append("nama", nama);
  formData.append("departemen", departemen);
  formData.append("status", status);
  formData.append("foto", fotoFile);

  const url = "https://script.google.com/macros/s/AKfycbzYiBzL-JUhVrNy6wA33p4rs65OJFgEXf-skCUxSG07zSc08t3fh1Say76QTKC0aRqJ/exec"; // URL Web App dari Apps Script
  const response = await fetch(url, { method: "POST", body: formData });
  const result = await response.json();
  alert(result.message);
}
