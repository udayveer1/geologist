class Rubber{
    constructor(x,y){
       var options={
        density : 2,
    friction : 1,
    restitution : 1
       }
       this.body=Bodies.elipse(x,y,50,50,options)
       this.width=50
       this.height=50
       World.add(world,this.body)
}
display(){
    var pos=this.body.position
   
    push ()
    translate (pos.x,pos.y)

    strokeWeight(3)
    stroke("white")
    fill ("blue")
    
    pop()
}
}