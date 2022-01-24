"use strict";
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
let id = 5;
let company = 'KhangBeo Ltd';
let isDead = true;
// can be any types
let x = 'Hello';
// set to boolean, no errors
x = true;
let age;
age = 30;
// set an array that only have numbers
let ids = [1, 2, 3];
// can't push any other types in 
// ids.push('Hello'), gives error
// [1, 2, 3, true], error
// also any type
let arr = [1, true, 'Joe'];
// Tuple
// you can specify the exact type inside the array
let person = [1, 'Hi', true];
// wrong [1, 'Hi', 2], needs a boolean
// Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Hi'],
    [3, 'Boys'],
];
// Union: use if you want a variable to hold more than one type
let pid = 22;
pid = 22;
pid = 'Hi';
// Enum: lets you define a set of named constants, numeric/string
// by default enum values start at 0, then increments by 1 for each value
// changing first item's value will also update the other values
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 3] = "Up";
    Direction1[Direction1["Down"] = 4] = "Down";
    Direction1[Direction1["Left"] = 5] = "Left";
    Direction1[Direction1["Right"] = 6] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// Objects 
// This is messy
const user = {
    id: 1,
    name: 'Joe'
};
const users = {
    id: 1,
    name: 'John'
};
const pokemon = {
    id: 2,
    name: 'Bulbasaur'
};
// Type Assertion
// explicitly telling compiler we want to treat an entity as a different type
// Two ways
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Function
// by default parameter have any type
// set type for parameter and return value
function addNum(x, y) {
    return x + y;
}
// Void
// you might not always have a return value, use void 
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
// Data modifiers
// public, private, protected
// private: only access the property within the class
// protected: only access within class Cars and any classes extended from it
// public: same thing as leaving it off
// can also have other methods
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
// subclass
class Employee extends Person {
    constructor(id, name, position) {
        // call super and pass in id and name, we don't have to set this.id or this.name
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// Generics, used to build reusable components
// set a placeholder of a type
// define a type when you call it
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['brad', 'john', 'jill']);
