/*
//fdescribe("Ang2: just execute this suite only", function(){

//(function) expression evaluation is top-down
//results (of functions) are then called as functions from down-top
//https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories

function f(){
  console.log('f() expression evaluated ');
  return function(tar, x:string, descriptor: PropertyDescriptor){
    console.log('f() called');
  }
}

function g(){
  console.log('g() expression evaluated ');
  //return function(tar, x:string, descriptor: PropertyDescriptor){
  return function(a, b){
    console.log('g() called');
  }
}

class C{
  constructor(){ }
  @f()
  @g()
  somemethod(){
    console.log('inside somemethod');
  }
} //class C ends.

// });
*/

//https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories
//https://www.typescriptlang.org/docs/handbook/generics.html

// (function(){
//   return class A{
//     constructor(){ }
//   }
// })()

describe('', function(){
//eg. of a class decorator.
function classDecorator<T extends { new(...x) }>(cons:T) {
    return class extends cons {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    flag1: string;
    constructor(m: string) {
        this.hello = m;
        this.flag1 = 'set';
    }
}

// console.log(new Greeter("world"));
});
