// var frame = 1;
// var pos = {
//   x:0,y:0
// };
// var way = [pos];
//
// function setup() {
//   createCanvas(500,500);
//   background(0);
// }
//
// function draw() {
//   loadPixels();
//   for (var i = 0; i < width; i++) {
//     for (var j = 0; j < height; j++) {
//       var index = (i + j * width) * 4;
//       var redv=0;
//       for (var k = 0; k < way.length; k++) {
//         if(way[k].x-pos.x == floor(i / 20) && way[k].y-pos.y == floor(j / 20) ){
//           redv = 255;
//         }
//       }
//       pixels[index]=redv;
//       pixels[index+1]=map(noise(floor(i/20)+pos.x,floor(j/20)+pos.y),0,1,155,255);
//       pixels[index+2]=0;
//       pixels[index+3]=255;
//     }
//   }
//
//   switch (floor(random(4))) {
//     case 0: pos.x +=1;
//     case 1: pos.x -=1;
//     case 2: pos.y +=1;
//     case 3: pos.y -=1;
//       break;
//   }
//
//   way.push(pos);
//
//
//   updatePixels();
//   frame++;
// }
