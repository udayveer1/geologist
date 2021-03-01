class Stone{
    constructor(x,y){
       var options={
        density : 2,
    friction : 1,
    restitution : 1
       }
       this.body=Bodies.rectangle(x,y,60,60,options)
       this.width=60
       this.height=60
       World.add(world,this.body)
}
display(){
    var pos=this.body.position
    pos.x=mouseX
    pos.y=mouseY
    var angle=this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    strokeWeight(3)
    stroke("white")
    fill ("black")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
}
}