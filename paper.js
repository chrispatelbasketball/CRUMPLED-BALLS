class Paper{
    constructor(x, y, width, height, angle) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,30,options);
        this.width = 60;
        this.height = 60;
        World.add(world, this.body);
        this.image = loadImage("paper.png")
      }
      
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height);
        pop();
      }
}