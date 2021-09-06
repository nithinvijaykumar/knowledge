// USAGE: http://127.0.0.1:5500/index.html?url=https://knowledge.cloudmatica.com&label=My+Coffee+Maker

const urlParams = new URLSearchParams(window.location.search);

function setup() {
  noCanvas();
  
  //myCanvas = createCanvas(400, 400);
  qr = document.querySelector('#qr');
  label = document.getElementById('label');
  url = document.getElementById('url');
  slider = createSlider(100, 600, 300);
  slider.parent(document.querySelector('#slidercontainer'));
  slider.input(setSize);
  //myCanvas.parent(qr);
  var qrcode = new QRCode("qr", {
    text: urlParams.get('url'),
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
  setSize();

  label.innerText = urlParams.get('label');
  url.innerText = urlParams.get('url');
}

function setSize() {
  select('#slidervalue').html(slider.value());
  document.querySelector('#card').style.width = slider.value()+50+'px';
  document.querySelector('#qr img').style.width = slider.value()+'px';
  label.style.width = slider.value()+'px';
  url.style.width = slider.value()+'px';
}

function draw() {
}