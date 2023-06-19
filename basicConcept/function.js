var add = function (num, num2, isShown) {
    if (isShown == true)
        console.log(num + num2);
    else
        return num + num2;
};
var res = add(2, 3, false);
console.log(res);
