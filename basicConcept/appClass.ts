class AppClass{
    name;
    constructor(name)
    {
        this.name= name
    }
    getName()
    {
        console.log(this.name)
    }
}
let a1= new AppClass("Sakshi");
a1.getName();