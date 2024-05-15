class Figuras{

    constructor(numrandom){
        imageMode(CENTER);
        this.figura = []; //Arreglo de las figuras
        this.numrandom;
        for (let i=0; i<11; i++) {
            this.figura.push(loadImage('img/F'+i+'.png')); //Carga de las imagenes
          }
        this.numrandom = numrandom;
        this.dirI = [radians(-76),radians(-76),radians(-142),radians(-165),radians(-165),radians(-165),radians(-35),radians(-35),radians(-165),radians(-165),radians(-165)];
        // (-76 f 0, 1)(-142 f 2) (-35 f 6, 7) (-165 f 3, 4, 5, 8, 9, 10)
        this.dirD = [radians(104),radians(104),radians(38),radians(15),radians(15),radians(15),radians(145),radians(145),radians(15),radians(15),radians(15)];
        // (104 f 0, 1) (38 f 2) (145 f 6, 7) (15 f 3, 4, 5, 8, 9, 10) 
        this.posx = [250,300,170,250,280,280,100,140,400,400,440];
        this.posy = [240,370,180,350,330,430,530,540,300,320,360];
        this.vel = int (random(1,10));
    }

    muestra(num,fx,fy,c, ancho, alto){  //El se utiliza para mostrar las figuras en pantalla
        this.num = num;
        this.fx = fx;
        this.fy = fy;
        this.c = c;
        this.tamancho = ancho;
        this.tamalto = alto;

        if(this.num == 0 & this.numrandom == 0){
            this.tamancho= map(mouseY, 0, 700, 155, 200 );
            this.tamalto= map(mouseY, 0, 700, 313, 400 );
        }else if(this.num == 1 & this.numrandom == 1){
            this.tamancho= map(mouseY, 0, 700, 156, 256 );
            this.tamalto= map(mouseY, 0, 700, 371, 471 );
        }else if(this.num == 2 & this.numrandom == 2){
            this.tamancho= map(mouseY, 0, 700, 211, 300 );
            this.tamalto= map(mouseY, 0, 700, 203, 300 );
        }else if(this.num == 3 & this.numrandom == 3){
            this.tamancho= map(mouseY, 0, 700, 212, 300 );
            this.tamalto= map(mouseY, 0, 700, 67, 150 );
        }else if(this.num == 4 & this.numrandom == 4){
            this.tamancho= map(mouseY, 0, 700, 297, 360 );
            this.tamalto= map(mouseY, 0, 700, 88, 150 );
        }else if(this.num == 5 & this.numrandom == 5){
            this.tamancho= map(mouseY, 0, 700, 158, 180 );
            this.tamalto= map(mouseY, 0, 700, 56, 80 );
        }else if(this.num == 6 & this.numrandom == 6){
            this.tamancho= map(mouseY, 0, 700, 115, 130 );
            this.tamalto= map(mouseY, 0, 700, 95, 150 );
        }else if(this.num == 7 & this.numrandom == 7){
            this.tamancho= map(mouseY, 0, 700, 44, 60 );
            this.tamalto= map(mouseY, 0, 700, 41, 60 );
        }else if(this.num == 8 & this.numrandom == 8){
            this.tamancho= map(mouseY, 0, 700, 63, 80 );
            this.tamalto= map(mouseY, 0, 700, 24, 40 );
        }else if(this.num == 9 & this.numrandom == 9){
            this.tamancho= map(mouseY, 0, 700, 75, 140 );
            this.tamalto= map(mouseY, 0, 700, 26, 30 );
        }else if(this.num == 10 & this.numrandom == 10){
            this.tamancho= map(mouseY, 0, 700, 49, 80 );
            this.tamalto= map(mouseY, 0, 700, 23, 50 );
        }

        push();
        tint(color(c));
        image(this.figura[this.num], this.posx[this.num], this.posy[this.num], this.tamancho, this.tamalto);
        pop();
    }

    mover(){

        if (mouseX>400 && mouseX<600){ // 

            for (let i=0; i<11; i++){
                
                let dx = this.vel * cos( this.dirD[i] );
                let dy = this.vel * sin( this.dirD[i] );
                this.posx[i] += dx;
                this.posy[i] += dy; 
                
            }
    
        } else if (mouseX<200 && mouseX>0){
            for (let i=0; i<11; i++){
                
                let dx = this.vel * cos( this.dirI[i] );
                let dy = this.vel * sin( this.dirI[i] );
                this.posx[i] += dx;
                this.posy[i] += dy; 
                
            }
        }
    
    }

    
}