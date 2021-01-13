class Paper{
    constructor(x,y,radius){
        var prop={
            restitution:0.3,
            isStatic:false,
            density:1.2,
            friction:0.5
        }

        this.myObjects=Bodies.circle(x,y,radius,prop);
        World.add(world,this.myObjects);

        this.radius=radius;
    }

    display(){

        var angle=this.myObjects.angle;
        var position=this.myObjects.position;

        push();
        translate(position.x,position.y);
        rotate(angle);
        ellipseMode(CENTER);
        stroke("white");
        strokeWeight(1);
        fill("white");
        ellipse(0,0,this.width,this.height);
        pop();

    }
}