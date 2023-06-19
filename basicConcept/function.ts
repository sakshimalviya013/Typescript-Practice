const add = (num:number,num2:number,isShown:boolean) =>{
    if(isShown==true)
console.log(num+num2);

else
return num+num2;
}

const res= add(2,3,false);
console.log(res);