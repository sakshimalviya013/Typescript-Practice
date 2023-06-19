interface userType{
    name :string,
    age: number,
    getName:()=>string
}

let  user:userType ={
    name : 'anil',
    age: 30,
    getName: function()
    {
        return "sakshi malviya";
    }
}
console.log(user);