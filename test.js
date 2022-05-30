var User = /** @class */ (function () {
    function User(params) {
        this.name = params.name;
        this.age = params.age;
        this.hobby = params.hobby;
    }
    User.prototype.getInfo = function () {
        return "".concat(this.name, "-").concat(this.age);
    };
    return User;
}());
console.log(new User({ name: 'roberto',
    age: 27,
    hobby: ['programming', 'reading', 'gaming']
}).getInfo());
