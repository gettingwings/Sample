class Edges{

    constructor(x,y,w,h){

        this.body = Body.rectangle(x,y,w,h,{isStatic:true});
        World.add(world, this.body);

    }

    display(){

    }
}