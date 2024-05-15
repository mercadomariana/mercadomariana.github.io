let figura;

function setup() {
  createCanvas(600, 700);
  this.numrandom = int(random(0,10));
  figura = new Figuras(this.numrandom);
  this.fx = 250
  paleta = [
    color(210,52,44), //rojo
    color(57,103,62), //verde
    color(0,0,0), //negro
    color(240,161,3), //naranja
    color(112,42,69),//carmesi
  ];
  colores = [11];

  colores[0] = paleta[2];
  colores[1] = paleta[0];
  colores[2] = paleta[3];
  colores[3] = paleta[3];
  colores[4] = paleta[2];
  colores[5] = paleta[4];
  colores[6] = paleta[2];
  colores[7] = paleta[2];
  colores[8] = paleta[2];
  colores[9] = paleta[2];
  colores[10] = paleta[3];
  //colores[11] = paleta[2];
}

function draw() {
background(220);
//Figuras que están en la parte de atrás de las figuras grandes

figura.muestra(3,250,350,colores[3]); //F3
figura.muestra(4,280,330,colores[4]); //F4
figura.muestra(5,280,430,colores[5]); //F5


//Figuras más grandes
figura.muestra(0,250,240,colores[0]); //F0
figura.muestra(1,300,370,colores[1]); //F1
figura.muestra(2,170,180,colores[2]); //F2

//Figuras parte inferior izquierda
figura.muestra(6,100,530,colores[6]); //F6
figura.muestra(7,140,540,colores[7]); //F7

figura.muestra(8,400,300,colores[8]); //F8
figura.muestra(10,400,320,colores[10]); //F10
figura.muestra(9,440,360,colores[9]); //F9

figura.mover();
}

function mousePressed(){
cambiarColores();
}

function cambiarColores(){
for (i=0; i<11; i++){
 colores[i] = paleta[int(random(0,4.99))];
}
}
