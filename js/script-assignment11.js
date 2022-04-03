

function button1Clicked(){
  document.getElementById('11button').classList.toggle('was-clicked');
}

function hClicked(){
  document.getElementById('pS2').innerHTML = 'Changed text to bold';
  document.getElementById('pS2').classList.toggle('pS');
  alert("Hello!");
}

function windowLoaded() {
  console.log('linked ok: script');

  //button
  document.getElementById('11button').addEventListener('click', button1Clicked);

  //other
  document.getElementById('pS').addEventListener('click', hClicked);

}

window.onload = windowLoaded;
