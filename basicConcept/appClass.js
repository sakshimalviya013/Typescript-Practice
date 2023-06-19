var AppClass = /** @class */ (function () {
    function AppClass(name) {
        this.name = name;
    }
    AppClass.prototype.getName = function () {
        console.log(this.name);
    };
    return AppClass;
}());
var a1 = new AppClass("Sakshi");
a1.getName();
