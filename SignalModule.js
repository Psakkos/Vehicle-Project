let Signal = function(array){
  let numberOfPoints = array.length;
  let Point = array;
  let transformedPoints = array;
  let range = calculateSpan(points, "y");
  let period = calculateSpan(points, "x");

  function getRange(){return range;}
  function getPeriod(){return period;}
  function getPointArray(){return points;}

  function shiftX(value){
      for(let p=0;p<numberOfPoints;p++){
        let tempx= transformedPoints[p].getx()+value;
        let tempy= transformedPoints[p].gety();
        let temppoint=new Point(tempx,tempy);
        transformedPoints[p]=temppoint;
      }
  }
  function shiftY(value){
    for(let p=0;p<numberOfPoints;p++){
      let tempx=transformedPoints[p].getx();
      let tempy=transformedPoints[p].gety()+value;
      let temppoint=new Point(tempx,tempy);
      transformedPoints[p]=temppoint;
  }
}
  function stretchX(value){
    for(let p=0;p<numberOfPoints;p++){
      let tempx= transformedPoints[p].getx()*value;
      let tempy= transformedPoints[p].gety();
      let temppoint=new Point(tempx,tempy);
      transformedPoints[p]=temppoint;
  }
}
  function stretchY(value){
    for(let p=0;p<numberOfPoints;p++){
      let tempx= transformedPoints[p].getx();
      let tempy= transformedPoints[p].gety()*value;
      let temppoint=new Point(tempx,tempy);
      transformedPoints[p]=temppoint;
  }
}
  function transform(value){
      return transformedPoints;
  }
  function outputOf(xvalue){
      let answer= xvalue%numberOfPoints
      return Point[answer].gety();
  }
  function calculateSpan(array,coordinate){
    let xlist=[];
    let ylist=[];
      for(let p=0;p<numberOfPoints;p++){
      xlist[p]=Point[p].getx();
      ylist[p]=Point[p].gety();
    }
      if(coordinate == "x"){
        let xmax=Math.max(xlist);
        let xmin=Math.min(xlist);
        let xSpan=xmax- xmin;
        return xSpan;
      }
      if(coordinate == "y"){
        let ymax=Math.max(ylist);
        let ymin=Math.min(ylist);
        let ySpan=ymax- ymin;
      }
  }
  return{shiftX,shiftY,stretchY,stretchX,transform,outputOf}
}
module.exports=Signal;
