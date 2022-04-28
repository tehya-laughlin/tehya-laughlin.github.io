const left = document.getElementById('left');
const right = document.getElementById('right');

const p1 = document.getElementById('panel1');
const p2 = document.getElementById('panel2');
const p3 = document.getElementById('panel3');
const p4 = document.getElementById('panel4');
const last = p4;

const lp1 = document.getElementById('atls2200');
const lp2 = document.getElementById('designfoundations');
const lp3 = document.getElementById('appm3170');
const lp4 = document.getElementById('cmdgame');

let arrP = [p1, p2, p3, p4];

let num = 0;
let active = arrP[num];

function leftArrowClicked(){
  //deactivate active
  activate(active);
  //set active to new active panel
  if(num === 0){
    num = 3;
  } else {
    num --;
  }
  active = arrP[num];
  //activate new one
  activate(active);

}

function rightArrowClicked(){
  //deactivate active
  activate(active);
  //set active to new active panel
  if(num === 3){
    num = 0;
  } else {
    num++;
  }
  active = arrP[num];
  //activate new one
  activate(active);
}

function activate(p){
  console.log('Class toggled.');
  p.classList.toggle("panelHidden");
}

function goToPanel(p){
  //deactivate active
  activate(active);
  //set active to new active panel
  num = p;
  active = arrP[num];
  //activate new one
  activate(active);
}

left.addEventListener('click', leftArrowClicked);
right.addEventListener('click', rightArrowClicked);

lp1.addEventListener('click', goToPanel(0));
lp2.addEventListener('click', goToPanel(1));
lp3.addEventListener('click', goToPanel(2));
lp4.addEventListener('click', goToPanel(3));
