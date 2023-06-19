function users<T>(data:<T>):T
{
    return data
}

console.log(users({
    name:"sakshi",
    age:30
}))