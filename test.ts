interface IUser {
    name: string,
    age: number,
    hobby: string[]
}
type MyType = IUser;

const obj: MyType = {
    name: '',
    age: 27,
    hobby: ['']
}

class User {
    public name;
    public age;
    public hobby;
    constructor(params: IUser) {
        this.name = params.name;
        this.age = params.age;
        this.hobby = params.hobby;
    }

    getInfo(): string {
        return `${this.name}-${this.age}`;
    }
}

console.log(
    new User(
    {name: 'roberto',
        age: 27,
        hobby: ['programming', 'reading', 'gaming']
    }).getInfo()
)