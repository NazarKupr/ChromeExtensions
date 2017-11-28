
var s = function(scetch){
    scetch.setup=function() {
    let h = document.body.clientHeight;
    let c   = scetch.createCanvas(scetch.windowWidth, h);
    c.position(0,0);
    c.style("pointer-events" , "none")
    scetch.clear();
  }
  scetch.draw = function() {
    document.body.style["userSelect"] = "none";
    scetch.stroke(0);
    scetch.strokeWeight(4);
    if(scetch.mouseIsPressed){
      scetch.line(scetch.mouseX , scetch.mouseY , scetch.pmouseX , scetch.pmouseY);

    }
  }
};
var myp5 =new p5(s);
