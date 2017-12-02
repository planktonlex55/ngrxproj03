import {TestBed, ComponentFixture} from '@angular/core/testing';
import { POCTestComponent } from 'app/POCs/string_interpolation/POCTestComponent.component';
// this class is used only for integration testing.
/*
1.    TestBed.configureTestingModule
        - this method takes a metadata obj. similar to what we provide to @NgModule.
        - this is how we create a dynamic testing module 

2.    TestBed.createComponent()
        - creates instance of this component. 
        - argument to this is the type of our component.
        - in our case, POCTestComponent class's type is POCTestComponent
       3. - it returns a component fixture. ComponentFixture is a wrapper around our component
            > with ComponentFixture, we can get access to both the component n its template 
            > import {ComponentFixture} from '@angular/core/testing'

4.    declare variables to capture instances
        - let component : POCTestComponent ;
        - let fixture : ComponentFixture<POCTestComponent> ; 

5.
    fixture.nativeElement    //returns <html> which is root of our template
    fixture.debugElement     //wrapper around nativeElement. gives us useful methods to query the DOM. 
- using fixture, we can also run change detection manually.
    fixture.detectChanges()

6. when u generate a component automatically, it creates 2 beforeEach blocks.
the first one is with async() and .configureTestingModule .... .compileComponents()
        - .compileComponents() is because it is compiling the html template which is in a separate file.
          > but this is unnecessary becoz webpack keeps all template code n js code in one file.
        - the async function is an utility function of angular. 
                - it takes another function as an argument 
                - launches it async-ly
        - remove .compileComponents() from previous block and move the .configureTestingModule into the 2nd 
                block. The async beforeEach-block would now be empty. get rid of it .
   pt.#6. is just to show how the auto-generated code is different from the code previously. 

*/

let component: POCTestComponent;
let fixture: ComponentFixture<POCTestComponent> ; // will be assigned o/p of createComponent

// 1.
TestBed.configureTestingModule({
    declarations: [POCTestComponent] 
});

// 2, 3, 4
fixture = TestBed.createComponent(POCTestComponent);
component = fixture.componentInstance; 
