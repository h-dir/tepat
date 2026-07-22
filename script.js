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

  const url = "YOUR_DEPLOYED_APPS_SCRIPT_URL"; // URL Web App dari Apps Script
  const response = await fetch(url, { method: "POST", body: formData });
  const result = await response.json();
  alert(result.message);
}
