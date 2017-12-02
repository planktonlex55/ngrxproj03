import {Component, OnInit } from '@angular/core'; // 2. OnInit is in @angular/core

@Component({
    selector : 'app-test',
    template: `<div>test component {{ pi }} </div>`    // 5.
}) // 3. no semi-colon !!!

export class POCTestComponent implements OnInit { // 1. implements !!! not extends!!!
    public pi = 3.14;  // 5. 

    ngOnInit() {    // 4. but the function name starts with "ng"
    }
}

//Goal. 
/*
    - create a new class without using ng 
    - add Component decorator to enhance it
*/

/* Execution steps
    - follow the numericals.
    - add import statement in app.module.ts
    - add class name in the "declarations" section of app.module.ts 
    - in app.component.html call this component using
        <app-test> </app-test>
*/
