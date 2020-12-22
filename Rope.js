class Rope{
    constructor(a,b){
        var sharannya={
bodyA:a,
pointB:b,
stiffness:1.0
        }
        this.body=Constraint.create(sharannya)

        this.pointB=b
        World.add(world,this.body)
    }

    display(){
        strokeWeight(5)
        line(this.body.bodyA.position.x, this.body.bodyA.position.y,  this.pointB.x,this.pointB.y)

    
}






}