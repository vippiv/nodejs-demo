// 常用工具
/*
*util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
 */
function utilInherits() {
    var util = require("util");
    function Base() {
        this.name = "base";
        this.base = 1991;
        this.sayHello = function () {
            console.log("这里不会被继承到");
            console.log("Hello"+this.name);
        }
    }
    Base.prototype.showName = function () {
        console.log(this.name);
    }

    function Sub() {
        this.name = "sub";
    }
    util.inherits(Sub, Base);

    var objBase = new Base();
    objBase.showName();
    objBase.sayHello();
    var objSub = new Sub();
    objSub.showName();
    // objSub.sayHello();
}
// utilInherits();

/**
 *util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出
 */
function utilInspect() {
    var util = require("util");
    function Person() {
        this.name = "zwl";
        this.toString = function () {
            return this.name;
        }
    }
    var obj = new Person();
    console.log(util.inspect(obj));
    console.log(util.inspect(obj, true));
}
// utilInspect();

/*
*判断是否是数组
 */
function utilArray() {
    var util = require("util"), arr = [], obj = {};
    console.log(util.isArray(arr));
    console.log(util.isArray(new Array()));
    console.log(util.isArray(obj));
}
// utilArray();

/**
 * 判断是不是正则
 */
function utilIsReg() {
    var util = require("util");
    var reg = /[0-9]/g;
    console.log(util.isRegExp(reg));
}
// utilIsReg();

/**
 * 判断是不是日期
 */
function isDate() {
    var util = require("util");
    var date = new Date();
    console.log(util.isDate());
    console.log(util.isDate(new Date()));
}
isDate();