let cor;
let circulox;
let circuloy;

function setup() {
  createCanvas(400, 400);
  background("rgb(72,184,165)");
  cor = color(random(0, 225), random(0, 225), random(0, 225));
  circulox = [0, 0, 0];
  circuloy= [random(height), random(height), random(height)];

}
//circulox = 0, 0, 0
//circuloy = 300, 150, 50
function draw() {
  
  fill(cor);
  for( let contador in circulox){ 
  console.log(contador)
    circle(circulox [contador], circuloy[contador], 50); 
    circulox [contador] += random(0, 3);
    circuloy [contador] += random(-3, 3);
    
    if (circulox[contador] >= width){
      circulox[contador] = 0;
      circuloy[contador] = random(height);
    }
  }
  //circulox [1] += random(0, 3);
  //circuloy [1] += random(-3, 3);
  
  //circulox [2] += random(0, 3);
  //circuloy [2] += random(-3, 3);
  
  if(mouseIsPressed){
    cor = color(random(0, 225), random(0, 225), random(0, 225), random(0, 100));

  }

 
}