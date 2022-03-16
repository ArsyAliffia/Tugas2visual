let walker;
let orang;

let john;
let snow;

let nightWalkers = [];

let calonDPR = [];
let randomWalks = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  //buat objek
  //{property: nilaiProperty}
  /*
  orang = {
    namaPertama: "John",
    namaKedua: "Walker",
    umur: 42,
    warnaMata: "Merah",
    //buat method
    namaLengkap: function(){
      return this.namaPertama + 
              " " + 
              this.namaKedua
    },
    tambahGelar: function(gelar){
      return this.namaPertama + 
              " " + 
              this.namaKedua +
              gelar
    },

    tambahGelar2: function(gelar){
      return this.namaLengkap()+ 
              gelar
    }
  }
  
  john = new Walker(windowWidth/10, windowHeight)
  snow = new Walker(windowWidth*7/10, windowHeight)
  
  for (var i=0; i<10; i++){
    //posisi x dan y acak
    var x = random(windowWidth)
    var y = random(windowHeight)
    nightWalkers[i] = new Walker(x,y,"red")
  }


  for (var i = 0; i < 100; i++){
    calonDPR[i]=0;
  }
  */
var vn = 0;
for (var i = 0; i < 1000; i++){
    randomWalks[i] = vn;
    vn = vn + randomGaussian(0,1)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(127)
  strokeWeight(10)
  var w = windowWidth / randomWalks.length
  for (var i = 0; i < randomWalks.length; i++){
    var x1 = i*w
    var x2 = (i+1)*w

    var y1 = map (randomWalks[i], 
                  min(randomWalks),
                  max(randomWalks), 
                  0,
                  windowWidth)
    var y2 = map (randomWalks[i], 
                  min(randomWalks),
                  max(randomWalks), 
                  0,
                  windowWidth)
  }

/*
  var idx = int(random(calonDPR.length + 1))
  calonDPR[idx] = calonDPR[idx] + 5

  var w = windowWidth / calonDPR.length
  for (var i = 0; i < calonDPR.length; i++){
    rect(i*w, 0, w-1, calonDPR[i])
  }


  /*
  john.koorVisual()
  

  for (var i=0; i<10; i++){
    nightWalkers[i].koorVisual()
    nightWalkers[i].melangkah();
  }

  john.melangkah();
  */


// buat class -> OBJEK
class Walker {
  constructor(posX, posY, color="white"){
    this.x = posX;
    this.y = posY;
    this.color = color
  }
  //fungsi memvisualkan koordinat
  koorVisual(){
    fill(this.color)
    ellipse(this.x, this.y, 30, 30);
  }
  //fungsi mengembalikan kordinat 
  //dalam array
  koorArray(){
    return [this.x, this.y]
  }
  melangkah(){
    var pilLangka = int(random(4))
    if (pilLangka == 0){
      this.x = thix.x + 10
    }
    else if (pilLangka == 1){
      this.x = thix.x - 10
  }
    else if (pilLangka == 2){
    this.x = thix.x + 10
    }
    else{
      this.x = thix.x + 10
    }
  }
}
