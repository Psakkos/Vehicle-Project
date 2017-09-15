const Point = function(xcor,ycor){
    let x = xcor;
    let y = ycor;
    function getx(){return x;}
    function gety(){return y;}
    function magnitude(){
        return Math.sqrt(x*x+y*y);
    }
    function distanceTo(p2){
        let xsqared = (p2.getx()-x)*(px.getx()-x);
        let ysquared = (p2.gety()-y)*(p2.gety()-y);
    }
    function direction(){
        let angle = Math.atan2(y,x)*180 / Math.PI
        if(x>=0 && y>0){
            return angle;
        }
        else if(x<0){
            return 180 + angle;
        }
        else{
            return 360+angle
        }
    }
    function print(){
        console.log("("+x+", "+y+")");
    }
    return{getx,gety,magnitude,distanceTo,direction,print};
}
module.exports = Point;
