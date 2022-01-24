/*
    typescript = superset of JS
    types optional
    compiles to regular JS
    front-end or back-end with Node
    ES6+ features
    add types from 3rd party libraries with type definitions

    dynamically typed: types associated with runtime values, not named explicitly in the code
    statically typed: explicitly assign types to variables

    pros: more robust, spot bugs easily, predictability, readability, popular
    cons: more to write/learn, required compilation, not true static typing

    ts and tsx extensions
    TSC (typescript compiler) compile ts files to JS
        can watch files and errors at compile time
        many tools have TS Compilation by default
    most IDEs have support for TS
    tsconfig.json is used to create configurations for TS

    ## Setup ##
    npm install -g typescript

    ## Compiler ##
    go to folder with tsc file
    run tsc [filename].ts
    tsc --watch [filename].ts - watch a file continuously

    ## Setup Config ##
    tsc --init
    change 
        target: es6
        outDir: ./dist
        rootDir: ./src
    
    put tsc files in src
    create dist and src directories
*/

// Basic Types
let id: number = 5
let company: string = 'KhangBeo Ltd'
let isDead: boolean = true
// can be any types
let x: any = 'Hello'
// set to boolean, no errors
x = true

let age: number
age = 30

// set an array that only have numbers
let ids: number[] = [1, 2, 3]
// can't push any other types in 
// ids.push('Hello'), gives error
// [1, 2, 3, true], error
// also any type
let arr: any[] = [1, true, 'Joe']

// Tuple
// you can specify the exact type inside the array
let person: [number, string, boolean] = [1, 'Hi', true]
// wrong [1, 'Hi', 2], needs a boolean
// Tuple array
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'Hi'],
    [3, 'Boys'],
]
// Union: use if you want a variable to hold more than one type
let pid: string | number = 22
pid = 22
pid = 'Hi'

// Enum: lets you define a set of named constants, numeric/string
// by default enum values start at 0, then increments by 1 for each value
// changing first item's value will also update the other values
enum Direction1 {
    Up = 3,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects 
// This is messy
const user: {
    id: number,
    name: string,
} = {
    id: 1,
    name: 'Joe'
}
// Do this instead
type User = {
    id: number,
    name: string
}
const users: User = {
    id: 1,
    name: 'John'
}
const pokemon: User = {
    id: 2,
    name: 'Bulbasaur'
}

// Type Assertion
// explicitly telling compiler we want to treat an entity as a different type
// Two ways
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Function
// by default parameter have any type
// set type for parameter and return value
function addNum(x: number, y: number): number {
    return x + y
}

// Void
// you might not always have a return value, use void 
function log(message: string | number): void {
    console.log(message)
}

// Interfaces
// a custom type or specific structure to an object or function
// use it like type User { }
// age? use to set an optional value
// can have readonly property to a value
//      readonly values can't be re-assigned, only read
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}
const user1: UserInterface = {
    id: 1,
    name: 'John',
}
// a type can be used with primitives and union
// interface won't work with primitives or union
type Point = number | string
const p1: Point = 1
// can also use interfaces with function
// can't change the types in parameter, have to match the interface
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// can also user interface with Classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}
// Classes
// Data modifiers
// public, private, protected
// private: only access the property within the class
// protected: only access within class Cars and any classes extended from it
// public: same thing as leaving it off
// can also have other methods
class Person implements PersonInterface {
    id: number // private id: number
    name: string // protected name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register(): string {
        return `${this.name} is now registered`
    }
}
const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

// subclass
class Employee extends Person {
    position: string
    constructor(id: number, name: string, position: string) {
        // call super and pass in id and name, we don't have to set this.id or this.name
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3, 'Shawn', 'Developer')

// Generics, used to build reusable components
// set a placeholder of a type
// define a type when you call it
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let stringArray = getArray<string>(['brad', 'john', 'jill'])