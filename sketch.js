var gridwidth = 55;
var grid = [];
var position = {x:0,y:0};
var way = [];
var direction;
var speedslider;
var zoomslider;

function setup(){
  createCanvas(500,500);
  background(0);

  speedslider =  createSlider(0,30,10,1);
  zoomslider = createSlider(3,50,25,1);

  resetGrid();

  way[[0,0]]=true;

  direction=random(['N','S','W','E']);

}

function resetGrid(){
  gridwidth = zoomslider.value();
  grid = [];
  for (var i = 0; i < gridwidth; i++) {
    for (var j = 0; j < gridwidth; j++) {
      grid[[i,j]] = new Cell({x:i,y:j},width/gridwidth);
    }
  }
}


function draw(){
  if(zoomslider!=gridwidth)resetGrid();

  for (var i = 0; i < gridwidth; i++) {
    for (var j = 0; j < gridwidth; j++) {
      grid[[i,j]].draw();
    }
  }

    if(frameCount%(floor(30/speedslider.value()))==0){

      if(random()>0.8){
        var arr = abbiegen(direction);
        if(random()<0.9){
          direction=arr[0];
        }
        else{
          direction=arr[1];
        }
      }



      switch (direction) {
      case 'E': position.x++;
        break;
      case 'S': position.y++;
        break;
      case 'W': position.x--;
        break;
      case 'N': position.y--;
        break;


  }
}
  way[[position.x,position.y]]=true;
}

function abbiegen(dir){
  switch (dir) {
    case 'E': return ['N','S'];
      break;
    case 'S': return ['W','E'];
      break;
    case 'W': return ['N','S'];
      break;
    case 'N': return ['W','E'];
      break;

  }
}


function Cell(pos,cellwidth){
  this.pos = pos;
  this.cellwidth = cellwidth;
  this.draw = function(){
    noStroke();
    var red = 50;
    if(way[[this.pos.x - floor(gridwidth/2) + position.x, this.pos.y - floor(gridwidth/2) + position.y]]){
            red = 200;
    }
    var noiseval = map(noise(0,(this.pos.x + position.x) /10,(this.pos.y  + position.y)/10),0,1,100,255);
    fill(red,noiseval,0,255);
    rect(pos.x*cellwidth,pos.y*cellwidth,cellwidth,cellwidth);
  }
}
