interface Parent {
    name: string;
}
interface Parent2 {
    color: string;
}
interface Child extends Parent, Parent2 {
    age: number;
}

const Profile: Child = {
    name: 'Fedya',
    age: 20,
    color: 'red',
}
type MyFunc = (a: number, b: number) => number;

const func:MyFunc = (a, b) => a+b